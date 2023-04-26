// 简单实现
function slice<T> (arr:T[], start?: number, end?: number):T[] {
    const sliceArr: T[] = [];
    if(!start) {
        start = 0;
    } else if(start < 0) {
        start = arr.length + start;
    }

    if(!end || end > arr.length) {
        end = arr.length;
    } else if(end < 0) {
        end = end + arr.length;
    }
    for(let i = start; i < end; i++) {
        sliceArr.push(arr[i]);
    }
    return sliceArr;
}
const arr = [0, 1, 2, 3, 4];
console.log(slice(arr, -10)); // [undefined, undefined, undefined, undefined, undefined, 0, 1, 2, 3, 4] 
console.log(slice(arr, -1));
console.log(slice(arr, 1, 4));

// 正解https://www.lcs.show/blog/sourceCode/lodash/lodash-array-slice
