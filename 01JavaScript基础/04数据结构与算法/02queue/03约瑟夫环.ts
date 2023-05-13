import ArrayQueue from "./01queue";

function hotPotato(arr: string[], n: number): number {
  if (!arr.length) return -1;
  const arrQueue = new ArrayQueue<string>();
  for (const item of arr) {
    arrQueue.enqueue(item);
  }
  while (arrQueue.size() > 1) {
    for (let i = 1; i < n; i++) {
      const item = arrQueue.dequeue();
      if (item) arrQueue.enqueue(item);
    }
    arrQueue.dequeue();
  }
  const item = arrQueue.dequeue()!;
  return arr.indexOf(item);
}

const arr = ["a", "b", "c", "d"];
console.log(hotPotato(arr, 3));
export {};
