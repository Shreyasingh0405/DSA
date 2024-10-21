//if u want to check only elements not frequency

//Brute-Force Approach
//time compleixeity: o(m*n)
function subArray(a1, a2) {
    for (let i = 0; i < a2.length; i++) {
        let found = false;
        for (let j = 0; j < a1.length; j++) {
            if (a2[i] == a1[j]) {
                found = true
                break;
            }
        }
        if (!found) {
            return "No"
        }
    }

    return "Yes"
}
console.log(subArray([1, 2, 3,2, 4], [2, 3,2,2]))


// //2nd way

function subArray(a1, a2) {
    for (let i = 0; i < a2.length; i++) {
        if (!a1.includes(a2[i])) {
            return "No";
        }
    }
    return "Yes";
}

console.log(subArray([1, 2, 3, 4], [2, 3, 6]));
console.log(subArray([1, 2, 3, 4], [2, 3]));


//3rd way
//HASH MAP

function hashMap(a1, a2) {
    let map = new Map(a1)
    for (let i = 0; i < a2.length; i++) {
        if (!map.has(a2[i])) {
            return "NO"
        }
    }
    return "Yes"

}
console.log(subArray([1, 2, 3, 4], [2, 3, 6]));

//==============================*******=======================================//

//If we have to check element and occurancer also then follow this approach

//HASH MAP
// //geeks & geeks solution
class Solution {
    isSubset(a1, a2, n, m) {
        let freqMap = new Map();
        for (let i = 0; i < n; i++) {
            if (freqMap.has(a1[i])) {
                freqMap.set(a1[i], freqMap.get(a1[i]) + 1);
            } else {
                freqMap.set(a1[i], 1);
            }
        }
        for (let i = 0; i < m; i++) {
            if (freqMap.has(a2[i]) && freqMap.get(a2[i]) > 0) {
                freqMap.set(a2[i], freqMap.get(a2[i]) - 1);
            } else {
                return "No";
            }
        }

        return "Yes";
    }
}
let a1 = [1, 2, 3, 4, 5, 6, 7, 8];
let a2 = [1, 2, 3, 1];
let n = a1.length;
let m = a2.length;

let solution = new Solution();
let result = solution.isSubset(a1, a2, n, m);
console.log("Result:", result);


//BRUTE FORCE

function subArray(a1, a2) {
    const a1Copy = [...a1];

    for (let i = 0; i < a2.length; i++) {
        let found = false;

        for (let j = 0; j < a1Copy.length; j++) {
            if (a2[i] === a1Copy[j]) {
                found = true;
                a1Copy[j] = null; 
                break; 
            }
        }

        if (!found) {
            return "No";
        }
    }

    return "Yes"; 
}

console.log(subArray([1, 2, 3, 2, 4], [2, 3, 2])); 
