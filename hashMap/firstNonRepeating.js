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

