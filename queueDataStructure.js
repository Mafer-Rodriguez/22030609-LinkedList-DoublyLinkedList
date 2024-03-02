//remember that queue is a FIFO data structure (First In First Out)
//we can use an array to implement a queue, but it is not the best way to do it
class Queue{
    constructor(){
        this.items = [];
        this.front = 0;
        this.end = 0;
    }// Add element to queue
    //se encarga de resivir valore y entroducirlo a nuetro objeto de items
    enqueue(cola){
        this.items[this.end] = cola;
        this.end++;
    };

    // Return and remove first element in queue
     dequeue(){
        if(this.front == this.end) {
            return (null, "there is nothing to delete");
        }

        const data = this.items[this.front];//es el primer valor que entro, el primero en salir 
        this.front++; //en deves de apuntar a el 0, apunta al siguiente valor
        return data;
     }

     //size of queue
     getSize(){
         return this.end - this.front;
     }

    //isEmpty
    isEmpty(){
        if (this.getSize() === 0 ){
            return {isEmpty: true, message: "There is nothing in the queue"};
        }else {
            return {isEmpty: false, message: "There is something in the queue"};
        }
    }

     //peek, saber el valor de la fila, sin sacarlo (ver el primer valor)
     peek(){
        if (this.getSize() === 0){
            return (null, "There is nothing in the queue");
        }
        return this.items[this.front];//el primer valor que entro o que esta en este momento en la fila
     }




}



const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
//queue.dequeue();
console.log(queue);
//console.log(queue.dequeue());
//console.log(queue.dequeue());
//console.log(queue.dequeue());
//console.log(queue.dequeue());
console.log(queue.getSize());
console.log(queue.isEmpty());
console.log(queue.peek());