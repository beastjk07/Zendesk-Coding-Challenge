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


**As I had some time on my hand, I tried to implement Search(by Subject) and sort(by ID) feature on the tickets. The sole purpose of this feature was to show the knowledge of controlled components in React.js which is very important part of any UI.**


UI for Ticket viewing - 
![ss1](https://user-images.githubusercontent.com/90352791/143507165-460ad6f8-0eb9-4484-a539-62ff90eb0ba3.png)

![ss2](https://user-images.githubusercontent.com/90352791/143507169-9dbddde0-30ca-4ac8-8b7d-163591c82330.png)

For Eact Ticket - 

![ss3](https://user-images.githubusercontent.com/90352791/143507207-9f54d849-9c5e-4cea-8f9d-986197ab5838.png)




For displaying each ticket information, I have made modal for the ease of user. While iterating over every ticket to display, each ticket is assigned ID which will be used to call an API for individual information of ticket. If user wants to get information of ticket, they would click on the particular ticket which would trigger a modal and show the detailed information of that ticket.   

For the backend, I used Node.js and Express for api calls and chai library for writing down test cases. I have made a different file to store the authorization credentials which I will be using during api calls.

## Installation and Usage

We have 2 main directories, client and server.

In the client directory we have developed frontend part which uses React.js.

In the server directory we have developed Backend which uses Node.js and Express.

Here is the detailed instructions on how to set up this project and run it locally.

#### Library Installations
1. Clone the repository
2. Install node.js (v14 or greater)
3. Install Nodemon.js

#### Server Installation:
1. In server directory, run npm install to install all dependencies ```npm install```.
2. In configuration/config.js, replace ```<username>``` with your zendesk username, and then password with the associated password.
3. Run ```Nodemon index.js``` to start your server!

#### Client Installation:
1. In client, run npm install to install all dependencies ```npm install```.
2. Ensure that your server is already running, and then finally run ```npm start```!


