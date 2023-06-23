function calcWordFrequencies() {
    const wordMap = new Map(); // Create a new Map to store word frequencies
  
    // Prompt the user for a list of words
    const wordList = prompt('Enter a list of words separated by spaces:');
  
    // Split the wordList into individual words
    const words = wordList.split(' ');
  
    // Iterate over each word
    for (let word of words) {
      // If the word already exists in the map, increment its frequency
      if (wordMap.has(word)) {
        wordMap.set(word, wordMap.get(word) + 1);
      } else {
        // If the word does not exist in the map, add it with a frequency of 1
        wordMap.set(word, 1);
      }
    }
  
    // Output the word frequencies to the console
    for (let [word, frequency] of wordMap) {
      console.log(word, frequency);
    }
  }
  
  // Call calcWordFrequencies() to test the function
  calcWordFrequencies();
  