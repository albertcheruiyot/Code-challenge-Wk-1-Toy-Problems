const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let totalDemeritPoints = 0; // Variable to store the total demerit points

function calculatePoints(speed, totalPoints) {
  if (speed <= 70) {
    console.log("Ok");
  } else {
    const demeritPoints = Math.floor((speed - 70) / 5);
    totalPoints += demeritPoints; // Add the new demerit points to the total
    
    if (totalPoints > 12) {
      console.log("License suspended");
      rl.close();
      return;
    } else {
      console.log(`Points: ${totalPoints}`);
    }
  }

  return totalPoints; // Return the updated total demerit points
}

// Function to prompt user for input and process demerit points
function checkInput() {
  rl.question('Enter the speed of the car: ', (speedInput) => {

    const speed = Number(speedInput);
    
    if (isNaN(speed)) {
      console.log("Invalid input. Please enter a valid number.");
    } else {
      // Call the function to calculate and display demerit points, updating the total
      totalDemeritPoints = calculatePoints(speed, totalDemeritPoints);
    }

    // Recursive call to prompt for next input
    checkInput();
  });
}

// Start processing speed inputs
checkInput();
