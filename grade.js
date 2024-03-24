// Import the readline module and create an interface to read input from the command line
const readline = require('readline').createInterface({
    input: process.stdin,  // Set input to read from the standard input (keyboard)
    output: process.stdout  // Set output to write to the standard output (console)
  });
  
  // Prompt the user to enter student marks (0-100) and handle the input with a callback function
  readline.question('Please enter student marks (0-100): ', marks => {
    // Convert the input to a number
    const score = Number(marks);
  
    // Check if the input is a valid number within the range of 0 to 100
    if (isNaN(score) || score < 0 || score > 100) {
      // If input is invalid, print an error message
      console.log("Invalid input. Please enter a number between 0 and 100.");
    } else {
      // If input is valid, determine the grade based on the score
      let grade;
      if (score > 79) {
        grade = 'A';
      } else if (score >= 60) {
        grade = 'B';
      } else if (score >= 50) {
        grade = 'C';
      } else if (score >= 40) {
        grade = 'D';
      } else {
        grade = 'E';
      }
      // Print the calculated grade
      console.log(`The student grade is: ${grade}`);
    }
  
    // Close the readline interface to allow the program to exit gracefully
    readline.close();
  });
  