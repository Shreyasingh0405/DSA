function majorElement(arr) {
    let map = new Map()
    let majority = Math.floor(arr.length / 2)
    for (const num of arr) {
        let current = map.get(num) || 0
        current += 1
        map.set(num, current)
        if (current > majority) {
            return num
        }
    }
    return null
}

const array = [3, 3, 4, 2, 4, 4, 2, 4, 4];
console.log(majorElement(array));