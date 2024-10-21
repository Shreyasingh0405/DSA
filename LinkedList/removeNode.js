class list {
    constructor(data) {
        this.head = {
            value: data,
            next: null
        }
        this.tail = this.head
    }
    addList(addData) {
        let newData = {
            value: addData,
            next: null
        }
        this.tail.next = newData;
        this.tail = newData
    }
    deleteNode(index) {
        let counter = 1
        let leadAddress = this.head
        if (index == 1) {
            this.head = this.head.next
        } else {
            while (counter < index - 1) {
                leadAddress = leadAddress.next
                counter++
            }
            let nextNode = leadAddress.next.next
            leadAddress.next = nextNode
        }
    }
}
let linked = new list(200)
linked.addList(300)
linked.deleteNode(1)
console.log(linked)