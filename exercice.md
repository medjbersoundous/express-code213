# Car Rental Agency
2 type of users
- **Admin**: manages vehicles, customers and all reservations.
- **Customer**: creates an account, logs in and reserves available vehicles.

## 2. Database models

| Model    | Attributes                                         |
| -------- | -------------------------------------------------- |
| Admin    | name, email, password                              |
| Customer | name, email, password, phone                       |
| Category | name, description                                  |
| Car      | brand, model, year, pricePerDay, status, category_id  |
| Rental   | customer_id, car_id, startDate, endDate, totalPrice, status |


## 3. Required functionalities

### Admin functionalities

- Login.
- Add, display, update and delete cars.
- Add, display, update and delete categories.
- Display all customers.
- Display all rentals.
- Confirm or reject rental requests.
- Cancel a rental.

### Customer functionalities

- Register and login.
- Display available cars.
- Display car details.
- Create a rental request.
- Display their own rental history.
- Cancel their own pending rental.

## 4. Authentication and authorization

- Protected routes depending on the user's role.
- Customers must not access another customer's rentals.
- Only admins can manage cars and categories.

## 5. Rules

1. A car cannot be rented if its status is unavailable.
2. The end date must be after the start date.
3. The total price is calculated automatically:

   `totalPrice = numberOfDays * pricePerDay`
4. An admin can confirm or reject a rental request.

5. A customer cannot cancel another customer's rental. "plus"

