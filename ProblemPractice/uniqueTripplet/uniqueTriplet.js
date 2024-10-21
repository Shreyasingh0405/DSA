//Given an array of integers and a target sum, 
//count the number of unique triplets (sets of three integers) in the array that sum up to the target.
// // nums = [1, 2, 3, 4, 5, 5, 5], target = 9
// // (The unique triplets are [1, 3, 5], [1, 4, 4], and [2, 3, 4].)

//c=a-b

function uniqueTriplets(nums, target) {
    const newSet = new Set()
    const map = new Map()

    for (let i = 0; i < nums.length - 2; i++) {
        const current = target - nums[i]
        map.clear()
        for (let j = i + 1; j < nums.length; j++) {
            const triplet = current - nums[j]
            if (map.has(triplet)) {
                const store = ([nums[i], nums[j], triplet]).sort((a, b) => (a - b))
                newSet.add(store.toString())
            } else {
                map.set(nums[j],true);
            }
        }
    }
    return [...newSet].map(x => x.split(",").map(Number))
}

console.log(uniqueTriplets([1, 2, 3, 4, 5, 5, 5], 9))




