var lengthOfLongestSubstring = function(s) {
    let map=new Map()
    let start=0
    let maxLength=0
    for(let end=0;end<s.length-1;end++){
        let char = s[end]
        if(map.has(char)){
            start=Math.max(map.get(char)+1,start)
        }
        map.set(char,end)
    maxLength=Math.max(maxLength,end-start+1)
    }
    
    return maxLength
}
console.log(lengthOfLongestSubstring("abcabcbb"))