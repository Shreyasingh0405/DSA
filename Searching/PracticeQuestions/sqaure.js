// function mySqrt(x) {
//     if (x === 0) return 0;

//     let left = 1;
//     let right = x;
//     let result = 0;

//     while (left <= right) {
//         let mid = Math.floor((left + right) / 2);
//         if (mid * mid === x) {
//             return mid;
//         } else if (mid * mid < x) {
//             result = mid; // mid is a candidate
//             left = mid + 1;
//         } else {
//             right = mid - 1;
//         }
//     }

//     return result;
// }
// console.log(mySqrt(4)); 
// console.log(mySqrt(25)); 



function square(x) {
    let start=1
    let end=x
    let result = 0
    if (x === 0) {
        return 0
    }
    while (start <= end) {
        let mid = Math.floor((start + end) / 2)
        if (mid * mid == x) {
            return mid
        } else if (mid * mid < x) {
            result = mid
            start = mid + 1
        }else{
            end = mid-1
        }
    } return result
}
console.log(square(90))