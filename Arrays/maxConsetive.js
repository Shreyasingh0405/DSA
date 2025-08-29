// Given a binary array nums, return the maximum number of consecutive 1's in the array.

 

// Example 1:

// Input: nums = [1,1,0,1,1,1]
// Output: 3
// Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.


function consecutive(nums){
    let maxCount =0
    let currentCount=0
    for(let i=0;i<nums.length;i++){
        if(nums[i]==1){
          currentCount+=1
        }else{
            maxCount= Math.max(currentCount,maxCount)
                currentCount=0

            
        }
    }
    return Math.max(currentCount,maxCount)
}

console.log(consecutive([1,1,0,1,1,1]))