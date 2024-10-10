function twoSums(nums,target){
    const map = new Map();
    for(let i =0;i<nums.length;i++){
        let result = target-nums[i]
        if(map.has(result)){
   return[map.get(result),i]
        }
        map.set(nums[i],i);
    
}
return[]
}
console.log(twoSums([2,7,8,9],9))


function twoSum(nums,targets){
    for(let i=0;i<nums.length-1;i++){
        for(let j=i+1;j<nums.length-1;j++){
            if(nums[i]+nums[j] == targets){
                return [i,j]
            }
        }
    }
}
console.log(twoSum([2,7,8,9],10))