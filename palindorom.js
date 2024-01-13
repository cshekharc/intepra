function isPalindrome(input) {
    // Convert the input to a string
    const strInput = String(input);
  
    // Get the length of the string
    const length = strInput.length;
  
    // Check if the string is empty or has only one character (it's a palindrome)
    if (length <= 1) {
      return true;
    }
  
    // Iterate over the first half of the string
    for (let i = 0; i < Math.floor(length / 2); i++) {
      // Compare the characters from the beginning and end of the string
      if (strInput[i] !== strInput[length - 1 - i]) {
        return false; // Not a palindrome
      }
    }
  
    return true; // It's a palindrome
  }
  
  // Examples
  console.log(isPalindrome(12321));          // true
  console.log(isPalindrome("level"));       // true
  console.log(isPalindrome("hello"));       // false
  console.log(isPalindrome("A man a plan")); // false
  
// function isPalindrome(input) {
//     // Convert the input to a string if it's a number
//     const strInput = String(input);
  
//     // Remove non-alphanumeric characters and convert to lowercase
//     const cleanedStr = removeNonAlphanumeric(strInput).toLowerCase();
  
//     // Compare the original and reversed strings
//     return isEqual(cleanedStr, reverseString(cleanedStr));
//   }
  
//   // Helper function to remove non-alphanumeric characters
//   function removeNonAlphanumeric(str) {
//     return str.replace(/[^a-zA-Z0-9]/g, '');
//   }
  
//   // Helper function to reverse a string
//   function reverseString(str) {
//     let reversed = '';
//     for (let i = str.length - 1; i >= 0; i--) {
//       reversed += str[i];
//     }
//     return reversed;
//   }
  
//   // Helper function to check if two strings are equal
//   function isEqual(str1, str2) {
//     if (str1.length !== str2.length) {
//       return false;
//     }
  
//     for (let i = 0; i < str1.length; i++) {
//       if (str1[i] !== str2[i]) {
//         return false;
//       }
//     }
  
//     return true;
//   }
  
//   // Example usage:
//   const numberResult = isPalindrome(121);
//   console.log("Is the number a palindrome?", numberResult);
  
//   const stringResult = isPalindrome("Anina");
//   console.log("Is the string a palindrome?", stringResult);
  

// function isPalindrome(input) {
//     // Convert the input to a string if it's a number
//     const strInput = String(input);

//     // Remove non-alphanumeric characters and convert to lowercase
//     const cleanedStr = strInput.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

//     // Compare the original and reversed strings
//     return cleanedStr === cleanedStr.split('').reverse().join('');
// }

// // Example usage:
// const numberResult = isPalindrome(121);
// console.log("Is the number a palindrome?", numberResult);

// const stringResult = isPalindrome("A man, a plan, a canal, Panama");
// console.log("Is the string a palindrome?", stringResult);
