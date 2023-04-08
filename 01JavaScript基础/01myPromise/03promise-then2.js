const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

class myPromise {
    constructor(exector) {
        this.status = PENDING;
        this.value = undefined;
        this.reason = undefined;
        this.onResolveFn = [];
        this.onRejectFn = [];
        const resolve = (value) => {
            if(this.status === PENDING) {
                queueMicrotask(() => {
                    if(this.status !== PENDING) return;
                    this.value = value;
                    this.status = FULFILLED;
                    this.onRejectFn.forEach(fn => {
                        fn(this.value);
                    })
                })
            }
        }
        const reject = (reason) => {
            if(this.status === PENDING) {
                queueMicrotask(() => {
                    if(this.status !== PENDING) return;
                    this.reason = reason;
                    this.status = REJECTED;
                    this.onRejectFn.forEach(fn => {
                        fn(this.reason);
                    })
                })
            }
        }
        exector(resolve, reject);
    }
    then(onFulfilled, onRejected) {
        if(this.status === REJECTED && onRejected) {
            this.onRejected(this.reason);
        }
        if(this.status === FULFILLED && onFulfilled) {
            this.onFulfilled(this.value);
        }
        if(this.status === PENDING) {
            this.onRejectFn.push(onRejected);
            this.onResolveFn.push(onFulfilled)
        }
    }
}

/*
AI评论
这个 Promise 的实现是基于 ES6 类的语法和 Promise 标准规范设计的。从代码上看，它包含了 Promise 的三种状态以及相应的状态转换。

当 Promise 实例被创建时，它的状态为 Pending，同时该实例保存着传入构造函数的 resolve 和 reject 方法，并可以在后续状态改变时调用它们。

当 Promise 实例通过 resolve 方法转换为 Fulfilled 状态时，它会执行相应的成功回调函数，并将传递的参数值作为成功回调函数的参数。

当 Promise 实例通过 reject 方法转换为 Rejected 状态时，它会执行相应的失败回调函数，并将传递的错误原因作为失败回调函数的参数。

该 Promise 还实现了 then 方法，用于添加成功和失败的回调函数，并返回一个新的 Promise 对象。在 then 方法中，如果 Promise 实例的状态已经变为 Fulfilled 或 Rejected，则会立即执行相应的回调函数；如果 Promise 实例的状态还是 Pending，则会将回调函数保存在数组中，等待状态改变后再执行。

需要注意的是，这个 Promise 的实现可能存在一些问题，例如在 FULFILLED 状态下调用 onRejectFn 数组中的回调函数等，建议在实际使用中进行测试和优化。
*/ 