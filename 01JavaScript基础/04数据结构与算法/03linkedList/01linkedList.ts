class Node<T> {
  value: T;
  next: Node<T> | null = null;
  constructor(value: T) {
    this.value = value;
  }
}

class LinkedList<T> {
  private head: Node<T> | null = null;
  private size: number = 0;
  get length() {
    return this.size;
  }
  append(value: T) {
    if (!this.head) {
        this.head = new Node<T>(value); 
    } else {
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = new Node<T>(value);
    }
    this.size++;
  }
  traverse() {
    const values: T[] = [];
    let current = this.head;
    while(current) {
        values.push(current.value);
        current = current.next;
    }
    values.join('->');
    console.log(values);
  }
  insert(value: T, position: number) {
    if (position < 0 || position > this.size) return false;
    const newNode = new Node<T>(value);
    if (position === 0) {
        newNode.next = this.head;
        this.head = newNode;
    } else {
        let current = this.head;
        let index = 0;
        let previous: Node<T> | null = null;
        while(index++ < position && current) {
            previous = current;
            current = current.next;
        }
        newNode.next = current;
        previous!.next = newNode;
    }
    this.size++;
    return true;
  }
}

export {};

const head = new LinkedList<string>();
head.append('a');
head.append('b');
head.append('c');
head.traverse()
head.insert('aa', 1);
head.insert('bb', 3);
head.traverse()
