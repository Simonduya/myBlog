const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

class myPromise {
    constructor(exector) {
        this.status = PENDING;
        this.value = undefined;
        this.reason = undefined;
        this.onFulfillFns = [];
        this.onRejectFns = [];
        const resolve = (value) => {
            if(this.status === PENDING) {
                queueMicrotask(() => {
                    if(this.status !== PENDING) return;
                    this.status = FULFILLED;
                    this.value = value;
                    this.onFulfillFns.forEach(fn => {
                        fn(this.value);
                    })
                })
            }
        }

        const reject = (reason) => {
            if(this.status === PENDING) {
                queueMicrotask(() => {
                    if(this.status !== PENDING) return;
                    this.status = REJECTED;
                    this.reason = reason;
                    this.onRejectFns.forEach(fn => {
                        fn(this.reason);
                    })
                })
            }
        }

        exector(resolve, reject);
    }
    then(onFulfill, onReject) {
        return new myPromise((res, rej) => {
            if(this.status === FULFILLED && onFulfill) {
                try {
                    let val = onFulfill(this.value);
                    res(val);
                } catch(err) {
                    rej(err);
                }
            }
            if(this.status === REJECTED && onReject) {
                try {
                    let val = onFulfill(this.value);
                    res(val);
                } catch(err) {
                    rej(err);
                }
            }
            if(this.status === PENDING) {
                this.onFulfillFns.push(() => {
                    try {
                        let val = onFulfill(this.value);
                        res(val);
                    } catch(err) {
                        rej(err);
                    }
                })
                this.onRejectFns.push(() => {
                    try {
                        let val = onReject(this.reason);
                        res(val);
                    }  catch(err) {
                        rej(err);
                    }
                })
            }
        })
    }
}