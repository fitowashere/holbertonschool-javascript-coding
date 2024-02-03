// Import the http module
const http = require('http');

// Create an HTTP server
const app = http.createServer((req, res) => {
  // Set the response header to indicate the content type
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  // Send the response body
  res.end('Hello Holberton School!');
});

// The server should listen on port 1245
app.listen(1245, () => {
  console.log('Server is running on http://localhost:1245');
});

// Export the server
module.exports = app;
