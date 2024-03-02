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
console.log(queue.dequeue());