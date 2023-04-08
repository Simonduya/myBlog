const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

function foo(exec, value, resolve, reject) {
    try {
        resolve(exec(value));
    } catch(err) {
        reject(err);
    }
}

class myPromise {
    constructor(exector) {
        this.status = PENDING;
        this.value = undefined;
        this.reason = undefined;
        this.onFulfillFn = [];
        this.onRejectFn = [];
        const resolve = (value) => {
            if(this.status === PENDING) {
                queueMicrotask(() => {
                    if(this.status !== PENDING) return;
                    this.value = value;
                    this.status = FULFILLED;
                    this.onFulfillFn.forEach(fn => {
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
        try {
            exector(resolve, reject);
        } catch(err) {
            reject(err);
        }  
    }
    then(onFulfill, onReject) {
        return new myPromise((resolve, reject) => {
            if(this.status === PENDING) {
                this.onFulfillFn.push(() => {
                    foo(onFulfill, this.value, resolve, reject);
                })
                this.onRejectFn.push(() => {
                    foo(onReject, this.reason, resolve, reject);
                })
            }
            if(this.status === FULFILLED && onFulfill) {
                foo(onFulfill, this.value, resolve, reject);
            }
            if(this.status === REJECTED && onReject) {
                foo(onReject, this.reason, resolve, reject);
            }
        })
    }
}