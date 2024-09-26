//binary search:- it is one of the searching method applied on sorted array to search the target value.
//working process
//1. it first divide the sorted array half then find the mid point and compare it with the target value if mid is equals the target value then the process terminated.
//2. if mid is not equals in target value and it's small than target value then process executed from left side otherwise if mid is greater than targeted value then process executed from right side and again repeats step 1 and step 2 until getting the targeted value.
//Two approach to solve binary search 
//1. iterative          2.Recurssive.

//general psedo code for binary search
//### Binary Search Algorithm (Pseudocode):

// 1. **Input**: A sorted array `arr` and a target value `target`.
// 2. **Output**: The index of the `target` in the array, or `-1` if not found.
// 1. **Set** `left` to 0.
// 2. **Set** `right` to the length of the array - 1.
// 3. **While** `left` is less than or equal to `right`, do:
//    - a. **Set** `mid` to the integer value of `(left + right) / 2`.
//    - b. **If** the element at index `mid` equals `target`, then:
//       - i. **Return** `mid`.
//    - c. **Else if** the element at index `mid` is less than `target`, then:
//       - i. **Set** `left` to `mid + 1`.
//    - d. **Else**:
//       - i. **Set** `right` to `mid - 1`.
// 4. **Return** `-1` if the target is not found.

