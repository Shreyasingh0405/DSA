var findPeakElement = function (nums) {
    let start = 0;
    let end = nums.length - 1;
    while (start < end) {
        let mid = Math.floor((start + end) / 2);
        if (nums[mid] > nums[mid + 1]) {
            end = mid;
        } else {
            start = mid + 1;
        }
    }
    return start;
};

console.log(findPeakElement([1, 2, 4, 8, 5]));
