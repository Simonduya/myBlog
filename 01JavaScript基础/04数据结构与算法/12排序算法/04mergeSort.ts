import { testSort } from "hy-algokit";

function mergeSort(arr: number[]): number[] {
  if (arr.length <= 1) {
    return arr;
  }
  const mid = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, mid);
  const rightArr = arr.slice(mid);

  const newLeftArr = mergeSort(leftArr);
  const newRightArr = mergeSort(rightArr);
  
  let i = 0;
  let j = 0;
  const resArr: number[] = [];
  while (i < newLeftArr.length && j < newRightArr.length) {
    if (newLeftArr[i] < newRightArr[j]) {
      resArr.push(newLeftArr[i]);
      i++;
    } else {
      resArr.push(newRightArr[j]);
      j++;
    }
  }
  if (i < newLeftArr.length) {
    resArr.push(...newLeftArr.slice(i));
  }
  if (j < newRightArr.length) {
    resArr.push(...newRightArr.slice(j));
  }
  console.log(resArr);
  return resArr;
}

testSort(mergeSort)