# Zendesk challenge 2021

## Content
- [Summary](#summary)
- [Installation and Usage](#installation-and-usage)

## Summary

For this challenge, I used React.js library for the frontend part and Node.js for the backend. I believe I am more comfortable and confident in JavaScript so I decided to take this path for challenge. 

Let's talk about libraries I used - 

1. Bootstrap 5 and React Bootstrap
2. Axios - for making API calls in the backend
3. React-Paginate - For using the pagination functionality if the list of tickets is greater than 25.

For this project, I decided to use React.js for the Frontend, and Node.js/Express for the backend. 

In the frontend, I have used both class component and functional component. For pagination functionality, I have made two states for maintaning the tickets per page. Whenever the home page is loaded, it will call all the tickets at first and then bifurcate into pages. Heres how we do -  
  - offset(initial value = 0) -> for maintaining start and end of the ticket list of that page. 
  - perPage(value=25) -> so this would allow how many pages we want per page.
So, for every page we would do offset = page selected*perPage and (offset, offset+perPage). Example - for 0th page - List(0,25), 1st page - List(25,50) and so on.

UI for Ticket viewing - 
![ss1](https://user-images.githubusercontent.com/90352791/143507165-460ad6f8-0eb9-4484-a539-62ff90eb0ba3.png)

![ss2](https://user-images.githubusercontent.com/90352791/143507169-9dbddde0-30ca-4ac8-8b7d-163591c82330.png)

For Eact Ticket - 

![ss3](https://user-images.githubusercontent.com/90352791/143507207-9f54d849-9c5e-4cea-8f9d-986197ab5838.png)




For displaying each ticket information, I have made modal for the ease of user. While iterating over every ticket to display, each ticket is assigned ID which will be used to call an API for individual information of ticket. If user wants to get information of ticket, they would click on the particular ticket which would trigger a modal and show the detailed information of that ticket.   

For the backend, I used Node.js and Express for api calls and chai library for writing down test cases. I have made a different file to store the authorization credentials which I will be using during api calls.

##As I had some time on my hand, I tried to implement Search(by Subject) and sort(by ID) feature on the tickets. The sole purpose of this feature was to show the knowledge of controlled components in React.js which is very important part of any UI.

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

