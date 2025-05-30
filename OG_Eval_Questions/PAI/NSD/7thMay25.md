## Problem Statement: Route Navigator Using Strategy Design Pattern

### **Context:**

You are building a **smart navigation system** in Typescript that helps users choose different types of routes between two locations:

- The **Shortest Route**
- The **Scenic Route**
- The **Traffic-Free Route**

Each route type follows a different path and has its own estimated distance. Your goal is to implement this system using the **Strategy Design Pattern**, allowing users to dynamically switch between route strategies at runtime.

---

### **Requirements:**

1. **Create three route strategy classes**:
   - `ShortestRoute`: Returns a direct path between two points.
   - `ScenicRoute`: Returns a path passing through visually pleasing locations.
   - `TrafficFreeRoute`: Returns a path avoiding traffic-heavy areas.
2. **Each strategy must return an object** containing:
   - `type`: name of the strategy
   - `steps`: an array of route steps (e.g., locations or roads)
   - `distance`: a string like "5 km", "9 km"
3. **Create a `Navigator` context class** that:
   - Accepts any route strategy.
   - Has a method `navigate(start, end)` that delegates to the strategy.
   - Outputs the full route information (steps and distance).

---

### 🔧 **Function Signature:**

```
class Navigator {
  setStrategy(strategy: RouteStrategy): void
  navigate(start: string, end: string): void
}

```

---

### Sample Input:

```
navigator.setStrategy(new ScenicRoute());
navigator.navigate("Home", "Office");

```

---

### Expected Output:

```
Calculating scenic route from Home to Office...
Scenic Route Selected
Steps: Home → Riverside → Park → Lake View → Office
Distance: 9 km
Route Complete

```

---

### Constraints:

- Use **OOP and Strategy Design Pattern** principles.
- Do **not use hardcoded console.logs** inside the Navigator—delegate decisions to the strategy classes.
- Write clean, modular, and maintainable code.

### Important :

1. Assume any missing information
2. Submit your code on masai github repo
3. You can assume data related to Steps and Distance in the problem statement
4. Designing API routes, Middleware, Server is not the core demand of problem.
