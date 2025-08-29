// Example of the guess function (for testing purposes)
let pickedNumber = 10; // The number to guess

/**
 * Mock implementation of guess API
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			     1 if num is lower than the picked number
 *               otherwise return 0
 */
var guess = function(num) {
    if (num > pickedNumber) return -1;
    if (num < pickedNumber) return 1;
    return 0;
};

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
    let start = 1; // Start from 1 since it's a valid guess range
    let end = n;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (guess(mid) === 0) {
            return mid; // Return the correct guess
        }
        if (guess(mid) === -1) {
            end = mid - 1; // Reduce end boundary
        }
        if (guess(mid) === 1) {
            start = mid + 1; // Increase start boundary
        }
    }
};

// Test the function with n = 10
console.log(guessNumber(10)); 
