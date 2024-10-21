//let array=[8,10,6,5,3,4,1,2,9]
//psedocode
// iteration
//adjacent 1,2 ==> 2,1,3===>2,1,3===> 
function arrayBubbleSort(array) {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] > array[j]) {
                let temp = array[i];
                array[i] = array[j];
                array[j] = temp;

            }
        }
    }
    return array
}
console.log(arrayBubbleSort([64, 34, 25, 12, 22, 11, 90]))

// Time Complexity: O(n2)
// Space Complexity: O(1)