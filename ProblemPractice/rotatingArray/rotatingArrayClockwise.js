// Given an array arr, rotate the array by one position in clock-wise direction.
// Examples:
// Input: arr = [1, 2, 3, 4, 5]
// Output: [5, 1, 2, 3, 4]
// Explanation: If we rotate arr by one position in clockwise 5 come to the front and remaining those are shifted to the end.

function rotateArrayByOne(arr) {
    let lastElement = arr.pop();
    arr.unshift(lastElement);
    return arr;
}

const arr = [9, 8, 7, 6, 4, 2, 1, 3];
const rotatedArr = rotateArrayByOne(arr);
console.log(rotatedArr);


//2nd way
function rotateArrayByOne(arr) {
    if (arr.length < 2) 
        return arr;
    let lastElement = arr[arr.length - 1];
    for (let i = arr.length - 1; i > 0; i--) {
        arr[i] = arr[i - 1];
    }
    arr[0] = lastElement;
    return arr;
}
console.log(rotatedArr);  
