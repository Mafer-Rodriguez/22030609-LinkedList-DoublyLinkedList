class Node {
    //la informacion de este nodo va  a ser inicializada con el parametro data
    constructor(data, next, prev) {
        this.data = data;//informacion que almacena el nodo
        this.next = next;//referencia al siguiente nodo
        this.prev = prev;//referencia al nodo anterior
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    addToHead(data) {
        const newNode = new Node(data, this.head, null);
        if (this.head){
            newNode.next = this.head;
            this.head.prev = newNode;// previo de la cabeza apunta al nuevo nodo (anterior)
            this.head = newNode;//el nuevo nodo se convierte en la cabeza
        }else{
            this.head = newNode;
            this.tail =newNode;
        }
        this.size++;
    }

    addToTail(data){
        const newNode = new Node(data, null, this.tail);
        if(this.tail){//si hay un nodo en la cola
            newNode.prev = this.tail;//el nuevo nodo que acavamos de crear va a ser el siguiente nodo de la cola
            this.tail.next = newNode;//la cola anterior va a ser el valor anterior del nuevo nodo
            this.tail = newNode;
        }else{
            this.tail = newNode;
            this.head = newNode;
        }
        this.size++;
    }

    //insertar un valor en una posicion especifica
    insertAt(data, index){
        if(index<0 || index > this.size){
            return null;
        }
        const newNode = new Node(data, null, null);
        let current = this.head;//va a empezar desde la cabeza
        let previous;//va a ser el nodo anterior al nodo actual
        if(index === 0){// si el index que resivimos es igual a 0
            newNode.next = current;//el valor que recivimos lo vamos a poner en la cabeza
            current.prev = newNode;//el valor anterior del nodo actual va a ser el nuevo nodo
            this.head = newNode;
        }else {
            for(let i =0; i<index; i++){//mientras i sea menor al index que resivimos
                previous = current;//el nodo anterior va a ser el nodo actual
                current = current.next;//el nodo actual va a ser el siguiente nodo
            }
            newNode.next = current;//el nuevo nodo va a ser el siguiente nodo
            newNode.prev = previous;//el nuevo nodo va a ser el nodo anterior
            current.prev = newNode;//el nodo anterior del nodo actual va a ser el nuevo nodo
            previous.next = newNode;//el nodo siguiente del nodo anterior va a ser el nuevo nodo
        }
        this.size++;
    }


    print(){
        let current = this.head;
        let result = '';
        while(current){
            result += current.data + ' <-> ';
            current = current.next;
        }
        return result += 'X';

    }

    reversePrint(){
        let current = this.tail;
        let result = '';
        while(current){//mientras current sea diferente de null 
            result += current.data + ' <-> ';
            current = current.prev;
        }
        return result += 'X';
    }


}

const list = new DoublyLinkedList();
list.addToHead(1);
list.addToHead(2);
list.addToHead(3);
list.addToTail(4);
list.addToTail(5);
list.addToTail(6);
list.insertAt(7, 2);//insertar el valor 7 en la posicion 2
console.log(list.print());
console.log(list);