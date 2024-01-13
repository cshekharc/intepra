function findMaxNumber(arr) {
    // Check if the array is empty
    if (arr.length === 0) {
        return "Array is empty";
    }

    // Initialize max to the first element of the array
    let max = arr[0];

    // Iterate through the array to find the maximum value
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    return max;
}

// Example usage
const numbers = [1, 5, 50, 2, 4, 5, 60, 10, 8];
const result = findMaxNumber(numbers);
console.log("Maximum number:", result);
