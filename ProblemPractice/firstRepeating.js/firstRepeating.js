// Given an array arr[], find the first repeating element. The element should occur more than once and the index of its first occurrence should be the smallest.
// Note:- The position you return should be according to 1-based indexing. 
// Examples:
// Input: arr[] = [1, 5, 3, 4, 3, 5, 6]
// Output: 2
// Explanation: 5 appears twice and its first appearance is at index 2 which is less than 3 whose first the occurring index is 3.

function repeating(arr){
    let map=new Map()
    for(let i=0;i<arr.length;i++){
        if(map.has(arr[i])){
            map.set(arr[i],map.get(arr[i])+1)
        }else{
            map.set(arr[i],i+1)
        }
    }
    for(let i=0;i<arr.length;i++){
        if(map.get(arr[i])>1){
            return map.get(arr[i])
        }

    }
    return -1
   
}
console.log(repeating([1, 5, 3, 4, 3, 5, 6]))