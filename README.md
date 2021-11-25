# Zendesk challenge 2021

Frontend is hosted here: https://main--sad-jang-97d306.netlify.app/
Backend is hosted here: https://zendesk-server.herokuapp.com/

## Content
- [Summary](#summary)
- [Installation and Usage](#installation-and-usage)

## Summary

For this project, I decided to use React.js for the Frontend, and Node.js/Express for the backend. 

I decided to go with React for the frontend as it is what I know best, and I wanted the chance to use a few libraries I have been meaning to learn for a while now: React-query and React-table. These were both very useful, React-query especially has a very friendly caching system which was quite useful in ensuring that our api was not called more than needed. I wrote a few basic tests for my TicketTable component, using react-testing-library (RTL). These tests were not extremely extensive and if I had more time I would write tests for my other components as well, along with mocking my react-query queries.

For the backend, I used Node.js and Express as these are also the technologies I am the most familiar with for creating APIs. I decided to use express over the http module as it abstracts away the complexity of setting up an HTTP server, letting me focus on the task at hand. It also leads to much easier abstract of logic, and usage of the MVC (In this case, without the Views) pattern. For testing the backend I used Mocha and chai, to run unit tests run the command ```npm run test``` in the server directory.

## Installation and Usage

In this repository we have 2 main directories, client and server.

Inside the client directory we have the Frontend for our ticket viewer application, which uses React (bootstrapped with Create-React-App).

Inside the server directory we have the Backend for our ticket viewer application, which uses Node.js and Express.

The below will contain detailed instructions on how to set up this project and run it locally, along with the commands to write in terminal at each step.

#### Before anything else
1. Clone the repository
2. Install node.js (v14 or greater)

#### Server Installation:
1. Enter the server directory ```cd server```.
2. Run npm install to install all dependencies ```npm install```.
3. create a .env file ```touch .env```.
4. In your favourite text editor, copy the contents of the ```.env.example``` file, and paste this into the .env file.
5. Then, replace ```<username>``` in the ZENDESK_DOMAIN variable with your zendesk username, replace the email in the EMAIL varaible with the email associated with your zendesk acccount, and replace the token in the TOKEN variable with your zendesk api access token (ensure that it is your access token not password, and that token access is activated for your zendesk account).
6. Run ```npm run dev``` to start your server!

#### Client Installation:
1. Enter the client directory ```cd client```.
2. Run npm install to install all dependencies ```npm install```.
3. Create a .env file ```touch .env```.
4. In your favourite text editor, add this line to the .env file ```REACT_APP_SERVER_URL=http://localhost:4000```.
5. Ensure that your server is already running, and then finally run ```npm start```!

#### Tests
Run tests in both directories with ```npm run test```

