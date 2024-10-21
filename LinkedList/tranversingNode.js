class list{
    constructor (data){
        this.head ={
            value:data,
            next:null
        }
        this.tail=this.head
        this.size=1
    }
    addData(newAddData){
        let newData={
            value: newAddData,
            next:null
        }
        this.tail.next=newData
        this.tail=newData
        this.size+=1
    }
    transversing(){
        let counter=0
        let currentNode=this.head
        while(counter<this.size){
            console.log(currentNode.value)
            currentNode= currentNode.next;
            counter++
        }
    }
}
let callList = new list(100)
callList.addData(200)
callList.addData(300)
callList.addData(400)
callList.addData(500)
callList.transversing()
console.log(callList)