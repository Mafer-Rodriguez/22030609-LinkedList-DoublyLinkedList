// Remember, in a stack, the last one to enter is the first one to leave (LIFO)
class Stack {
    constructor(){
        this.items = [];
        this.count = 0;
    }

    // Add element to top of stack
    push(element){
        this.items[this.count] = element;
        // which element was added and at which position or what is the current value of the counter
        console.log(`${element} added to ${this.count}`);	// 100 added to 1
        this.count += 1; // increment the counter, which is tracking the position of the top of the stack
        return this.count - 1; // return the current value of the counter
    }

    // Return and remove top element in stack
    // Return undefined if stack is empty
    pop(){
        if(this.count == 0) return undefined;
        let deletedItem = this.items[this.count - 1]; // store the value of the top of the stack
        this.count -= 1; // decrement the counter
        console.log(`${deletedItem} removed`); // this is to know which element was removed
        return deletedItem;
    }

    // Check top element in stack
    peek(){
        console.log(`Top element is ${this.items[this.count - 1]}`); // this is to know which element is at the top of the stack and at which position
        return this.items[this.count - 1];
    }

    // Check if stack is empty
    isEmpty(){
        console.log(this.count == 0 ? 'Stack is empty' : 'Stack is NOT empty'); // this is to know if the stack is empty or not
        return this.count == 0;
    }

    // Check size of stack
    size(){
        console.log(`${this.count} elements in stack`); // this is to know how many elements are in the stack
        return this.count;
    }

    // Print elements in stack
    print(){
        let str = '';
        for (let i = 0; i < this.count; i++){
            str += this.items[i] + ' '; // this is to print all the elements of the stack
        }
        return str;
    }

    // Clear stack
    clear(){
        this.items = [];
        this.count = 0;
        console.log('stack cleared..'); // this is to know if the stack is empty or not
        return this.items;
    }
}

const stack = new Stack();

stack.isEmpty();

stack.push(100);
stack.push(200);
stack.push(300);

stack.peek();

stack.push(300);

console.log(stack.print());

stack.pop();
stack.pop();

stack.clear();

console.log(stack.print());
stack.size();

stack.isEmpty(); // Call the isEmpty method on the stack instance

stack.push(100);
stack.push(200);
stack.push(300);

stack.peek();

stack.push(300);

console.log(stack.print());

stack.pop();
stack.pop();

stack.clear();

console.log(stack.print());
stack.size();

// stack.isEmpty();
