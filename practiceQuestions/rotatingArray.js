// Return an array after rotating n number times clockwise ?
function rotateArray(arr, n) {
    let length = arr.length;
    n = n % length; 
    
    for (let i = 0; i < n; i++) {
        let lastElement = arr.pop();  
        arr.unshift(lastElement);    
    }
    
    return arr;
}

const result1 = rotateArray([1, 2, 3, 4, 5], 1);  
console.log(result1);  

function rotateArray(arr, n) {
    // Handle cases where n is greater than the array length
    n = n % arr.length;  // If n > arr.length, we only need to rotate n % arr.length times

    // Split and concatenate the array to achieve rotation
    return arr.slice(-n).concat(arr.slice(0, arr.length - n));
}

const result = rotateArray([1, 2, 3, 4, 5], 2);  // Rotating 2 times clockwise
console.log(result);  // Output: [4, 5, 1, 2, 3]
