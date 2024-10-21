// **Merge Intervals**
function merge(arr1, arr2) {
    let result = [];
    let i = 0, j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i][0] <= arr2[j][0]) {
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++;
        }
    }
    while (i < arr1.length) {
        result.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        result.push(arr2[j]);
        j++;
    }

    return result;
}

// Merge Sort implementation
function mergeSortIntervals(intervals) {
    if (intervals.length <= 1) return intervals;

    const mid = Math.floor(intervals.length / 2);
    const left = mergeSortIntervals(intervals.slice(0, mid));
    const right = mergeSortIntervals(intervals.slice(mid));

    return merge(left, right);
}
function mergeIntervalsWithMergeSort(intervals) {
    if (intervals.length === 0) return [];
    intervals = mergeSortIntervals(intervals);
    const merged = [intervals[0]];
    for (let i = 1; i < intervals.length; i++) {
        let prev = merged[merged.length - 1];
        let curr = intervals[i];
        if (prev[1] >= curr[0]) {
            prev[1] = Math.max(prev[1], curr[1]);
        } else {
            merged.push(curr);
        }
    }

    return merged;
}
const input = [[1, 3], [2, 6], [8, 10], [15, 18]];
const output = mergeIntervalsWithMergeSort(input);
console.log(output);  
