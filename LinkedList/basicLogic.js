class linkedList {
    constructor(data) {
        this.head = {
            value: data,
            next: null
        }
        this.tail = this.head
        this.size = 1          // if want to count size
    }
    appendNode(nodeData){
        let newNode={
            value: nodeData,
            next: null
        }
        this.tail.next=newNode
        this.tail=newNode
        this.size+=1
    }
}
let list = new linkedList(200)
list.appendNode(400)
list.appendNode(500)
list.appendNode(600)
list.appendNode(700)
list.appendNode(800)
list.appendNode(100)
console.log(list)

// Method to print all list
//printList() {
//     let currentNode = this.head;
//     let result = [];
//     while (currentNode) {
// //         result.push(currentNode.value);
//         currentNode = currentNode.next;
//     }
//     console.log(result.join(' -> '));
// }