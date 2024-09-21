//1. Iterative Approach (binary Search)

let array = [4, 5, 7, 9, 10,98];
let start = 0;
let end = array.length - 1;
 let target = 98;
let position = undefined
while (start <= end) {
    let mid = Math.floor((start + end) / 2)
    if (array[mid] == target) {
        position = mid
        break;
    } else if (array[mid] < target) {
        start = mid + 1
    } else {
        end = mid - 1
    }
}
console.log(position)