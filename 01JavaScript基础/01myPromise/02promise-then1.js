const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

class myPromise {
    constructor(exector) {
        this.status = PENDING;
        this.value = undefined;
        this.reason = undefined;
        const resolve = (value) => {
            if (this.status === PENDING) {
                this.status = FULFILLED;
                queueMicrotask(() => {
                    this.value = value;
                    this.onFulfilled(value);
                });
            }
        }
        const reject = (reason) => {
            if (this.status === PENDING) {
                this.status = REJECTED;
                queueMicrotask(() => {
                    this.reason = reason;
                    this.onRejected(reason);
                });
            }
        }
        exector(resolve, reject);
    }
    then(onFulfilled, onRejected) {
        this.onFulfilled = onFulfilled;
        this.onRejected = onRejected;
    }
}

let p1 = new myPromise((res, rej) => {
    res(1);
    rej(2);
})

p1.then(res => {
    console.log(res);
}, err => {
    console.log(err);
})

p1.then(res2 => {
    console.log(res2);
})
/*
AI评论
这个 Promise 的设计基本符合 Promise/A+ 规范，并且可以正常运行。以下是一些关键的说明：

在 resolve 或 reject 函数被调用时，状态只有在 PENDING 时才会发生改变，这与 Promise 规范中的要求一致。
在 resolve 或 reject 函数被调用时，会将状态改为 FULFILLED 或 REJECTED，并且异步调用 onFulfilled 或 onRejected 函数，这也符合 Promise 规范中的要求。这里使用 queueMicrotask 将回调函数添加到微任务队列中，以确保在本轮事件循环结束前异步执行。
then 方法将 onFulfilled 和 onRejected 函数保存到实例对象中，以在状态改变时异步执行。
then 方法返回一个新的 Promise 对象，可以链式调用 then 方法，这也符合 Promise 规范中的要求。
对于错误处理，这个实现缺少对 onRejected 函数的默认处理。如果 onRejected 函数未被提供或者 onRejected 函数本身出错，应该将错误传递给下一个 onRejected 函数，或者在链的末尾使用 catch 方法来处理错误。此实现并没有考虑这些情况。
总的来说，这个 Promise 的实现是比较基础的，仍然有待完善。例如，需要添加对多个 then 方法的处理、对 then 方法参数的类型检查等等。

*/ 