class Arrays{
  constructor(){
    this.data= []
    this.length = 0
  }
  Push(data){
    if(this.length == 0){
       this.data[0] = data
         this.length++
    }
    else{
      this.data[this.length]= data
      this.length++
    }
  return this.data
  }
  Pop(){
    delete(this.data[this.length-1])
    this.length--
  }
  Unshift(data){
    for (let i= this.length-1 ; i >= 0 ; i--){
      this.data[i+1]= this.data[i]
    }
    this.length++
    this.data[0]= data
    
  }
  InsertAt(data, index){
    let arr= this.data
    for (let i= this.length-1; i>=index; i--){
      arr[i+1]= arr[i]
      
    }
    this.length++
    arr[index]= data
    
    
  }
  PrintArray(){
    
    for(let i=0; i<this.length; i++){
      console.log(this.data[i] ) 
    }
  }
}
arr = new Arrays()
arr.Push(1)
arr.Push(2)
arr.Push(3)
arr.Push(4)
arr.Unshift(20)
arr.Pop()
arr.InsertAt(100, 2)
arr.PrintArray()