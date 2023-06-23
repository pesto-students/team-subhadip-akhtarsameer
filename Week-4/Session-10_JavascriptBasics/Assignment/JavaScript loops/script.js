function drawTriangle(triangleSize) {

   // Your solution goes here
   for (let i = 1; i <= triangleSize; i++) {
      let line = '';
  
      // Build the line with the appropriate number of asterisks
      for (let j = 1; j <= i; j++) {
        line += '*';
      }
  
      // Output the line
      console.log(line);
    }
}
