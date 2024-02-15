const fs = require('fs');

// Function to count students from a file asynchronously and categorize them by field
function countStudents(path) {
  // Return a new promise that resolves with student counts or rejects with an error
  return new Promise((resolve, reject) => {
    // Asynchronously read the file at the given path with UTF-8 encoding
    fs.readFile(path, 'utf8', (err, data) => {
      // If an error occurs (e.g., file not found), reject the promise with an error message
      if (err) {
        reject(Error('Cannot load the database'));
        return;
      }
      // Initialize an array to hold response messages
      const response = [];
      let msg; // Variable to hold the message strings

      /* Split the file content into lines, then filter out empty lines and
       split each line into an array of values */
      const content = data.toString().split('\n');
      const students = content.filter((item) => item).map((item) => item.split(','));

      // Calculate the total number of students, excluding the header line
      const NUMBER_OF_STUDENTS = students.length ? students.length - 1 : 0;
      msg = `Number of students: ${NUMBER_OF_STUDENTS}`;
      console.log(msg); // Log the total number of students
      response.push(msg); // Add the message to the response array

      // Create an object to hold students categorized by their field
      const fields = {};
      for (const i in students) {
        if (i !== 0) { // Skip the header line
          if (!fields[students[i][3]]) fields[students[i][3]] = [];
          fields[students[i][3]].push(students[i][0]);
          // Add the student name to the appropriate field
        }
      }

      // Remove the placeholder 'field' key if it was inadvertently created
      delete fields.field;

      /* Generate messages for each field with the count of students and
      their names, then log and add to the response */
      for (const key of Object.keys(fields)) {
        msg = `Number of students in ${key}: ${fields[key].length}. List: ${fields[key].join(', ')}`;
        console.log(msg);
        response.push(msg);
      }
      resolve(response); // Resolve the promise with the array of response messages
    });
  });
}

module.exports = countStudents; // Export the function for use in other modules
