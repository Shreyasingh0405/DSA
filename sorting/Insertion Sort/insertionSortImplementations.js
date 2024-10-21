//let array=[4,8,10,6,5,3,4,1,2,9]
// psudocode
//iterate 

function insertionSort(array) {
    let j
    for (let i = 1; i < array.length; i++) {
        let temp = array[i];
        for (j = i - 1; j >= 0; j--) {
            if (array[j] > temp) {
                array[j + 1] = array[j];
            } else {
                break;
            }
        }
        array[j + 1] = temp;
    }

    return array;
}
console.log(insertionSort([64, 34, 25, 12, 22, 11, 90]));
