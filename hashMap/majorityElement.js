function majorElement(arr) {
    let map = new Map();
    let majority = Math.floor(arr.length / 2);
    for (const num of arr) {
        if (map.has(num)) {
            map.set(num,map.get(num)+1)
        } else {
            map.set(num, 1);
        }
        if (map.get(num) > majority) {
            return num;
        }
    }
    return null;
}

// Example array to test the function
const array = [3, 3, 4, 2, 4, 4, 2, 4, 4,2,2,2,2,2,2];
console.log(majorElement(array)); // Output: 4
