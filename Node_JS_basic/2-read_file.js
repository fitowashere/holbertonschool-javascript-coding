const fs = require('fs');

// Function to count students from a database file
function countStudents(path) {
  let content;

  // Try to read the file synchronously, throw an error if the file cannot be read
  try {
    content = fs.readFileSync(path);
  } catch (err) {
    throw new Error('Cannot load the database');
  }

  // Convert file content to a string and split it into lines
  content = content.toString().split('\n');

  // Filter out any empty lines to avoid processing errors
  let students = content.filter((item) => item);

  // Split each line into an array of values (assuming CSV format)
  students = students.map((item) => item.split(','));

  // Calculate the number of students, excluding the header row
  const NUMBER_OF_STUDENTS = students.length ? students.length - 1 : 0;
  console.log(`Number of students: ${NUMBER_OF_STUDENTS}`);

  // Initialize an object to hold the count of students by field
  const fields = {};
  for (const i in students) {
    if (i !== 0) { // Skip the header row
      // If the field doesn't exist, initialize it
      if (!fields[students[i][3]]) fields[students[i][3]] = [];

      // Add the student's name to the field
      fields[students[i][3]].push(students[i][0]);
    }
  }

  // Remove the 'field' key if present (from an improperly formatted header, if applicable)
  delete fields.field;

  // Log the number of students in each field and their names
  for (const key of Object.keys(fields)) {
    console.log(
      `Number of students in ${key}: ${fields[key].length}. List: ${fields[key].join(', ')}`,
    );
  }
}

// Export the function for use in other files
module.exports = countStudents;
