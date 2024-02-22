class node {
    constructor(data) {
        this.data = data
        this.next = data
    }

}
class linkdList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(data) {
        if (!data) return "No hay dato";
        const newNode = new Node(data)
        if (!this.head) {
            this.head = newNode;
        } else {
            this.tail.next = new Node;
            this.tail = new Node;
        }
    }

    prepend(data) {
        if (!data) return "No hay dato";
        const newNode = new Node(data);

        if (!this.head) {
            this.head = new Node;
            this.tail = new Node;
        }
    }

    traverse() {
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }

    deleteNode(element) {
        if (!element || !this.head) {
            return "No hay parametro o lista";
        }
        if (this.head.data === element) {
            this.head = this.head.next;
            if (this.head === null) {
                this.tail = null;
            }
            return "El elemento indicado era la cabeza";
        }
        let current = this.head;
        while (current.next) {
            if (current.next.data === element) {
                if (current.next === this.tail) {
                    this.tail = current;
                    return "El elemento ingresado se ha borrado y era la cola";
                }
                current.next = current.next.next;
                return "Elemento borrado";
            }
            current = current.next;
        }
        return "Elemento no encontrado";
    }

    deleteHead() {
        if (!this.head) {
            return "No hay"
        }
        this.head = this.head.next

        if (this.head === null) {
            this.tail = null
        }

    }

    deleteTail() {
        if (!this.head) return "No hay lista"
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        }
        let current = this.head;
        while (current.next) {
            if (current.next === this.tail) {
                this.tail = current
                return "La cola ha sido reasignada"
            }
            current = current.next
        }



    }

}
