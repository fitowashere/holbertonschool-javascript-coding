// Script to greet the user and capture their name using standard input/output

// Greet the user upon starting the application
process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Set the encoding for the input to UTF-8 for proper character interpretation
process.stdin.setEncoding('utf8');

// Event listener for reading input from the user
process.stdin.on('readable', () => {
  // Read the data available on the input stream
  const chunk = process.stdin.read();
  // If data is present, output the user's name
  if (chunk !== null) {
    process.stdout.write(`Your name is: ${chunk}`);
  }
});

// Event listener for the end of the input stream
process.stdin.on('end', () => {
  // Notify the user that the application is closing
  process.stdout.write('This important software is now closing\n');
});
