//Given an array arr of non-negative numbers. The task is to find the first equilibrium point in an array. The equilibrium point in an array is an index (or position) such that the sum of all elements before that index is the same as the sum of elements after it.
// Note: Return equilibrium point in 1-based indexing. Return -1 if no such point exists. 
// Examples:
// Input: arr[] = [1, 3, 5, 2, 2]
// Output: 3 
// Explanation: The equilibrium point is at position 3 as the sum of elements before it (1+3) = sum of elements after it (2+2). 

function equilibriumPoint(arr) {
    const n = arr.length;
    let totalSum = arr.reduce((a, b) => a + b, 0);
    let leftSum = 0;
    for (let i = 0; i < n; i++) {
        totalSum -= arr[i];
        if (leftSum === totalSum) {
            return i + 1;
        }

        leftSum += arr[i];
    }

    return -1;
}
const arr = [1, 3, 5, 2, 2];
console.log(equilibriumPoint(arr));