"""Upload Session08 lecture note images to S3."""
import os
from pathlib import Path

import boto3
from dotenv import load_dotenv

ROOT = Path(__file__).resolve().parents[5]
load_dotenv(ROOT / "Command Center" / ".env")

BUCKET = os.environ["AWS_BUCKET_NAME"]
PREFIX = "sal-2026/nontech-pm-dm/session08"
BASE_URL = os.environ["AWS_BUCKET_URL"].rstrip("/")

s3 = boto3.client(
    "s3",
    region_name=os.environ["AWS_REGION"],
    aws_access_key_id=os.environ["AWS_ACCESS_KEY_ID"],
    aws_secret_access_key=os.environ["AWS_SECRET_ACCESS_KEY"],
)

images_dir = Path(__file__).parent
for path in sorted(images_dir.glob("s08-*.png")):
    key = f"{PREFIX}/{path.name}"
    s3.upload_file(str(path), BUCKET, key, ExtraArgs={"ContentType": "image/png"})
    print(f"Uploaded {path.name} -> {BASE_URL}/{key}")
