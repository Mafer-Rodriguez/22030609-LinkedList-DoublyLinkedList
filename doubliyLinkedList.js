class Node {
    // The data of this node will be initialized with the data parameter
    constructor(data, next, prev) {
        this.data = data; // Data stored in the node
        this.next = next; // Reference to the next node
        this.prev = prev; // Reference to the previous node
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    addToHead(data) {
        if (!data) {
            return "There is  no data";
        }

        const newNode = new Node(data, this.head, null);
        if (this.head) {
            newNode.next = this.head;
            this.head.prev = newNode; // Previous of the head points to the new node (previous)
            this.head = newNode; // The new node becomes the head
        } else {
            this.head = newNode;
            this.tail = newNode;
        }
        this.size++;
    }

    addToTail(data) {
        if (!data) {
            return "There is no data";
        }
        const newNode = new Node(data, null, this.tail);
        if (this.tail) {
            newNode.prev = this.tail; // The new node we just created will be the next node of the tail
            this.tail.next = newNode; // The previous tail will be the previous value of the new node
            this.tail = newNode;
        } else {
            this.tail = newNode;
            this.head = newNode;
        }
        this.size++;
    }

    // Insert a value at a specific position
    insertAt(data, index) {
        if (index < 0 || index > this.size) {
            return null;
        }
        const newNode = new Node(data, null, null);
        let current = this.head; // Start from the head
        let previous; // Will be the node before the current node
        if (index === 0) { // If the received index is equal to 0
            newNode.next = current; // The received value will be put in the head
            current.prev = newNode; // The previous value of the current node will be the new node
            this.head = newNode;
        } else {
            for (let i = 0; i < index; i++) { // While i is less than the received index
                previous = current; // The previous node will be the current node
                current = current.next; // The current node will be the next node
            }
            newNode.next = current; // The new node will be the next node
            newNode.prev = previous; // The new node will be the previous node
            current.prev = newNode; // The previous node of the current node will be the new node
            previous.next = newNode; // The next node of the previous node will be the new node
        }
        this.size++;
    }

    removeFromHead() {
        if (!this.head) {
            return null, "There is no head";
        }
        const valueToReturn = this.head.data; // Save the value of the head
        if (this.head === this.tail) { // If the head is equal to the tail
            this.head = null; // The head will be null
            this.tail = null; // The tail will be null
        } else {
            this.head = this.head.next; // The head will be the next node
            this.head.prev = null; // The previous node of the head will be null
        }
        this.size--;
        return valueToReturn;
    }

    removeFromTail() {
        if (!this.tail) {
            return null, "There is no tail";
        }
        const valueToReturn = this.tail.data;
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
        }
        this.size--;
        return valueToReturn;
    }

    removeData(data) {
        let current = this.head;
        let previous = null;

        while (current !== null) { // While the current node is not null
            if (current.data === data) { // If the current node is equal to the received value
                if (!previous) { // Check if the previous value is null or does not exist
                    // If the previous value is null, it means that the current node is the head
                    return this.removeFromHead();
                } else if (!current.next) { // If there is a value after the current node
                    // We found our value in the tail
                    return this.removeFromTail();
                } else { // It means that the current node is in the middle of the list
                    previous.next = current.next; // The next node of the previous node will be the next node of the current node
                    current.next.prev = previous; // The previous node of the next node of the current node will be the previous node
                }
                this.size--;
                return current.data;
            }
            previous = current;
            current = current.next;
        }
        return null;
    }

    getSize() {
        return this.size;
    }
    isEmpty() {
        return this.size === 0;
    }

    print() {
        let current = this.head;
        let result = '';
        while (current) {
            result += current.data + ' <-> ';
            current = current.next;
        }
        return result += 'X';
    }

    reversePrint() {
        let current = this.tail;
        let result = '';
        while (current) { // While current is not null
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
list.insertAt(7, 2); // Insert the value 7 at position 2
list.removeFromHead(); // Remove the value from the head
list.removeFromTail(); // Remove the value from the tail
list.removeData(2); // Remove the value
console.log(list.print());
console.log(list);
console.log("The size of the list is: " + list.getSize());
