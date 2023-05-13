import IQueue from "./02IQueue";
class ArrayQueue<T> implements IQueue<T> {
    private data: T[] = [];
    enqueue(el: T): void {
        this.data.push(el)
    }
    dequeue(): T | undefined {
        return this.data.shift();
    }
    peek(): T | undefined {
        return this.data[0];
    }
    size(): number {
        return this.data.length;
    }
    isEmpty(): boolean {
        return this.data.length === 0;
    }
}

const arrQueue = new ArrayQueue<string>();
arrQueue.enqueue('a');
arrQueue.enqueue('b');
arrQueue.enqueue('c');

console.log(arrQueue.isEmpty());
console.log(arrQueue.size());
console.log(arrQueue.peek());
arrQueue.dequeue();
console.log(arrQueue.peek());
console.log('--------')
export default ArrayQueue