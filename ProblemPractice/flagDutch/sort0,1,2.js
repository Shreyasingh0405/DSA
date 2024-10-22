//Given an array arr containing only 0s, 1s, and 2s. Sort the array in ascending order.
// Examples:
// Input: arr[] = [0, 2, 1, 2, 0]
// Output: 0 0 1 2 2
// Explanation: 0s 1s and 2s are segregated into ascending order.

//bubble sort
//brute force
function sortArray(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                let temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
    }
    return arr
}
console.log(sortArray([0,2,1,2,0]))

//2nd way
//two pointers

//need to go through
class Solution {
    sort012(arr) {
        let low = 0;
        let mid = 0;
        let high = arr.length - 1;

        while (mid <= high) {
            if (arr[mid] === 0) {
                [arr[low], arr[mid]] = [arr[mid], arr[low]];
                low++;
                mid++;
            } else if (arr[mid] === 1) {
                mid++;
            } else {
                [arr[mid], arr[high]] = [arr[high], arr[mid]];
                high--;
            }
        }
        
        return arr;
    }
}

// Example usage:
const solution = new Solution();
console.log(solution.sort012([0, 1, 2, 0, 1, 2, 1, 0]))

function countingSort(arr) {
    const count = [0, 0, 0]; // count[0] for 0s, count[1] for 1s, count[2] for 2s

    // Count occurrences of each number
    for (const num of arr) {
        count[num]++;
    }

    // Reconstruct the array based on counts
    let index = 0;
    for (let i = 0; i < count[0]; i++) {
        arr[index++] = 0;
    }
    for (let i = 0; i < count[1]; i++) {
        arr[index++] = 1;
    }
    for (let i = 0; i < count[2]; i++) {
        arr[index++] = 2;
    }

    return arr;
}

// Example usage:
console.log(countingSort([0, 2, 1, 2, 0]));

function sortWithBuiltIn(arr) {
    return arr.sort((a, b) => a - b);
}

// Example usage:
console.log(sortWithBuiltIn([0, 2, 1, 2, 0]));
