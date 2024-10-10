function groupAnagram(s) {
    let map = new Map()
    for (let word of s) {
        let sortedChar = word.split('').sort().join('')
        if (map.has(sortedChar)) {
            map.get(sortedChar).push(word)
        } else {
            map.set(sortedChar, [word])
        }
    }
    return Array.from(map.values())
};
console.log(groupAnagram(["eat", "tea","ate","nat"]))