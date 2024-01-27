#!/usr/bin/node
const fs = require('fs');

// Function to read and print file data
function readFileContent (filePath) {
  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
      // Printing the error object if an error occurs
      console.error(err);
    } else {
      // Printing the content of the file
      console.log(data);
    }
  });
}

const filePath = process.argv[2];

// Calling the function with the provided file path
readFileContent(filePath);
