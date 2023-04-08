let s1 = Symbol('s1');
let s2 = Symbol();
const obj = {
    name:'obj',
    age:18,
    obj2: {
        name:'pbj2',
        age:20
    },
    [s1]:'symbol1',
    s2:s2
}

let clone1 = obj;
console.log(clone1 === obj);
clone1.name = 'clone1'

let clone2 = JSON.parse(JSON.stringify(obj))
console.log(clone2 === obj);
console.log(obj.name);
console.log(clone2.name);

clone2.name = 'clone2';
console.log(obj.name);
console.log(clone2.name);