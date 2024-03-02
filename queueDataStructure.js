// Remember that a queue is a FIFO (First In First Out) data structure
// We can use an array to implement a queue, but it's not the best way to do it
class Queue {
    constructor() {
        this.items = [];
        this.front = 0;
        this.end = 0;
    }// Add element to the queue
    enqueue(item) {
        this.items[this.end] = item;
        this.end++;
    };

    // Remove and return the first element from the queue
    dequeue() {
        if (this.front === this.end) {
            return [null, "There's nothing to remove"];
        }

        const data = this.items[this.front];
        delete this.items[this.front];
        this.front++;
        return data;
    }

    // Get the size of the queue
    getSize() {
        return this.end - this.front;
    }

    // Check if the queue is empty
    isEmpty() {
        if (this.getSize() === 0) {
            return { isEmpty: true, message: "The queue is empty" };
        } else {
            return { isEmpty: false, message: "There's something in the queue" };
        }
    }

    // Peek, view the value of the queue without removing it (view the first value)
    peek() {
        if (this.getSize() === 0) {
            return [null, "There's nothing in the queue"];
        }
        return this.items[this.front];
    }

    print() {
        if (this.getSize() === 0) {
            return [null, "There's nothing in the queue"];
        }
        let result = '';
        for (let i = this.front; i < this.end; i++) {
            result += this.items[i] + ' ';
        }
        return result;
    }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
//queue.dequeue();
console.log(queue.print());
console.log(queue);
//console.log(queue.dequeue());
//console.log(queue.dequeue());
//console.log(queue.dequeue());
//console.log(queue.dequeue());
console.log(queue.getSize());
console.log(queue.isEmpty());
console.log(queue.peek());
console.log(queue.print());
