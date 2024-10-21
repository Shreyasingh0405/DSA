// 1. Reverse a Linked List
// Problem: Given a singly linked list, reverse it.
// Key Concepts: Linked lists, pointers.

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
    reverse(){
        let prev=null
        let curr = this.head
        while(curr){
            let next = curr.next
            curr.next=prev
            prev= curr
            curr=next
        }
        this.head=prev
    }
}
let list = new linkedList(200)
list.appendNode(400)
list.appendNode(800)
list.reverse()
console.log(list)

