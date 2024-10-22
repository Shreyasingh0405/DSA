//You are given an array arr of positive integers. Your task is to find all the leaders in the array. An element is considered a leader if it is greater than or equal to all elements to its right. The rightmost element is always a leader.

// Examples:

// Input: arr = [16, 17, 4, 3, 5, 2]
// Output: [17, 5, 2]
// Explanation: Note that there is nothing greater on the right side of 17, 5 and, 2.

function arrayLeader(a) {
const leadersArray = [];
let maxFromRight = a[a.length - 1];
leadersArray.push(maxFromRight);
for (let i = a.length - 2; i >= 0; i--) {
    if (a[i] >= maxFromRight) {
        maxFromRight = a[i];
        leadersArray.push(maxFromRight);
    }
}
return leadersArray.reverse();
}
console.log(arrayLeader([16, 17, 4, 3, 5, 2]));

//another method

function arrayLeader(a) {
    const leadersMap = new Map();  // Create a map to store leaders
    let maxFromRight = a[a.length - 1];  // Initialize with the last element as the leader
    leadersMap.set(a.length - 1, maxFromRight);  // Store the last element in the map

    // Iterate from the second last element to the first
    for (let i = a.length - 2; i >= 0; i--) {
        if (a[i] >= maxFromRight) {
            maxFromRight = a[i];  // Update maxFromRight
            leadersMap.set(i, a[i]);  // Store this element as a leader in the map
        }
    }

    // Extract the values from the map and return as an array in the correct order
    return Array.from(leadersMap.values()).reverse();
}

console.log(arrayLeader([16, 17, 4, 3, 5, 2]));  // Output: [17, 5, 2]

