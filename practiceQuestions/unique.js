//How you can find unique values in an array?
//method1
let array = [1, 2, 2, 3, 4, 5, 6, 6, 6, 6]
const result = new Set(array)
console.log(result)

//method2
let container1 = []
for (let i = 0; i < array.length; i++) {
    if (!(container1.includes(array[i]))) {
        container1.push(array[i])
    }
}
console.log(container1)


//method3
// function unique(a) {
//     let uniqueArray = []
//     for (let i = 0; i < a.length; i++) {
//         let isDuplicate = false
//         for (let j = 0; j < uniqueArray.length; j++) {
//             if (a[i] === uniqueArray[j]) {
//                 isDuplicate = true
//                 break;
//             }
//         }
//         if (!isDuplicate) {
//             uniqueArray.push(a[i])
//         }
//     }
//     return uniqueArray

// }
// const res = unique([7, 7, 8, 9, 5, 6, 66, 66, 7])
// console.log(res)


//map
const exam = [2,3,4,5]
const store = exam.map((elem=>{
   return elem*2
}))
console.log(store)
console.log(exam)


//filter
const fil = exam .filter((elemee=>{
    return elemee%3==0
}))
console.log(fil)

//reduce
const numbers=[4,5,6,0,1]
const red = numbers.reduce ((accumulator,currentValue)=>{
    return accumulator * currentValue
},0);
console.log(red)

//iife
// (function(){
//     console.log("happy");
// })();

// (function(){
//     console.log('Hello Roadmap!');
//   })();
  