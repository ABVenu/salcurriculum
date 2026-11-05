### **Key Points of the session and expected LOs Discussed**
**Session 06: External Middleware, Introduction to Databases - MongoDB**

Session 6-> Introduction to Mongoose
Very quick mongodb recap
Convincing the students, that DB are working independently, they need to be connected with our backend systems, so there is a need of some drivers/softwares that connects with backend and interacts with DB
what are these drivers/softwares called as??, what they do??, what are the types?,famous drivers used commonly
why mongoose used ??, why not MongoDB driver software is used??
steps to use, install, import, connect with DB....
Okay now connection established, now time to interact with DB.....,
How to interact??, need to create schema & Model
Clean, Clear & Complete theory part of what is schema, how important schema is, how it is backbone
My general way of linking importance of schema is UPI & banking system, all banks have a good schema such that ay UPI will make transaction with any bank
what is model, how it is different from schema,
My general example to relate them is schema is IceCream/IceCandy Mould, which gives shapes to IceCandy, but doesn't create make icecandy, but Model is like refrigeration box, which created IceCandies with the help of Mould (Schema)
Then create typical schema (simple schema, no need to put any valiadtions), explain the syntax, new keyword, S capital in Schema etc
Then create model and link schema with model, why collection name to mentioned in singluar in model, why s is added in DB automatically
Pain Point: Unable to differentiate what exactly is schema and model
Need to stamp them that we interact with DBS through model not schema
Performing basic CRUD, explaining and stamping them the some syntax difference between mongoose and mongodb like insertOne in present in mongodb but not in mongoose
Demonstrating how schema works like adding all the fields specified in the schema,
Missing some filed specified in schema and inserting and showing
Adding some extra fields which is not mentioning in the schema and showing
while CRUD open shell/compass and show, data is being added in DB
then improving standard coding practise like using .env to keep MONGO_URI not mentioning directly
then while explaining using .dotnev, explain the process object