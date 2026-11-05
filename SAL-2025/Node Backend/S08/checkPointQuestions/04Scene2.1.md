**Scene 2.1**

### 1. **You are modeling a relationship between `Students` and `Courses` where a student can enroll in many courses, and a course can have many students. You choose to implement it using references. Which query would allow you to retrieve a course with its enrolled students' names and emails?**

Given schemas:

```js
// Student Schema
const studentSchema = new mongoose.Schema({
  name: String,
  email: String
});

// Course Schema
const courseSchema = new mongoose.Schema({
  title: String,
  enrolledStudents: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Student' }]
});
```

**What is the correct query to get the course along with all enrolled student details?**

A)  
```js
Course.find().populate('enrolledStudents', 'name email');
```

B)  
```js
Student.find().populate('Course', 'title');
```

C)  
```js
Course.find().join('enrolledStudents').select('name email');
```

D)  
```js
Course.populate('enrolledStudents').find('name email');
```

**Correct Answer:** A) `Course.find().populate('enrolledStudents', 'name email');`

---

