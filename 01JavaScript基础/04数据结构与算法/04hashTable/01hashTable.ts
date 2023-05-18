class HashTable<T> {
  private storage: [string, T][][] = [];
  // 数组长度
  private length: number = 7;
  // 已存放元素个数
  private count: number = 0;
  // hash函数
  private hashFunc(key: string, max: number) {
    let hashCode = 0;
    const len = key.length;
    for (let i = 0; i < len; i++) {
        // 霍纳法则计算hashCode
        hashCode = 31 * hashCode + key.charCodeAt(i);
    }
    const index = hashCode % max;
    return index;
  }
  put(key: string, value: T) {
    const index = this.hashFunc(key, this.length);
    let bucket = this.storage[index];
    if (!bucket) {
        bucket = [];
        this.storage[index] = bucket;
    }
    let isUpdate = false;
    for (let i = 0; i < bucket.length; i++) {
        let truple = bucket[i];
        let trupleKey = truple[0];
        if (trupleKey === key) {
            truple[1] = value;
            isUpdate = true;
        }
    }
    if (!isUpdate) {
        bucket.push([key, value]);
        this.count++;
    }
  }
}
