// Problem Statement: You are building a web application using Express in Node.js.
// Create an Express route to handle GET requests to the endpoint "/greet" that takes a query parameter "name" and returns a personalized greeting. 
// If the name parameter is not provided, the default greeting should be "Hello, Guest!".

const express = require('express');

const app = express();


function greetHandler(req, res) {
    // Your implementation here
    const name = req.query.name || 'Guest';

    res.send(`Hello, ${name}!`);
  }

  app.get('/greet', greetHandler);

  app.listen(3000 , ()=> console.log("Hello server"))


//   Expected Output:

// If the "name" parameter is provided: "Hello, {name}!"
// If the "name" parameter is not provided: "Hello, Guest!"
// Test Cases:

// Request to /greet?name=John should return "Hello, John!"
// Request to /greet should return "Hello, Guest!"