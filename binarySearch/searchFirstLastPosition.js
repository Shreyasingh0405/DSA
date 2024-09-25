// Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.
// If target is not found in the array, return [-1, -1].
// You must write an algorithm with O(log n) runtime complexity.


var searchRange = function (nums, target) {
    let ans = [-1, -1]
    let start = 0;
    let end = nums.length-1
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (nums[mid] == target) {
            ans[0] = mid
            end = mid - 1
        } else if (nums[mid] < target) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    start = 0;
    end = nums.length - 1;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (nums[mid] == target) {
            ans[1] = mid
            start = mid + 1
        } else if (nums[mid] < target) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return ans
};
console.log(searchRange([4,5,6,7,8,8],8))