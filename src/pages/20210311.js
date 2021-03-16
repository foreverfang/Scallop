// // 深拷贝实现
// function deepClone(obj) {
//     // 过滤特殊情况
//     if (typeof obj === null) return null;
//     if (obj instanceof Function) {
//         return new Function(obj);
//     }
//     if (typeof obj !== 'object') return obj;
//     if (obj instanceof RegExp) {
//         return new RegExp(obj);
//     }
//     if (obj instanceof Date) {
//         return new Date(obj);
//     }

//     // 不直接创建空对象：克隆的结果和之前保持相同的所属类
//     const newObj = new obj.constructor(obj)
//     for (let key in obj) {
//         if (obj.hasOwnProperty(key)) {
//             newObj[key] = deepClone(obj[key])
//         }
//     }
//     return newObj;
// }

function Foo() {
    getName = function () {
        console.log(1)
    };
    return this;
}
Foo.getName = function () {
    console.log(2)
}
Foo.prototype.getName = function () {
    console.log(3)
}
var getName = function () {
    console.log(4)
}

function getName() {
    console.log(5)
}
Foo.getName();
getName();
Foo().getName();
getName();
new Foo.getName();
new Foo().getName();
new new Foo().getName();