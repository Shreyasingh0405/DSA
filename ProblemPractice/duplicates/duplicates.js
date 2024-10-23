// Given an array arr of integers, find all the elements that occur more than once in the array. Return the result in ascending order. If no element repeats, return an empty list.

// Examples:

// Input: arr[] = [2, 3, 1, 2, 3]
// Output: [2, 3] 
// Explanation: 2 and 3 occur more than once in the given array.

function duplicates(arr) {
    let map = new Map()
    for (let i = 0; i < arr.length; i++) {
        if (map.has(arr[i])) {
            map.set(arr[i], map.get(arr[i]) + 1)
        } else {
            map.set(arr[i], 1)
        }
    }
    const duplicatesArray = [];
    for (let [key, value] of map) {
        if (value > 1) {
            duplicatesArray.push(key);
        }
    }

    return duplicatesArray;
}
console.log(duplicates([0, 3, 1, 2]))