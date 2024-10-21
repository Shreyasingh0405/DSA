//let array=[4,8,10,6,5,3,4,1,2,9] 
//psedu
//divide half 
//comapre and shift

function mergeSort(array){
if(array.length<2){
    return array
}
const mid= Math.floor(array.length/2)
const leftArr= array.slice(0,mid)
const rightArr = array.slice(mid)
return merge(mergeSort(leftArr),mergeSort(rightArr))
}
function merge(leftArr,rightArr){
    const sortedArr = []
    while(leftArr.length && rightArr.length){
        if(leftArr[0]<= rightArr[0]){
           sortedArr.push(leftArr.shift())
        }else{
            sortedArr.push(rightArr.shift())
        }
    }
    return [...sortedArr,...leftArr,...rightArr]
}
const array =[64, 34, 25, 12, 22, 11, 90]
console.log(mergeSort(array))

//Time Complexity: O(n log n)
//Space Complexity: O(n)
