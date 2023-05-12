import IStack from "./IStack";

class ArrayStack<T = any> implements IStack<T>{
  private data: T[] = [];

  push(item: T): void {
    this.data.push(item);
  }

  pop(): T | undefined {
    return this.data.pop();
  }

  size(): number {
    return this.data.length;
  }

  peek(): T | undefined {
    return this.data[this.data.length - 1];
  }

  isEmpty(): boolean {
    return this.data.length === 0;
  }
}

const stack1 = new ArrayStack<number>();
stack1.push(1);
stack1.push(2);
stack1.push(2);
console.log(stack1.peek());
console.log(stack1.pop());

const stack2 = new ArrayStack<string>();
stack2.push("aaa");
stack2.push("bbb");
stack2.push("ccc");
console.log(stack2.pop()?.split(""));
console.log('--------');

export default ArrayStack