function divideArray(numbers) {
    let evenNums = [];
    let oddNums = [];
 
    // Divide numbers into evenNums and oddNums arrays
    for (let i = 0; i < numbers.length; i++) {
       if (numbers[i] % 2 === 0) {
          evenNums.push(numbers[i]);
       } else {
          oddNums.push(numbers[i]);
       }
    }
 
    // Sort the arrays
    evenNums.sort((a, b) => a - b);
    oddNums.sort((a, b) => a - b);
 
    // Output the array values to the console
    console.log("Even numbers:");
    if (evenNums.length > 0) {
       for (let i = 0; i < evenNums.length; i++) {
          console.log(evenNums[i]);
       }
    } else {
       console.log("None");
    }
 
    console.log("Odd numbers:");
    if (oddNums.length > 0) {
       for (let i = 0; i < oddNums.length; i++) {
          console.log(oddNums[i]);
       }
    } else {
       console.log("None");
    }
 }
 
 // Example usage
 let nums = [4, 2, 9, 1, 8];
 divideArray(nums);
 