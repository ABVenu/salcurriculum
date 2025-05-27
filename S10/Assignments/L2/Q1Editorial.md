


### Route 1: `/analytics/movie-bookings`

**Get total bookings and total seats booked per movie**

* Lookup `movies` using `movieId`
* Group by `movieId`, sum bookings and seats
* Return: `movieTitle`, `totalBookings`, `totalSeats`

---

### Route 2: `/analytics/user-bookings`

**Get booking history for each user with movie titles**

* Lookup `users` using `userId`, and `movies` using `movieId`
* Project: `userName`, `movieTitle`, `bookingDate`, `status`

---

### Route 3: `/analytics/top-users`

**Find users who booked more than 2 times**

* Group by `userId`, count bookings
* Filter with `$match: { count: { $gt: 2 } }`
* Lookup user name

---

### Route 4: `/analytics/genre-wise-bookings`

**Total seats booked per genre**

* Lookup movies to get genre
* Group by `genre`, sum `seats`
* Project: `genre`, `totalSeats`

---

### Route 5: `/analytics/active-bookings`

**Get all current active ("Booked") bookings with movie and user details**

* Match: `status: "Booked"`
* Lookup user and movie
* Project: `userName`, `movieTitle`, `seats`, `bookingDate`

---

## 🧪 Sample Aggregation Code Snippet (for students):

```js
Booking.aggregate([
  { $match: { status: "Booked" } },
  {
    $lookup: {
      from: "users",
      localField: "userId",
      foreignField: "_id",
      as: "user"
    }
  },
  { $unwind: "$user" },
  {
    $lookup: {
      from: "movies",
      localField: "movieId",
      foreignField: "_id",
      as: "movie"
    }
  },
  { $unwind: "$movie" },
  {
    $project: {
      _id: 0,
      userName: "$user.name",
      movieTitle: "$movie.title",
      seats: 1,
      bookingDate: 1
    }
  }
])
```

---

## Submission Checklist

* [ ] Create 3 models (`movies`, `users`, `bookings`)
* [ ] Implement 3 POST routes for data creation
* [ ] Implement 5 aggregation routes using **Mongoose aggregation**
* [ ] Return `200` for success, `400` for bad request, `500` for internal error
* [ ] Push to GitHub or Masai Repo for evaluation

---

