function anagram(str1, str2) {
    let obj = {}
    if (str1.length !== str2.length) {
        return false
    }
    for (chars of str1) {
        obj[chars] = (obj[chars] || 0) + 1
    }
    for (chars of str2) {
        if (!obj[chars]) {
            return false
        }
        obj[chars]--;
    }
    return true

}
console.log(anagram("hello", "elloh"))