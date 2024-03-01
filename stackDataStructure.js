// Recuerda, en una pila el último en entrar es el primero en salir (LIFO)
class stack {
    constructor(){
        this.items = [];
        this.count=0;
    }

    //Add element to top of stack
    push(element){
        this.items[this.count] = element;
        //que elemento se agrego y en que posicion o cual es le valor actual del contador
        console.log(`${element} added to ${this.count}`);	// 100 added to 1
        this.count += 1;//incrementa el contador, que esta ciendo rastreando la posicision del top del stack
        return this.count -1 //retorna el valor actual del contador
    }

    //Return and remove top element in stack
    //Return undefined if stack is empty
    pop(){
        if(this.count == 0) return undefined;
        let deletItem = this.items[this.count -1];//almacena el valor del top del stack
        this.count -= 1;//decrementa el contador
        console.log(`${deletItem} removed`); //esto es para saber que elemento se elimino
        return deletItem;
    }

    //Check top element in stack
    peek(){
        console.log(`Top element is ${this.items[this.count-1]}`);//esto es para saber que elemento esta en el top del stack y en que posicion
        return this.items[this.count -1];
    }

    //Check if stack is empty
    isEmpty(){
        console.log(this.count == 0 ? 'Stack is empty' : 'Stack is NOT empty');//esto es para saber si el stack esta vacio o no
        return this.count == 0;
    }

    //Check size of stack
    size(){
        console.log(`${this.count} elements in stack`);//esto es para saber cuantos elementos hay en el stack
        return this.count;
    }

    //Print elements in stack

    print (){
        let str = ''
        for (let i =0; i < this.count; i++){
            str += this.items[i] + ' ';//esto es para imprimir todos los elementos del stack
        }
        return str;
    }

    //Clear stack
    clear(){
        this.items = [];
        this.count = 0;
        console.log('stack cleared..');//esto es para saber si el stack esta vacio o no
        return this.items;
    }



}

const stack = new stack();

stack.isEmpty();

stack.push(100);
stack.push(200);
stack.push(300);

stack.peek();

stack.push(300);

console.log(myStack.print());

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

stack.pop()
stack.pop()
//console.log(stack.pop());
//console.log(stack.pop());

stack.clear();

console.log(stack.print());
stack.size();

//stack.isEmpty();