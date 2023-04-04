# Welcome to my chat app!

The purpose of this app is to be a simple chat client. A user can sign in, start a new conversation with the user of their choice, and begin chatting away!

## Running it

### Server

In order to start up the server navigation to the `server` directory. Execute the command `npm install` to make sure all the necessary packages have been installed.From here the command `npm run start` should start up the server. It will run on ports `3001` and `3002`.

The server has been split and one port handles websocket connections while the other handles the REST API


### Client

Navigate to the `messenger-app` directory. From here run `npm run start` and the web app should be ready for use on port `3000`.

## Concessions

### Registration
For the sake of time and the scope of this project I cut a few corners in order to get something that is somewhat useable.

The first feature to go was the user registration. There is a React component built out for it but I did go through with having the page rendered or building an endpoint on the backend to handle this functionality.

This was purely due to time, the implementation should be fairly straight forward given how the rest of this app has been built. The endpoint would take a users name and password and add them to the userData object I have been using as somewhat of a faux-database.

### WebSocket Implementation
I went through multiple websocket libraries on both the front and backend attempting to find one that would fit my use case. I wanted a solution that would be small and simple to suit this app. 

### Unit Testing
One area that I skipped over in this project is unit testing. I clearly did not take a test-driven development approach and unfortunately testing as a whole took a back seat. I scaffolded how I would approach testing for one of the modules in the backend code.

## Improvements

* Database: I would use a real database for storage on the backend instead of the in-memory solution used here
* State Management: Although I think what I used in the frontend actually works quite well for what was intended here, I would consider implementing a more robust state management solution. In the event the app were to get larger and incorporate more features, a state management library would be essential in my opinion.
* Styling: I quickly threw together some CSS to make the app look presentable. I would improve this to create something more visually appealing and perhaps pay more care to my use of divs and method of assigning classnames
* Authentication: I went with a basic auth solution for this app. I would opt for a more substantial and secure auth strategy in a real world application.
* Nightwatch Tests: I would utilize selenium or nightwatch tests for exercising the frontned of this app.
* API Testing: I would use a tool such as Postman to build a suite of tests for the endpoints on the backend for this app.
* Go Serverless (at least partially): If I were to utilize a database for storing data, it would be possible for me to refactor the backend services into smaller units that could be turned into Lambda Functions for AWS. Given that the REST API and WebSocket are already separate, this shouldn't be too difficult.

