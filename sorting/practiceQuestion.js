//### 1. **Bubble Sort** (Because, why not start with bubbles? 🫧)

function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap 'em!
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

let nums = [64, 34, 25, 12, 22, 11, 90];
console.log(bubbleSort(nums)); // Output: [11, 12, 22, 25, 34, 64, 90]


//### 2. **Merge Sort for Linked List** (Because merging is caring ❤️)

class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function mergeSort(head) {
    if (!head || !head.next) return head;

    let middle = getMiddle(head);
    let nextOfMiddle = middle.next;
    middle.next = null;

    let left = mergeSort(head);
    let right = mergeSort(nextOfMiddle);

    return sortedMerge(left, right);
}

function getMiddle(head) {
    if (!head) return head;
    let slow = head, fast = head.next;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}

function sortedMerge(left, right) {
    if (!left) return right;
    if (!right) return left;

    if (left.val <= right.val) {
        left.next = sortedMerge(left.next, right);
        return left;
    } else {
        right.next = sortedMerge(left, right.next);
        return right;
    }
}

// Test it out
let head = new ListNode(4, new ListNode(2, new ListNode(1, new ListNode(3))));
let sortedList = mergeSort(head);

// Helper function to print the sorted linked list
function printList(head) {
    let current = head;
    while (current) {
        console.log(current.val);
        current = current.next;
    }
}

printList(sortedList);


//### 3. **Find Kth Largest Element** (It's like finding the needle in a haystack, but with numbers 🔢)
//2nd method //

function findKthLargest(nums1, k) {
    nums.sort((a, b) => b - a);  // Sort in descending order
    return nums1[k - 1]; // kth largest element
}
let nums1 = [3, 2, 3, 1, 2, 4, 5, 5, 6];
let k = 4;
console.log(findKthLargest(nums1, k)); 




//### 4. **Sort Colors (Dutch National Flag Problem)** (Let’s keep it colorful! 🎨)

function sortColors(nums2) {
    let low = 0, mid = 0, high = nums2.length - 1;

    while (mid <= high) {
        if (nums2[mid] === 0) {
            [nums2[low], nums2[mid]] = [nums2[mid], nums2[low]];
            low++;
            mid++;
        } else if (nums2[mid] === 1) {
            mid++;
        } else {
            [nums2[mid], nums2[high]] = [nums2[high], nums2[mid]];
            high--;
        }
    }
}

let nums2 = [2, 0, 2, 1, 1, 0];
sortColors(nums2);
console.log(nums2); 


//### 5. **Merge Intervals** (Because no one likes overlapping meetings)


function mergeIntervals(intervals) {
    if (!intervals.length) return [];

    intervals.sort((a, b) => a[0] - b[0]);  // Sort by start time
    let result = [intervals[0]];

    for (let i = 1; i < intervals.length; i++) {
        let current = intervals[i];
        let lastMerged = result[result.length - 1];

        if (current[0] <= lastMerged[1]) {
            lastMerged[1] = Math.max(lastMerged[1], current[1]);  // Merge intervals
        } else {
            result.push(current);
        }
    }

    return result;
}

let intervals = [[1, 3], [2, 6], [8, 10], [15, 18]];
console.log(mergeIntervals(intervals))

//find kth smallest number
//find 2 smallest number.
//find 2 largest number.

//map use karke kth largest:- hash map and two pointer.