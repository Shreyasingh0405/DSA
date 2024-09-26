var solution = function (isBadVersion) {
    return function (n) {
        let start = 1
        let end = n
        let fbv = -1
        while (start <= end) {
            let mid = Math.floor((start + end) / 2)
            if (isBadVersion(mid) == true) {
                fbv = mid;
                end = mid - 1
            } else {
                start = mid + 1
            }
        }
        return fbv
    }
};
let n = 5; // Total versions
let isBadVersion = function (version) {
    return version >= 4; // Let's assume version 4 is the first bad version
};

let findFirstBadVersion = solution(isBadVersion);
console.log(findFirstBadVersion(n)); // Output: 4
