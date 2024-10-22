/**
 * Function to check if all elements of array a2 are present in array a1.
 * This approach checks only the presence of elements, not their frequency.
 * 
 * Brute-force Approach: O(m * n) time complexity.
 * 
 */
function isSubsetBruteForce(a1, a2) {
    for (let i = 0; i < a2.length; i++) {
        let found = false;
        for (let j = 0; j < a1.length; j++) {
            if (a2[i] === a1[j]) {
                found = true;
                break;
            }
        }
        if (!found) {
            return "No";
        }
    }
    return "Yes";
}

console.log(isSubsetBruteForce([1, 2, 3, 2, 4], [2, 3, 2, 2]));  // Output: Yes
console.log(isSubsetBruteForce([1, 2, 3, 4], [2, 3, 6]));         // Output: No


/**
 * Function to check if all elements of array a2 are present in array a1.
 * This approach checks only the presence of elements using the includes() method.
 * Time complexity: O(m * n) (same as brute-force, but cleaner).
 */

function isSubsetWithIncludes(a1, a2) {
    for (let element of a2) {
        if (!a1.includes(element)) {
            return "No";
        }
    }
    return "Yes";
}

console.log(isSubsetWithIncludes([1, 2, 3, 4], [2, 3]));           
console.log(isSubsetWithIncludes([1, 2, 3, 4], [2, 3, 6]));


/**
 * Optimized approach using a Hash Map.
 * Time complexity: O(m + n), where m and n are the sizes of a1 and a2.
 */
function isSubsetWithHashMap(a1, a2) {
    let map = new Set(a1);
    
    for (let element of a2) {
        if (!map.has(element)) {
            return "No";
        }
    }
    return "Yes";
}

console.log(isSubsetWithHashMap([1, 2, 3, 4], [2, 3]));           
console.log(isSubsetWithHashMap([1, 2, 3, 4], [2, 3, 6]));        

/**
 * Optimized approach using the Two-Pointer technique.
 * This approach works efficiently on sorted arrays with O(m + n) time complexity.
 * It checks if all elements of a2 are present in a1 using two pointers.
 */

function isSubsetTwoPointers(a1, a2) {
    // Sort both arrays to use the two-pointer technique.
    a1.sort((a, b) => a - b);
    a2.sort((a, b) => a - b);
    
    let i = 0, j = 0;
    
    while (i < a1.length && j < a2.length) {
        if (a1[i] === a2[j]) {
            j++;  // Move to the next element in a2 if a match is found.
        }
        i++;  // Always move forward in a1.
    }
    
    // If we've checked all elements of a2, it means a2 is a subset of a1.
    return (j === a2.length) ? "Yes" : "No";
}

console.log(isSubsetTwoPointers([1, 2, 3, 4], [2, 3]));            // Output: Yes
console.log(isSubsetTwoPointers([1, 2, 3, 4], [2, 3, 6]));         // Output: No
