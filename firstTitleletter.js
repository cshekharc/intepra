// function toTitleCase(str) { 
//     return str.replace(/\b\w/g, l => l.toUpperCase()); 
// } 

// console.log(toTitleCase('i am pranshu choudhari'))
function toTitleCase(str) {
    const words = str.split(' ');
  
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      if (word.length > 0) {
        words[i] = word[0].toUpperCase() + word.slice(1);
      }
    }
  
    return words.join(' ');
  }
  
  // Example usage:
  const inputString = "i am pranshu choudhari";
  const titleCaseString = toTitleCase(inputString);
  console.log(titleCaseString); // Output: "Hello World"
  