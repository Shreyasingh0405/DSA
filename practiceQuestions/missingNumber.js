/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    let sum = 0
    let len = nums.length;
    const sumExpected = (len * (len + 1) / 2)
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    return sumExpected - sum;

};
