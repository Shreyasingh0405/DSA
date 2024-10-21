//### 4. **Sort Colors (Dutch National Flag Problem)** (Let’s keep it colorful! 🎨)
function dutch(array){
   for(let i=0;i<array.length-1;i++){
    for(let j=i+1;j<array.length;j++){
        if(array[i]>array[j]){
        const temp=array[i]
        array[i]=array[j]
        array[j]=temp
        }
    }
   }
   return array
}
let array = [2, 0, 2, 1, 1, 0];
console.log(dutch(array)); 