### **Problem Statement: Mini Banking System (TypeScript CLI)**

You are developing a **Mini Banking System** where users can create accounts and perform transactions through a **command-line interface**. The application will be developed using **TypeScript**, and it must follow **Object-Oriented Programming principles** and use relevant **design patterns**.

---

### **Requirements**

#### 1. **Core Functionality**

- Users can create a bank account by providing:
  - Name
  - Mobile Number
- The system will:
  - Generate a unique **Account Number**
  - Generate and return a secure **4-digit PIN**
  - Set initial balance to ₹2000
- All other operations require:
  - `Account Number` and `PIN` for authentication

---

#### 2. **CLI Command Format**

All operations are performed using **single CLI commands** in the following format:

```
> commandName <AccountNumber> <Pin> [Other Inputs]
```

---

#### 3. **Supported Commands and Examples**

##### Create Account

```
> createAccount RaviKumar 9876543210

Account created successfully!
Account Number: 100001
PIN: 3852
Balance: ₹2000
```

---

##### Check Balance

```
> checkBalance 100001 3852

Balance for Account 100001: ₹2000
```

---

##### ➕ Add Money

```
> addMoney 100001 3852 3000

₹3000 added successfully.
Updated Balance: ₹5000
```

---

##### ➖ Withdraw Money

```
> withdrawMoney 100001 3852 1000

₹1000 withdrawn successfully.
Updated Balance: ₹4000
```

---

##### Transfer Money

```
> transferMoney 100001 3852 100002 2000

₹2000 transferred from Account 100001 to Account 100002
Remaining Balance: ₹2000
```

Transfer Limit Validation:

```
> transferMoney 100001 3852 6000

Transfer failed: Daily transfer limit of ₹5000 exceeded.
```

---

##### Error Cases

**Duplicate Account Creation:**

```
> createAccount RaviKumar 9876543210

Error: Account already exists with mobile number 9876543210
```

**Invalid PIN:**

```
> checkBalance 100001 1234

Error: Invalid PIN for Account 100001
```

---

### **Design Considerations**

- Use **OOP principles** for entities like `Account`, `Bank`, and `Transaction`
- Apply the following design patterns:
  - **Singleton Pattern**: One instance of the banking system; prevents duplicate accounts for same mobile
  - **Strategy Pattern**: To handle daily transaction limits:
    - Max 5 transactions/day
    - Max ₹5000 transfer/day
- Proper validations and error handling for all operations

---

### **System Design Requirements**

- Build with **TypeScript**
- CLI interface reads command + arguments, parses, and performs action
- Include **class diagrams** and basic flow documentation

---

### **Special Feature**

#### Mini Statement

```
> miniStatement 100001 3852

Last 5 transactions:
1. Deposited ₹3000
2. Withdrawn ₹1000
3. Transferred ₹2000 to 100002
4. ...
5. ...
```

---

### **Deliverables**

- Fully working CLI application
- Use of Singleton and Strategy patterns
- GitHub repository with:
  - Source code
  - README (with usage guide and sample commands)
  - Class diagrams (UML-style or markdown)

---

### **Submission**

Push the code to your Masai GitHub repo and share the link.
