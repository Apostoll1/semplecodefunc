// Helper function to calculate the factorial of a number
function calculateFactorial(number) {
    if (number === 0 || number === 1) {
      return 1;
    } else {
      return number * calculateFactorial(number - 1);
    }
  }
  
  // Main function to use the helper function
  function calculateFactorialApp() {
    const userInput = parseInt(prompt("Enter a positive integer to calculate its factorial:"));
  
    if (isNaN(userInput) || userInput < 0) {
      console.log("Invalid input. Please enter a positive integer.");
    } else {
      const result = calculateFactorial(userInput);
      console.log(`The factorial of ${userInput} is: ${result}`);
    }
  }
  
  // Run the factorial calculation application
  calculateFactorialApp();