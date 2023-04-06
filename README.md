# MOVIE-BOOKING-APPLICATION
This project is node.js back-end code for a Movie Booking Application that can create various entities like USERS, MOVIES, THEATERS,BOOKINGS and PAYMENTS as well as perform various actions on them.


*******  Features  **********

-----Account creation--------

1.You can create accounts for user as well as theatre owner.

2.If the user is a customer, the account will automatically be approved on verification.

3.In case of theatre owner, an admin will have to approve the account.

4.JSON Web Token used for authentication.

5.Users can also update some details like name, password and email.

6.Admin can update additional details like userType and userStatus.

7.User search is also available for users with proper authorization.

---------Movie API-----------

1.An admin can create a new movie, Edit an existing movie and delete an existing movie.

2.All registered users can get a list of all movies as well as a single movie using movieId.

---------Theatre API----------

1.A theatre owner or an admin can create a new theatre, Edit their existing theatre and delete their existing theatre.

2.All registered users can get a list of all theatres as well as a single theatre using theatreId.

3.All registered users can get a list of all the movies released in a single theatre using theatreId.

4.A theatre owner or an admin can add or remove a new movie in an existing theatre.

----------Booking API---------

1.All registered users can create a new booking and update their existing booking.

2.All registered users can get a list of all of their bookings as well as a single booking using bookingId.

3.An admin can get the list of all the bookings.

----------Payment API---------

1.All registered users with a booking can create a payment for their booking.

2.All registered users can get a list of all of their payments as well as a single payment using paymentId.

3.An admin can get the list of all the payments.


***********  DEPENDENCIES  ********

* npm modules

* express

* mongoose

* jsonwebtoken

* node-rest-client

* dotenv

* body-parser

* bcryptjs

* external applications

* notification service application


**************  REST API paths  *********

----USER OPERATIONS -----

@SIGNUP

@SIGNIN

@Get all users

@Get user by UserId

@Update user data

------MOVIE OPERATIONS ----

@CREATE

@UPDATE

@DELETE

@GET ALL MOVIES

@GET MOVIE BY MOVIEID

----------THEATER OPERATIONS-------

@CREATE A THEATER

@UPDATE

@DELETE

@GET ALL THEATERS

@GET THEATER BY ID

@GET MOVIES IN A THEATER

@UPDATE MOVIES IN A SINGLE THEATER

--------BOOKING OPERATIONS--------------

@CREATE

@UPDATE

@GET BOOKING BY ID

@GET ALL BOOKINGS


------------PAYMENT OPERATIONS----------

@CREATE

@GET BY PAYMENTID

@GET ALL PAYMENTS
