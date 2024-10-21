class linkedList {
  constructor(data) {
    this.head = {
      value: data,
      next: null
    }
    this.tail = this.head
    this.size = 1          // if want to count size
  }
  appendNode(nodeData) {
    let newNode = {
      value: nodeData,
      next: null
    }
    this.tail.next = newNode
    this.tail = newNode
    this.size += 1
  }
  insertNode(index, value) {
    let counter = 1;
    let currentNode = this.head;
    while (counter > index) {
      counter++
      currentNode = currentNode.next
    }
    let nextNode = currentNode.next;
    currentNode.next = {
      value: value,
      next: nextNode
    }
  }

}
let list = new linkedList(200)
list.appendNode(400)
list.appendNode(500)
list.appendNode(600)
list.appendNode(700)
list.appendNode(800)
list.appendNode(100)
list.insertNode(2, 3000)
console.log(list)

