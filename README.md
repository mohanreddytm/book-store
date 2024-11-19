# Title

    Interactive Bookstore Application

## Objective

    The application should allow users to browse and search for books, view book details, add      books  to a shopping cart, and place an order.

## Tech Stack

    ReactJS, React Router, Redux or React Context API, CSS or CSS frameworks, Git, and GitHub for hosting the repository.

## Completion Instructions

### Functionality

#### Must Have
* Build a ReactJS application with multiple pages/components, including Home, Book Listing, Book Details, Shopping Cart, and Checkout pages
* Implement features such as book search, book filtering, add to cart, remove from cart, and order placement.

#### Nice to Have

* Implementing user authentication, unit tests, and deploying the application on a hosting platform.

### Guidelines to develop a project

#### Must Have


* Create a new public repository on GitHub for the assignment.
* Commit your code regularly and include clear commit messages.
* Include a README file explaining the project setup, usage instructions, and any additional  information.
* Ensure the repository is well-organized and easy to navigate.

#### Nice to Have
NA


### ROUTES

* Page------------------Route-------------------Path
* Home------------------Home--------------------/
* Book List-------------Book List---------------/books
* Book Details----------Book Details------------/books/:id
* Cart------------------Cart--------------------/cart
* Checkout--------------Checkout----------------/checkout
* Not Found-------------Not Found---------------/not-found

## Resources

### Pages

#### Page: Home
Page Details:
* Header - links for pages Home, Book List, Cart
* Banner - Heading, description, and “Explore Books” Button
Navigation:


#### Page: Book List
Page Details:
Header - links for pages Home, Book List, Cart, Book Items, Search, Filter
Navigation:
* Book List" link in Header
* "Explore Books" Button
* "Back" Button in Book Details Page

#### Page: Book Details
Page Details:
* Book detailed Information
* "Add to cart" Button
* "Back" button
Navigation: Each Book Item in Book List Page


#### Page: Cart
Page Details:
* Cart Items,
* "Remove" Button
* Order Summary
* "Checkout" Button
Navigation:
* "Cart" link in Header
* "Back" Button in Checkout Page


#### Page: Checkout

Page Details:
"Back" Button,
Order Form (Personal Details, Summary, Place Order)
Navigation:
Checkout in Cart


### Design files

    Home, book list, book details, shopping cart, checkout  

### APIs

    Books, BookDetails, search, filter
    Reference : https://api.itbook.store/

### Third-party packages

NA
