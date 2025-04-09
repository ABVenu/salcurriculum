
### **Problem Statement: Mini Banking System**

You are developing a **Mini Banking System** that allows users to manage their bank accounts using the command line. The system will be built using **TypeScript** and designed using **Object-Oriented Programming principles** along with relevant **design patterns**.

---

### **Requirements**

#### 1. **Core Functionality**
- Users can create a bank account by providing:
  - Name
  - Mobile number
- Each new account should:
  - Start with ₹2000 balance
  - Be assigned a unique Account Number and 4-digit PIN
- After login, users can:
  - Check balance
  - Deposit money
  - Withdraw money
  - Transfer money to another user
  - View mini statement (last 5 transactions)

---

#### 2. **Design Considerations**
- Follow **OOPS principles** to design classes for users, accounts, and transactions.
- Use **Singleton Pattern** to ensure:
  - One central banking system instance
  - No two accounts with the same mobile number
- Use **Strategy Pattern** to support banking rules:
  - Max 5 transactions per day
  - Max ₹5000 can be transferred per day
- Maintain session states (login, logout)
- Add validations for all operations (e.g., insufficient balance, transfer limits, duplicate mobile)

---

#### 3. **System Design Requirements**
- Build a **CLI application using TypeScript**
- Ensure the CLI is user-friendly with numbered menu choices
- Modular folder structure and clean code separation
- Provide class diagrams as part of system documentation

---

### **Expected Inputs and Outputs**

#### 🏁 Account Creation

```
> Welcome to CLI Banking System
1. Create Account
2. Login
> 1

Enter your full name: Ravi Kumar
Enter your mobile number: 9876543210

✅ Account created successfully!
Account Number: 100001
PIN: 4521
Your starting balance is ₹2000
```

---

#### 🔐 Login Flow

```
> 2

Enter Account Number: 100001
Enter PIN: 4521

✅ Login successful! Welcome, Ravi Kumar.

1. Check Balance
2. Deposit Money
3. Withdraw Money
4. Transfer Money
5. Mini Statement
6. Logout
> _
```

---

#### 💰 Deposit

```
> 2
Enter amount to deposit: 3000
✅ ₹3000 deposited successfully. Current Balance: ₹5000
```

---

#### 💸 Withdraw

```
> 3
Enter amount to withdraw: 1000
✅ ₹1000 withdrawn successfully. Current Balance: ₹4000
```

---

#### 🔁 Transfer

```
> 4
Enter recipient Account Number: 100002
Enter amount to transfer: 6000
❌ Transfer failed. Daily transfer limit of ₹5000 exceeded.
```

---

#### 📜 Mini Statement

```
> 5
Last 5 transactions:
1. Deposited ₹3000
2. Withdrawn ₹1000
3. Transferred ₹2000 to 100002
4. Received ₹1000 from 100002
5. Withdrawn ₹500
```

---

#### 🚫 Error Case: Duplicate Mobile

```
> 1
Enter name: Anjali
Enter mobile number: 9876543210
❌ Error: Account with this mobile number already exists.
```

---

### **Deliverables**

- A **fully functional CLI app** using **TypeScript**
- Usage of **OOP principles** and **design patterns** (Singleton, Strategy)
- Clean CLI with input/output prompts and validations
- **Class diagrams** and brief documentation
- GitHub repository link containing:
  - Project source code
  - ReadMe file with setup instructions and usage
  - Screenshots of CLI execution

---

### **Submission**

Push the code to your Masai GitHub repo and share the link.

---

