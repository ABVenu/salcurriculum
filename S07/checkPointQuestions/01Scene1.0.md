**Scene1.0**

1. ### What is the primary purpose of schema validation in Mongoose?

A) To improve query performance  
B) To prevent duplicate records  
C) To ensure data integrity and enforce rules  
D) To manage database indexes  
Answer: B) To prevent duplicate records

2. ### Which of the following is a valid way to make a field required in a Mongoose schema?

A) `required: true`  
B) `validate: true`  
C) `type: "required"`  
D) `unique: true`  
Answer: A) `required: true`

3. ### What will happen if a required field is missing during document creation?

A) The document is saved with default values  
B) The document is saved without the field  
C) Mongoose throws a validation error  
D) MongoDB ignores the missing field  
Answer: C) Mongoose throws a validation error

4. ### How do you validate that a string field must match a specific pattern in Mongoose?

A) Using `default`  
B) Using `enum`  
C) Using `regex`  
D) Using `match`  
Answer: D) Using `match`

5. ### Which option allows custom validation logic for a Mongoose field?

A) `type: Function`  
B) `validator` key with a function  
C) `required: Function`  
D) `custom: true`  
Answer: B) `validator` key with a function
