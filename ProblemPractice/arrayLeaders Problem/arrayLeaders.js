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