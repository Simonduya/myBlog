function isObject<T> (target: T): boolean {
    const type = typeof target;
    return target !== null && (type === 'object' || type === 'function');
}
console.log(isObject(null));
console.log(isObject({}));
console.log(isObject(new Array('a')));
console.log(isObject(setTimeout));
// typeof不能区分数组、null和对象之间的差别。例如，typeof null返回'object'而不是'null'。同时，对于NaN返回值为'number'，无法区分出NaN和其它数字。
