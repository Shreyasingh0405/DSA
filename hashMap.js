//Given an array of integers, count the frequency of each element and return the result as a HashMap (or equivalent in your programming language).
//Example Input: [1, 2, 2, 3, 3, 3] 
//Example Output: {1: 1, 2: 2, 3: 3}

function countArray(input) {
    let map = new Map()
    for (let i = 0; i < input.length; i++) {
        let current = input[i]
        if (map.has(current)) {
            map.set(current, map.get(current) + 1)
        } else {
            map.set(current, 1)
        }
    }
    return Object.fromEntries(map)
}
console.log(countArray([1, 2, 2, 3, 3, 3]))

// Given a string, find the first non-repeating character using a HashMap to store the frequency of each character.
// Example Input: "swiss" 
//Example Output >"w"

function checkFirstOccurance(str) {
    let map = new Map()
    for (let i = 0; i < str.length; i++) {
        let value = str[i]
        if (map.has(value)) {
            map.set(value, map.get(value) + 1)
        } else {
            map.set(value, 1)
        }
    }
    for (let i = 0; i < str.length; i++) {
        if (map.get(str[i]) === 1) {
            return str[i]
        }
    }
    return null
}
console.log(checkFirstOccurance("swiss"))

//Given an array of integers, return the indices of the two numbers that add up to a specific target. Use a HashMap to store and lookup complements.
//Example Input: nums = [2, 7, 11, 15], target = 9 
//Example Output: [0, 1]

function sum(nums, target) {
    let complement = 0
    let map = new Map()
    for (let i = 0; i < nums.length; i++) {
        complement = target - nums[i]
        if (map.has(complement)) {
            return [map.get(complement), i]
        } else {
            map.set(nums[i], i)
        }
    }
    return []
}
console.log(sum([2, 7, 11, 15], 9))

// Given an array of strings, group anagrams together. Use a HashMap where the key is the sorted string.
//Example Input: ["eat", "tea", "tan", "ate", "nat", "bat"] 
//Example Output: [['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']]

function anagramGroup(input) {
    let map = new Map()
    for (let i = 0; i < input.length; i++) {
        let sortedStr = input[i].split('').sort().join('')
        if (map.has(sortedStr)) {
            map.get(sortedStr).push(input[i]);
        } else {
            map.set(sortedStr, [input[i]])
        }
    }
    return Array.from(map.values())
}
console.log(anagramGroup(["eat", "tea", "tan", "ate", "nat", "bat"]))

//find their intersection. Use a HashMap to count the occurrences in the first array and then find common elements in the second array.
//Example Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4] 
//Example Output: [4,9]

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
