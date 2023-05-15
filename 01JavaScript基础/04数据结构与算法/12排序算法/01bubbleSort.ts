import { swap } from "./utils";

function bubbleSort(arr: number[]): number[] {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        // [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

const arr = [1, 4, 3, 7, 100, 0, 11];
console.log(bubbleSort(arr));
