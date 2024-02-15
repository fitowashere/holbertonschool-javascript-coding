// Import the HTTP module for creating an HTTP server
const http = require('http');

// Parse command line arguments to get the database file path
const args = process.argv.slice(2);
const countStudents = require('./3-read_file_async'); // Import the countStudents function from a local module

const DATABASE = args[0]; // The first command line argument is the database file path

const hostname = '127.0.0.1'; // Set hostname for the server
const port = 1245; // Set port number for the server

// Create an HTTP server instance
const app = http.createServer(async (req, res) => {
  res.statusCode = 200; // Set HTTP status code to 200 (OK)
  res.setHeader('Content-Type', 'text/plain'); // Set response content type to plain text

  const { url } = req; // Destructure the URL from the request object

  // Route handling
  if (url === '/') {
    // Respond with a greeting if the URL is the root
    res.write('Hello Holberton School!');
  } else if (url === '/students') {
    // If the URL is '/students', respond with the student list
    res.write('This is the list of our students\n');
    try {
      const students = await countStudents(DATABASE); // Await the promise returned by countStudents
      res.end(`${students.join('\n')}`); // Send the student list as response
    } catch (error) {
      // Handle errors (e.g., file not found) by sending the error message as response
      res.end(error.message);
    }
  } else {
    // Set HTTP status code to 404 for all other URLs
    res.statusCode = 404;
  }
  res.end(); // End the response
});

// Start the server and listen on the specified hostname and port
app.listen(port, hostname, () => {
  // console.log(`Server running at http://${hostname}:${port}/`);
});

// Export the app for potential use in other modules
module.exports = app;
