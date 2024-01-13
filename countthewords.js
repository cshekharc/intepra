function countWordOccurrences(str, word) {
    // Convert the input string and word to lowercase to make the search case-insensitive
    const lowerStr = str.toLowerCase();
    const lowerWord = word.toLowerCase();

    // Split the string into an array of words
    const wordsArray = lowerStr.split(" ");
    console.log(wordsArray)

    // Initialize a counter for word occurrences
    let count = 0;

    // Iterate through the words and count occurrences
    for (let i = 0; i < wordsArray.length; i++) {
        if (wordsArray[i] === lowerWord) {
            count++;
        }
    }

    return count;
}

// Example usage
const inputString = "This is a sample string. This string contains a word multiple times.";
const searchWord = "string";

const occurrences = countWordOccurrences(inputString, searchWord);

console.log(`The word "${searchWord}" occurs ${occurrences} times in the string.`);
