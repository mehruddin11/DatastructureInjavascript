class Node{
  constructor(data, next){
    this.data= data
    this.next= null
  }
}
class LinkedList {
  constructor(){
    this.head= null;
    this.size= 0;
  }
  InsertAtHead(data){
    let node= new Node(data)
    if(!this.head){
      this.head= node
      this.size++;
    }
  }
  InsertAtTail(data){
    let curr= this.head;
    let node= new Node(data);
    while(curr.next !== null){
      curr= curr.next;
    }
    curr.next= node
    this.size++
  }
  ChangeHead(){
    this.head= this.head.next;
    
  }
  PrintHalfOflinkedList(){
    let curr= this.head;
    let count = 0;
    while(curr !== null){
      curr= curr.next
      count+=1
    }
    let mid= Math.floor(count/2)
    while(mid > 0){
      this.head=this.head.next
      mid--
    }
  }
  DeleteElement(data){
    if(data=== this.head.data){
       this.head= this.head.next
      this.size--
    }
    
    else{
      let curr= this.head;
      while(curr.next !== null){
        curr = curr.next;
        if(curr.data == data){
           return curr.next= curr.next.next
        }
      }
      return -1
    }
  }
  InsertAt(data, index){
    
    let node= new Node(data);
    let count = 1
    let curr= this.head
    while(index > count){
      curr= curr.next;
      index--
      
    }
    node.next= curr.next;
    curr.next= node
    this.size++;
    
  }
  ReverseList(){
    let curr = this.head;
    let prev = null;
    while(curr !== null){
      let temp = curr.next;
      curr.next= prev;
      prev= curr;
      curr= temp;
    }
    return prev
  }
  Printlist(){
    let curr= this.head
    while(curr!== null){
      console.log(curr.data)
      curr= curr.next
    }
    
 
  }
}
const list= new LinkedList(10)
list.InsertAtHead(44)
list.InsertAtTail(20)
list.InsertAtTail(80)
list.InsertAtTail(8)
// list.DeleteElement(80)
// list.ReverseList()
// list.InsertAt(100, 1)
// list.InsertAt(0, 3)
// list.PrintHalfOflinkedList()
// list.ChangeHead()

list.Printlist()
