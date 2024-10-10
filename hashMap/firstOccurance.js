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

