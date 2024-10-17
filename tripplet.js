function findUniqueTriplets(nums, target) {
  let uniqueTriplets = new Set();
  
  // Iterate over the array and fix one element at a time
  for (let i = 0; i < nums.length - 2; i++) {
      let seen = new Set();
      let currentTarget = target - nums[i];
      
      for (let j = i + 1; j < nums.length; j++) {
          let complement = currentTarget - nums[j];
          
          // Check if the complement exists in the set
          if (seen.has(complement)) {
              // Sort the triplet to ensure uniqueness
              let triplet = [nums[i], nums[j], complement].sort((a, b) => a - b);
              
              // Add the triplet as a string to the set to avoid duplicates
              uniqueTriplets.add(triplet.toString());
          }
          
          // Add the current element to the set
          seen.add(nums[j]);
      }
  }
  
  // Convert each triplet string back to an array and return the result
  return Array.from(uniqueTriplets).map(triplet => triplet.split(',').map(Number));
}

// Example usage:
const nums = [1, 2, 3, 4, 5, 5, 5];
const target = 9;
const result = findUniqueTriplets(nums, target);
console.log(result);
