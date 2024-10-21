function quickSort(array){
    if(array.length<2){
        return array
    }
    let pivot=array[array.length-1]
    let left=[]
    let right=[]
    for(let i=0;i<array.length-1;i++){
        if(array[i]<pivot){
            left.push(array[i])
        }else{
            right.push(array[i])
        }
    }
    return [...quickSort(left),pivot,...quickSort(right)]
}
const array=[3, 2, 3, 1, 2, 4, 5, 5, 6]
const sortedArray = quickSort(array)
const uniqueSortedArray = [...new Set(sortedArray)];
console.log(uniqueSortedArray);

//largest
let k = 4
 const fourthLargest = uniqueSortedArray[uniqueSortedArray.length - k];
console.log("Largest:",fourthLargest);

//smallest
const fourthSmallest = uniqueSortedArray[k - 1];  
console.log("Smallest:", fourthSmallest); 
