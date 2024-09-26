var searchMatrix = function (matrix, target) {
    let lo = 0;
    let hi = matrix.length - 1;

    // First binary search: Find the row where the target might exist
    while (lo <= hi) {
        let mid = Math.floor((lo + hi) / 2);
        let lc = matrix[mid].length - 1;

        // Check if the target is within the range of the current row
        if (matrix[mid][0] <= target && target <= matrix[mid][lc]) {
            // Second binary search: Search within the row
            let rowLo = 0;
            let rowHi = lc;

            while (rowLo <= rowHi) {
                let rowMid = Math.floor((rowLo + rowHi) / 2);
                if (matrix[mid][rowMid] === target) {
                    return true;
                } else if (matrix[mid][rowMid] > target) {
                    rowHi = rowMid - 1;
                } else {
                    rowLo = rowMid + 1;
                }
            }
            return false; // Target is not in this row
        } else if (matrix[mid][0] > target) {
            hi = mid - 1; // Search in the upper rows
        } else {
            lo = mid + 1; // Search in the lower rows
        }
    }

    return false; // Target not found in any row
};

console.log(searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 5));  // true
console.log(searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 13)); // false
