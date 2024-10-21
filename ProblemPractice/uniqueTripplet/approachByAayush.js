const arr = [1, 2, 3, 4, 5, 5, 5]
const target = 9;

const uniqueTriple = ( nums, target) => {
    const newSet = new Set();
    const array = [];
    const map = new Map();
    
    for(let i = 0; i < nums.length - 2; i++){
        const remainder = target - nums[i];
        for(let j = i + 1; j< nums.length - 1; j++){
            const rem = remainder - nums[j];
            if(map.has(rem)){
                const store = [nums[i], nums[j], rem ].sort((a, b) => a - b)
                
                console.log("store -=-=->", store.toString(), typeof store.toString());
                
                newSet.add(store.toString())
            }else{
                map.set(rem, nums[j])
            }
            
        }
        
        
    }
    
    return [...newSet].map(x => x.split(",").map(Number))


}

console.log("uniqueTriple -=-=-=->",uniqueTriple(arr, target) )