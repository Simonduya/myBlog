function isObj(target) {
    const type = typeof target;
    return (target !== null) && (type === 'object' || type === 'function');
}

function deepClone(target) {
    if(!isObj(target)) {
        return target;
    }
    const obj = {};
    for(const key in target) {
        obj[key] = deepClone(target[key]);
    }
    return obj;
}

let obj = {
    name:'obj',
    age:18,
    obj2: {
        name:'obj2',
        age:20
    }
}

let clone = deepClone(obj);
obj.name = 'obj1';
console.log(clone.name);
obj.obj2.name = 'obj22'
console.log(clone.obj2.name)