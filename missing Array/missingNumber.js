var missingNumber = function (nums) {
    let sum =0
    let len = nums.length
    let sumExpect = ((len)*(len+1))/2
    for(let i=0;i<len;i++){
        sum+= nums[i]
    }
    return sumExpect-sum
};
console.log(missingNumber([0, 1, 2,3, 4, 5,7])); 
