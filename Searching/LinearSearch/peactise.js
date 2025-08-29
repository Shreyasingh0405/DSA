let arr = [4, 5, 1, 3, 9];

function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == target) {
            return i;
        }
    }
    return -1;
}

let result = linearSearch(arr, 5);
console.log("Element found at index", result);


function serch(array, tar) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] == tar) {
            return i
        }
    }
    return -1
}
let res = serch([1, 2, 56, 78,-1], -1)
console.log(res)