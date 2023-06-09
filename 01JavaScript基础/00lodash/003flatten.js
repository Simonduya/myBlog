let arr = [1, [2, 3], [4, [5]]];

function flat1(arr) {
  let flatArr = [];
  arr.forEach(item => {
    if(Array.isArray(item)) {
      flatArr = flatArr.concat(flat1(item))
    } else {
      flatArr.push(item)
    }
  })
  return flatArr;
}

console.log(flat1(arr));

function flat2(arr) {
  return arr.reduce(
    (pre, cur) =>
      Array.isArray(cur) ? [...pre, ...flat2(cur)] : [...pre, cur],
    []
  );
}
console.log(flat2(arr));

function flat3(arr) {
  while(arr.some(item => Array.isArray(item))) {
    arr = [].concat(...arr);
  }
  return arr;
}
console.log(flat3(arr));
