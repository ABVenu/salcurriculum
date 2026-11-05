"""Upload Session07 ai_everyday_work_kit resources to S3."""
import mimetypes
import os
from pathlib import Path

import boto3
from dotenv import load_dotenv

ROOT = Path(__file__).resolve().parents[5]
load_dotenv(ROOT / "Command Center" / ".env")

BUCKET = os.environ["AWS_BUCKET_NAME"]
PREFIX = "ai_everyday_work_kit"
BASE_URL = os.environ["AWS_BUCKET_URL"].rstrip("/")

KIT_DIR = Path(__file__).resolve().parent / "ai_everyday_work_kit"

CONTENT_TYPES = {
    ".md": "text/markdown; charset=utf-8",
    ".txt": "text/plain; charset=utf-8",
}

s3 = boto3.client(
    "s3",
    region_name=os.environ["AWS_REGION"],
    aws_access_key_id=os.environ["AWS_ACCESS_KEY_ID"],
    aws_secret_access_key=os.environ["AWS_SECRET_ACCESS_KEY"],
)


def content_type_for(path: Path) -> str:
    if path.suffix.lower() in CONTENT_TYPES:
        return CONTENT_TYPES[path.suffix.lower()]
    guessed, _ = mimetypes.guess_type(path.name)
    return guessed or "application/octet-stream"


def main() -> None:
    if not KIT_DIR.is_dir():
        raise SystemExit(f"Kit folder not found: {KIT_DIR}")

    uploaded = 0
    for path in sorted(KIT_DIR.rglob("*")):
        if not path.is_file() or path.name.startswith("."):
            continue
        rel = path.relative_to(KIT_DIR).as_posix()
        key = f"{PREFIX}/{rel}"
        s3.upload_file(
            str(path),
            BUCKET,
            key,
            ExtraArgs={"ContentType": content_type_for(path)},
        )
        print(f"Uploaded {rel} -> {BASE_URL}/{key}")
        uploaded += 1

    print(f"\nDone. {uploaded} file(s) under s3://{BUCKET}/{PREFIX}/")
    print(f"Base URL: {BASE_URL}/{PREFIX}/")


if __name__ == "__main__":
    main()
