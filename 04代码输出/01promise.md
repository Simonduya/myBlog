## promise
https://juejin.cn/post/6844904077537574919

### 函数中的promise
```JavaScript
const fn = () => (new Promise((resolve, reject) => {
  console.log(1);
  resolve('success')
}))
fn().then(res => {
  console.log(res)
})
console.log('start')

/* 
1
'start'
'success'
*/
```

```JavaScript
const fn = () =>
  new Promise((resolve, reject) => {
    console.log(1);
    resolve("success");
  });
console.log("start");
fn().then(res => {
  console.log(res);
});
/* 
"start"
1
"success"
*/
```
注意⚠️：之前我们很容易就以为看到new Promise()就执行它的第一个参数函数了，其实这是不对的，就像这两道题中，我们得注意它是不是被包裹在函数当中，如果是的话，只有在函数调用的时候才会执行。

tip: 函数体中的Promise的exector要在函数被调用时才会立即执行

### promise + setTimeout
```JavaScript
const promise = new Promise((resolve, reject) => {
  console.log(1);
  setTimeout(() => {
    console.log("timerStart");
    resolve("success");
    console.log("timerEnd");
  }, 0);
  console.log(2);
});
promise.then((res) => {
  console.log(res);
});
console.log(4);
/* 
1
2
4
"timerStart"
"timerEnd"
"success"
*/
```
* 从上至下，先遇到new Promise，执行该构造函数中的代码1
* 然后碰到了定时器，将这个定时器中的函数放到下一个宏任务的延迟队列中等待执行
* 执行同步代码2
* 跳出promise函数，遇到promise.then，但其状态还是为pending，这里理解为先不执行
* 执行同步代码4
* 一轮循环过后，进入第二次宏任务，发现延迟队列中有setTimeout定时器，执行它
* 首先执行timerStart，然后遇到了resolve，将promise的状态改为resolved且保存结果并将之前的promise.then推入微任务队列
* 继续执行同步代码timerEnd
* 宏任务全部执行完毕，查找微任务队列，发现promise.then这个微任务，执行它。

tip: 遇到resolve才会把.then加入微任务队列中

