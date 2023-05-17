export function swap(arr: number[], i: number, j: number) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

type SortAlgoFn = (arr: number[]) => number[];
export function testSort(sortFn: SortAlgoFn) {
    const nums = Array.from({length: 10}, () => {
        return Math.floor(Math.random() * 200)
    })
    console.log('排序前：' + nums);
    console.log('排序后: ' + sortFn(nums));
}