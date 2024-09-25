// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

//LEETCODE QUESTION NO.35

var searchInsert = function (nums, target) {
    let start = 0;
    let end = nums.length - 1;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2)
        if (nums[mid] == target) {
            return mid
        } else {
            if (nums[mid] < target) {
                start = mid + 1
            } else {
                end = mid - 1
            } if (start == nums.length) {
                return -1
            }

        }
    }
    return start
}
console.log(searchInsert([1, 2, 3, 4, 5], 3))