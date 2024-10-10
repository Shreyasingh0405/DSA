//Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:
// [4,5,6,7,0,1,2] if it was rotated 4 times.
// [0,1,2,4,5,6,7] if it was rotated 7 times.
// Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].
// Given the sorted rotated array nums of unique elements, return the minimum element of this array.
// You must write an algorithm that runs in O(log n) time.
//LEETCODE QUESTION 153

var findMin = function (nums) {
    let start = 0;
    let end = nums.length - 1;
    if (nums[start] <= nums[end]) {
        return nums[start];
    }
    while (start <= end) {
        let mid = Math.floor((start + end) / 2)
        if (nums[mid] > nums[mid + 1]) {
            return nums[mid + 1]
        }
        if (nums[mid] < nums[mid - 1]) {
            return nums[mid]
        }
        if (nums[mid] >= nums[start]) {
            start = mid + 1
        } else {
            end = mid - 1
        }
    }
}
console.log(findMin([11, 21, , 31, 41, 51, 61, 10]))


//method 2

var findMin2 = function (nums) {
    let start = 0;
    let end = nums.length - 1;
    if (nums[start] < nums[end]) {
        return nums[start];
    }

    while (start < end) {
        let mid = Math.floor((start + end) / 2);
        if (nums[mid] > nums[end]) {
            start = mid + 1;
        } else {
            end = mid;
        }
    }
    return nums[start];

};
console.log(findMin2([11, 21, , 31, 41, 51, 61, 10]))

