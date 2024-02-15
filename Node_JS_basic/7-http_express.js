// Import Express module to create a web server
const express = require('express');

// Extract command line arguments to get the database file path
const args = process.argv.slice(2);
/* Import the countStudents function from the local module for
reading and processing the student database */
const countStudents = require('./3-read_file_async');

// Assign the first command line argument as the database file path
const DATABASE = args[0];

// Initialize an Express application
const app = express();
// Define the port number for the server to listen on
const port = 1245;

// Route handler for the root path '/' to send a greeting message
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Route handler for '/students' to send the list of students from the database
app.get('/students', async (req, res) => {
  const msg = 'This is the list of our students\n';
  try {
    // Await the resolution of countStudents promise to get student data
    const students = await countStudents(DATABASE);
    // On success, prepend the message and send the student list
    res.send(`${msg}${students.join('\n')}`);
  } catch (error) {
    // On error, send the message along with the error message
    res.send(`${msg}${error.message}`);
  }
});

// Start listening on the specified port
app.listen(port, () => {
  // Callback function can be used here for logging, etc.
});

// Export the app for potential reuse in other files or for testing
module.exports = app;
