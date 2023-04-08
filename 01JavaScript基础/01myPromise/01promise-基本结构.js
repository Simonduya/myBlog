// promise大致结构
const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECtED = 'rejected';

class myPromise {
    constructor(exector) {
        this.status = PENDING;
        this.value = undefined;
        this.reason = undefined;
        const resolve = (value) => {
            if(this.status === PENDING) {
                this.status = FULFILLED;
                this.value = value;
            }
        }
        const reject = (reason) => {
            if(this.status === PENDING) {
                this.status = REJECtED;
                this.reason = reason;
            }
        }
        exector(resolve, reject);
    }
}

let promise1 = new myPromise((resolve, reject) => {
    console.log('立即执行');
    resolve(1);
    reject(1);
})

let p1 = new Promise((res, rej) => {
    res(2);
    rej(3);
    console.log('依然执行');
});

console.log(p1);
console.log(promise1);