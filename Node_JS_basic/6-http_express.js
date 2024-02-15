// Import the express module to create a web server
const express = require('express');

// Initialize the express application
const app = express();
// Define the port number on which the server will listen
const port = 1245;

// Define a GET route for the root URL ('/') that sends a greeting message
app.get('/', (req, res) => {
  // Send a response with the text 'Hello Holberton School!'
  res.send('Hello Holberton School!');
});

// Start the server and listen on the specified port
app.listen(port, () => {
  // This callback function can be used to log a message indicating the server is running (optional)
});

// Export the app for potential use in other modules or for testing
module.exports = app;
