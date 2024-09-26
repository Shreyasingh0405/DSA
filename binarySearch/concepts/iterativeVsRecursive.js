//Iterative Vs recursive
/*
  Tabular Comparison: Iterative vs Recursive Approaches

  ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  | **Aspect**                             | **Iterative Approach**                                              | **Recursive Approach**               |
  ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  | **Definition**                         | Uses loops (`for`, `while`) to repeatedly execute code             | Uses function calls to solve subproblems recursively |
  ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  | **Memory Usage**                       | Efficient: Only stores a few variables (like loop counters)        | Higher memory usage: Each recursive call is stored in the call stack |
  ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  | **Control Flow**                       | Sequential, stays within a single function call                    | "Jumps" between multiple function calls (backtracking) |
  ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  | **Base Case vs. Loop Condition**        | Controlled by loop conditions (e.g., `while`)                | Controlled by a base case that stops recursion         |
  ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  | **Ease of Understanding**              | More intuitive and easier for beginners                            | More abstract and can be harder to grasp initially     |
  ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  | **Performance**                         | Faster: No overhead from function calls                             | Slower: Overhead from multiple function calls          |
  ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  | **Code Complexity**                    | Can require more code, especially for complex logic                 | More concise and elegant for problems suited to recursion |
  ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  | **Risk of Stack Overflow**            | No risk of stack overflow                                          | High risk if recursion depth exceeds stack limit       |
  ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  | **Usage**                            | Best for memory efficiency and large input sizes                   | Best for problems that can be naturally divided into subproblems (e.g., tree traversal) |
  ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  | **Examples**                           | Binary search, searching in an array                               | Tree traversals, divide-and-conquer algorithms         |
  ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  | **Time Complexity**                  | O(log n) for binary search                                         | O(log n) for binary search                             |
  ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  | **Space Complexity**                   | O(1) for binary search                                             | O(log n) due to recursion stack usage                  |
  ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  | **Time and Space Complexity**        |
  ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  
  - **Iterative Binary Search**:
    - **Time Complexity**: O(log n) – The search space is halved after each iteration.
    - **Space Complexity**: O(1) – Only a few variables (`start`, `end`, `mid`) are stored at any given time.

  - **Recursive Binary Search**:
    - **Time Complexity**: O(log n) – The search space is halved with each recursive call.
    - **Space Complexity**: O(log n) – Due to the call stack storing up to `log n` recursive calls.

  -------------------------------------------------------
  | **Key Points for Interview**                         |
  -------------------------------------------------------
  1. **Memory Efficiency**: Iterative approach is more memory efficient (O(1) space) compared to recursion (O(log n) space due to the call stack).
  
  2. **Control Flow**: Iteration uses loops, while recursion involves function calls with backtracking—elegant but abstract.

  3. **Risk**: Recursive methods risk stack overflow with large input sizes, which iteration avoids.
*/


//Which is better Iterative or Recursive:-
// -----------------------------------------------------
// |                 Pros and Cons                     |
// -----------------------------------------------------
// | Aspect          | Iterative Approach                | Recursive Approach                |
// |-----------------|-----------------------------------|-----------------------------------|
// | **Pros**        | - Memory efficient (O(1) space)   | - Elegant and concise             |
// |                 | - Avoids stack overflow           | - Intuitive for recursive problems|
// | **Cons**        | - Verbose for complex problems    | - More memory usage (O(log n) or more)|
// |                 | - Harder for branching problems   | - Risk of stack overflow          |
// | **Best for**    | Simple loops, large input sizes   | Problems with natural recursion   |

// -----------------------------------------------------
// |                  Summary                           |
// -----------------------------------------------------
// - **For Performance and Memory Efficiency**: 
//   - The iterative approach is generally better due to constant space usage and avoiding stack overflow.

// - **For Elegant Code and Readability**: 
//   - The recursive approach is better when a problem can naturally be broken into subproblems, 
//     especially for tasks like tree traversal and divide-and-conquer.

// -----------------------------------------------------
