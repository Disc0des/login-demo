# Re-cap demo Jan' 23

## Available routes
GET /users
POST /users -- user object
DELETE /users/{id}
PUT /users
POST /login -- username and password

## Complete Sign-up Form
The sign up form template has built, but it is not hooked up to the API. When submitted, it should POST a new user object to the database.

## Build Login page
Our client requires a page where they can login to the application. This should POST to the /login route, and if successful redirect to the dashboard. If unsuccessful, we should return the message sent by the API. We should only see the Navbar if we are logged in.

## Dark toggle
This component is currently a stateless checkbox, when ticked, it should change the background color of the App to dark grey. Make use of the useContext hook.

## Navbar Routes
Our Navbar currently conatins empty links, we should create placeholder components for each of these, and add them into the App router. When the user is logged in, they should see a list of the other users (useEffect).

## Update and delete
Our client would like us to add functionality to update and delete users from the list. 

## Private routes (if we have time)
Users should only be able to access the dashboard if they are logged in
