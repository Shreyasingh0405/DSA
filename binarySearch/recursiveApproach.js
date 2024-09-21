let data = [9,7,16,18,92,100,101,304]
let start=0;
let end=data.length-1;
let find=18;
let position=-1;
function recursiveBinarySearch(data,start,end){
    if (start > end) {
        return -1; 
     }
    let mid=Math.floor((start+end)/2)
   if(data[mid]==find){
    position=mid;
    return true
   }else if(data[mid]<find){
    recursiveBinarySearch(data,mid+1,end)
   }else{
    recursiveBinarySearch(data,start,mid-1)
   }
}
recursiveBinarySearch(data,start,end)
console.log(position)