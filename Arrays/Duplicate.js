// Example 1:

// Input: nums = [1,1,2]
// Output: 2, nums = [1,2,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).
// Example 2:

// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
// Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).



function reemoveDuplicates(nums){
    let array= []
    for(let i=0;i<nums.length;i++){
        if(!array.includes(nums[i])){
          array.push(nums[i])
        }
    }
    return array

}
const result = reemoveDuplicates([0,0,1,1,1,2,2,3,3,4,-1,-1,-8])
console.log(result)



//Two pointers


var removeDuplicates = function (nums) {
    let x = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[x] < nums[i]) {
            x = x + 1
            nums[x] = nums[i]
        }
    }
    return x + 1
};
const result1 = reemoveDuplicates([0,0,1,1,1,2,2,3,3,4,-1,-1,-8])
console.log(result1)


// Two Pointers Working - Step-by-Step

// 1 We use two pointers:
//     - `x` → starts at index 0 (tracks the last unique element's position).
//     - `i` → used in the loop to go through each element in the array.

// 2️ In each iteration of the loop:
//     - We compare the current element `nums[i]` with `nums[x]`.
//     - If `nums[i]` is different (means it's a new unique value),
//       then we do two things:
//         a. Move the `x` pointer one step forward: x = x + 1
//         b. Copy the unique value to the new position: nums[x] = nums[i]

// 3️ By doing this, we collect all the unique elements
//     at the beginning of the array, replacing duplicates.

// 4️ After the loop finishes:
//     - `x` will be pointing to the last unique value's index.
//     - Since index starts from 0, total unique elements = x + 1

//  So we return `x + 1` as the count of unique values in the array.
