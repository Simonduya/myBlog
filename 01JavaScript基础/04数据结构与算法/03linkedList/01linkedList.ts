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
  private getNode(position: number): Node<T> | null {
    let current = this.head;
    while (position-- && current) {
      current = current?.next;
    }
    return current ?? null;
  }
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
    while (current) {
      values.push(current.value);
      current = current.next;
    }
    values.join("->");
    console.log(values);
  }
  insert(value: T, position: number) {
    if (position < 0 || position > this.size) return false;
    const newNode = new Node<T>(value);
    if (position === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      // let previous: Node<T> | null = null;
      // let current = this.head;
      // while(position-- && current) {
      //     previous = current;
      //     current = current.next;
      // }
      // newNode.next = current;
      // previous!.next = newNode;
      let previous = this.getNode(position - 1);
      newNode.next = previous!.next;
      previous!.next = newNode;
    }
    this.size++;
    return true;
  }
  removeAt(position: number): T | null {
    if (position < 0 || position >= this.size) return null;
    let current = this.head;
    if (position === 0) {
      this.head = current?.next ?? null;
    } else {
      // let previous: Node<T> | null;
      // while(position-- && current) {
      //     previous = current;
      //     current = current!.next;
      // }
      // previous!.next = current?.next ?? null;
      let previous = this.getNode(position - 1);
      previous!.next = previous?.next?.next ?? null;
    }

    this.size--;
    return current?.value ?? null;
  }
  remove(value: T): T | null {
    const index = this.indexOf(value);
    return this.removeAt(index);
  }
  get(position: number): T | null {
    if (position < 0 || position >= this.size) return null;
    return this.getNode(position)?.value ?? null;
  }
  update(position: number, el: T): boolean {
    if (position < 0 || position >= this.size) return false;
    let current = this.getNode(position);
    current!.value = el;
    return true;
  }
  indexOf(value: T): number {
    let current = this.head;
    let index = 0;
    while (current) {
      if (current.value === value) {
        return index;
      }
      current = current.next;
      index++;
    }
    return -1;
  }
}

export {};

const head = new LinkedList<string>();
head.append("a");
head.append("b");
head.append("c");
head.traverse();
head.insert("aa", 1);
head.insert("bb", 3);
head.traverse();

head.removeAt(0);
head.traverse();
head.removeAt(2);
head.traverse();
console.log(head.get(0));
console.log(head.get(3));
console.log(head.get(2));
console.log(head.update(0, 'aaa'));
head.traverse();
console.log(head.indexOf('aaa')); 
console.log(head.indexOf('c')); 
head.remove('aaa');
head.traverse()