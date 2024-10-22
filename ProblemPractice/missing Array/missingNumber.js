/**
 * Function to find the missing number in an array containing numbers from 0 to n.
 * This implementation uses various approaches.
 */

/**
 * Approach 1: Mathematical Formula
 * Time Complexity: O(n).
 */
var missingNumberUsingFormula = function(nums) {
    let sum = 0;
    let len = nums.length;
    let sumExpected = (len * (len + 1)) / 2; // Sum of first n natural numbers 

    for (let i = 0; i < len; i++) {
        sum += nums[i];
    }

    return sumExpected - sum; // The difference gives the missing number
};
const nums = [0,1,2,3,5];
console.log("Missing Number (Formula):", missingNumberUsingFormula(nums)); 


/**
 * Approach 2: Sorting and Single Loop
 * Time Complexity: O(n log n) due to sorting.
 */
var missingNumberWithSorting = function(nums) {
    nums.sort((a, b) => a - b);
    let n = nums.length;

    for (let i = 0; i < n; i++) {
        if (nums[i] !== i) {
            return i; // The missing number is equal to the index
        }
    }
    return n; // If no number is missing, return n
};

/**
 * Approach 3: Brute Force
 * Time Complexity: O(n^2).
 */
var missingNumberBruteForce = function(nums) {
    const n = nums.length;
    for (let i = 0; i <= n; i++) {
        if (!nums.includes(i)) {
            return i; // The missing number
        }
    }
};

/**
 * Approach 4: Using a Hash Map
 * Time Complexity: O(n).
 */
var missingNumberWithMap = function(nums) {
    let n = nums.length;
    let seen = new Map();

    for (let num of nums) {
        seen.set(num, true);
    }

    for (let i = 0; i <= n; i++) {
        if (!seen.has(i)) {
            return i; // The missing number
        }
    }
};

/**
 * Approach 5: Using a Boolean Array
 * Time Complexity: O(n).
 */
var missingNumberWithBooleanArray = function(nums) {
    let n = nums.length;
    let seen = new Array(n + 1).fill(false);

    for (let num of nums) {
        seen[num] = true; // Mark the number as seen
    }

    for (let i = 0; i <= n; i++) {
        if (!seen[i]) {
            return i; // The missing number
        }
    }
};

// Example usage


console.log("Missing Number (Sorting):", missingNumberWithSorting(nums)); // Output: 6
console.log("Missing Number (Brute Force):", missingNumberBruteForce(nums)); // Output: 6
console.log("Missing Number (Map):", missingNumberWithMap(nums)); // Output: 6
console.log("Missing Number (Boolean Array):", missingNumberWithBooleanArray(nums)); // Output: 6
