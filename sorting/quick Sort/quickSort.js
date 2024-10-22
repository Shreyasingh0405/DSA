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



//=============================================*******=================================//

function findKthLargest(arr, k) {
    const frequencyMap = new Map();

    // Step 1: Count the frequency of each element
    for (let num of arr) {
        if (frequencyMap.has(num)) {
            frequencyMap.set(num, frequencyMap.get(num) + 1);
        } else {
            frequencyMap.set(num, 1);
        }
    }

    // Step 2: Get all unique elements from the Map and sort them in descending order
    const uniqueElements = Array.from(frequencyMap.keys()).sort((a, b) => b - a);

    // Step 3: Return the Kth largest element
    return uniqueElements[k - 1];
}

// Example Usage
const array1 = [3, 2, 1, 5, 6, 4];
const k1 = 2;
console.log(findKthLargest(array1, k1));  // Output: 5


//========================****====================//


