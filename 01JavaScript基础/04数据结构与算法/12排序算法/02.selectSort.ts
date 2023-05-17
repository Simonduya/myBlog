import { swap, testSort } from "./utils";

function selectSort(arr: number[]) {

    let len = arr.length;
    for (let i = 0; i < len; i++) {
        let minIndex = i;
        for (let j = i + 1; j < len; j++) {
            if (arr[minIndex] > arr[j]) {
                minIndex = j;
            }
        }
        swap(arr, i, minIndex);
    }
    return arr;
}

testSort(selectSort)
