function anagram(str1, str2) {
    const map = new Map();
    if (str1.length !== str2.length) {
        return false;
    }
    for (const char of str1) {
        map.set(char,(map.get(char)||0)+1)
    }
    for (const char of str2) {
        if (!map.has(char) || map.get(char) === 0) {
            return false; // If not found or count is zero, return false
        }
        map.set(char, map.get(char) - 1);
    }

    return true; // If all characters matched, return true
}

// Test the function
console.log(anagram("hello", "elooh")); // Output: true


// function anagram(str1, str2) {
//     let obj = {}
//     if (str1.length !== str2.length) {
//         return false
//     }
//     for (chars of str1) {
//         obj[chars] = (obj[chars] || 0) + 1
//     }
//     for (chars of str2) {
//         if (!obj[chars]) {
//             return false
//         }
//         obj[chars]--;
//     }
//     return true

// }
// console.log(anagram("hello", "elloh"))