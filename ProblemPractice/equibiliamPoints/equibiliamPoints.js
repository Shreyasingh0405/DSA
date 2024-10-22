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
//const arr = [1, 3,1,2,5];

console.log(equilibriumPoint(arr));



// two pointers


function equilibriumPoint1(array) {
    const n = array.length;
    
    // Edge case: If there's only one element, it's trivially the equilibrium point
    if (n === 1) {
        return 1;
    }
    
    let left = 0;
    let right = n - 1;
    let leftSum = 0;
    let rightSum = 0;

    while (left < right) {
        if (leftSum < rightSum) {
            leftSum += array[left];
            left++;
        } else {
            rightSum += array[right];
            right--;
        }
    }

    // At this point, 'left' should be the equilibrium index if leftSum equals rightSum
    if (leftSum === rightSum) {
        return left + 1; // return 1-based index
    }

    return -1; // No equilibrium point found
}

// Example
console.log(equilibriumPoint1([1, 3, 5, 2, 2]));  
