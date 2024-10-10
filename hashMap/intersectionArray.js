function intersection(nums1, nums2) {
    // Sort both arrays in ascending order
    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => a - b);
    const result = []; // To store the unique intersection numbers
    let i = 0, j = 0;  // Initialize two pointers for each array
    // Loop through both arrays using the two pointers
    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] === nums2[j]) {  // If elements at both pointers are the same
            // Check if the number is not already in the result to avoid duplicates
            if (result.length === 0 || result[result.length - 1] !== nums1[i]) {
                result.push(nums1[i]);  // Add the common number to the result
            }
            i++; // Move both pointers to the next number
            j++;
        } else if (nums1[i] < nums2[j]) {
            i++; // Move the first pointer if the number is smaller
        } else {
            j++; // Move the second pointer if the number is smaller
        }
    }
    return result; // Return the intersection
}
const nums1 = [4, 9, 5];
const nums2 = [9, 4, 9, 8, 4];
console.log(intersection(nums1, nums2));

function intersection(nums1, nums2) {
    let map = new Map();
    let result = [];
    for (let num of nums1) {
        if (map.has(num)) {
            map.set(num, map.get((count) + 1));
        } else {
            map.set(num, 1);
        }
    }
    for (let num of nums2) {
        if (map.has(num)) {
            let count = map.get(num);
            if (count > 0) {
                result.push(num);  // Add to the result
                map.set(num, count - 1);  // Decrement the count
            }
        }
    }
    return result;
}
console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]));
