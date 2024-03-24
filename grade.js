const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Please enter student marks (0-100): ', marks => {
    const score = Number(marks);
  
    if ( isNaN(score) || score < 0 || score > 100) {
      console.log("Invalid input. Please enter a number between 0 and 100.");
    } else {
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
      console.log(`The student grade is: ${grade}`);
    }

    readline.close();
  });
  