import ArrayStack from "./01stack(Array)";

function decToBinary(n: number): void {
    const stack = new ArrayStack<number>()
    while (n > 0) {
        stack.push(n % 2);
        n = Math.floor(n / 2);
    }
    while (stack.size()) {
        console.log(stack.pop());
    }
}

decToBinary(35);
console.log('--------');
decToBinary(100);
export {}