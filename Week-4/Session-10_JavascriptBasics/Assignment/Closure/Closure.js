// Function to create a counter
function counter() {
    let count = 0; // Initialize count variable
  
    // Inner function (closure) that increments count and returns its value
    function increment() {
      count++;
      return count;
    }
  
    return increment; // Return the inner function
  }
  
  // Create two instances of the counter function
  const firstCounter = counter();
  const secondCounter = counter();
  
  // Arrays to store the returned values
  const firstValues = [];
  const secondValues = [];
  
  // Call the firstCounter function five times and store the returned values in the firstValues array
  for (let i = 0; i < 5; i++) {
    firstValues.push(firstCounter());
  }
  
  // Call the secondCounter function three times and store the returned values in the secondValues array
  for (let i = 0; i < 3; i++) {
    secondValues.push(secondCounter());
  }
  
  // Print the arrays
  console.log("firstValues array:", firstValues);
  console.log("secondValues array:", secondValues);
  