class linkedList {
    constructor(data) {
        this.head = {
            value: data,
            next: null
        };
        this.tail = this.head;
        this.size = 1; // to count size
    }

    appendNode(nodeData) {
        let newNode = {
            value: nodeData,
            next: null
        };
        this.tail.next = newNode;
        this.tail = newNode;
        this.size += 1;
    }

    findMiddle() {
        let slow = this.head;
        let fast = this.head;

        while (fast !== null && fast.next !== null) {
            slow = slow.next;       
            fast = fast.next.next;  
        }

        return slow.value; 
    }
}
let list = new linkedList(200);
list.appendNode(400);
list.appendNode(800);
list.appendNode(1000);
list.appendNode(1200);

console.log( list.findMiddle()); 
