/**
 * Function to check if all elements of array a2 are present in array a1
 * with the same or more occurrences using a Hash Map.
 * 
 * Time Complexity: O(n + m), where n is the size of a1 and m is the size of a2.
 */


function isSubsetWithOccurrences(a1, a2, n, m) {
    let freqMap = new Map();

    // Build the frequency map for a1
    for (let i = 0; i < n; i++) {
        freqMap.set(a1[i], (freqMap.get(a1[i]) || 0) + 1);
    }

    // Check if a2's elements are present with required frequency
    for (let i = 0; i < m; i++) {
        if (freqMap.has(a2[i]) && freqMap.get(a2[i]) > 0) {
            freqMap.set(a2[i], freqMap.get(a2[i]) - 1); // Decrement count
        } else {
            return "No";
        }
    }

    return "Yes";
}


/**
 * Brute force approach to check if array a2 is a subset of a1 with correct occurrences.
 * It removes matched elements in a1 copy to ensure frequency check.
 * 
 * Time Complexity: O(m * n), where n is the size of a1 and m is the size of a2.
 */


function isSubsetBruteForce(a1, a2) {
    const a1Copy = [...a1]; // Create a copy of a1 to modify during the check

    for (let i = 0; i < a2.length; i++) {
        let found = false;

        for (let j = 0; j < a1Copy.length; j++) {
            if (a2[i] === a1Copy[j]) {
                found = true;
                a1Copy[j] = null; // Mark the element as used
                break;
            }
        }

        if (!found) {
            return "No";
        }
    }

    return "Yes";
}


/**
 * Two-pointer technique to check if array2 is a subset of array1.
 * Both arrays must be sorted for this approach.
 * 
 * Time Complexity: O(m log m + n log n) for sorting, O(m + n) for comparison.
 */


function isSubsetTwoPointers(array1, array2, size1, size2) {
    // Sort both arrays
    array1.sort((a, b) => a - b);
    array2.sort((a, b) => a - b);

    let pointer1 = 0, pointer2 = 0;
    while (pointer1 < size1 && pointer2 < size2) {
        if (array1[pointer1] === array2[pointer2]) {
            pointer1++;
            pointer2++; 
        } else if (array1[pointer1] < array2[pointer2]) {
            pointer1++; 
        } else {
            return "No"; 
        }
    }

    return (pointer2 === size2) ? "Yes" : "No"; 
}

let a1 = [1, 2, 3, 4, 5, 6, 7, 8];
let a2 = [1, 2, 3, 1];
console.log("Hash Map Result:", isSubsetWithOccurrences(a1, a2, a1.length, a2.length));  

let a1Brute = [1, 2, 3, 2, 4];
let a2Brute = [2, 3, 2];
console.log("Brute Force Result:", isSubsetBruteForce(a1Brute, a2Brute));  

let array1 = [1, 2, 3, 2, 4, 5, 6, 7, 8];
let array2 = [1, 2, 3, 2];
console.log("Two-Pointer Result:", isSubsetTwoPointers(array1, array2, array1.length, array2.length));  
