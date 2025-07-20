const arr = [5, 3, 8, 1, 2,0]; 
const obj = {}; 
arr.forEach((value) => {
    obj[value] =value
});
console.log(Object.keys(obj).map(Number));
