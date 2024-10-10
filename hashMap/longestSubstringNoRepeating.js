var lengthOfLongestSubstring = function(s) {
    let map=new Map()
    let start=0
    let maxLength=0
    for(let i=0;i<s.length-1;i++){
        let char = s[i]
        if(map.has(char)){
            start=Math.max(map.get(char)+1,start)
        }
        map.set(char,i)
    maxLength=Math.max(maxLength,i-start+1)
    }
    
    return maxLength
}
console.log(lengthOfLongestSubstring("abcabcbb"))