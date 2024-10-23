//Given an array arr. Your task is to find the minimum and maximum elements in the array.
//Note: Return an array that contains two elements the first one will be a minimum element and the second will be a maximum of an array.
//Examples:
// Input: arr = [3, 2, 1, 56, 10000, 167]
// Output: 1 10000
// Explanation: minimum and maximum elements of array are 1 and 10000.

function minMax(arr){
    let min = arr[0];
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    return [min, max];
}

console.log(minMax([1, 345, 234, 21, 56789]))