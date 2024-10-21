//let array=[8,10,6,5,3,4,1,2,9]
//psedocode
//iterate
//smallest find
//swap

function selectionSort(array) {
    for (let i = 0; i < array.length - 1; i++) {
        let minInt = i
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[minInt]) {
                minInt = j
            }
        }
            let temp = array[i];
            array[i] = array[minInt];
            array[minInt] = temp;
        
    }
    return array

}
console.log(selectionSort([64, 34, 25, 12, 22, 11, 90]))

//Time Complexity: O(n2)

//Space Complexity: O(1)