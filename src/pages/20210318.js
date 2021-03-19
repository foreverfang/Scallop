// 双向数据绑定实现
// 1.Object.defineProperty()实现
// let obj = {
//     name: ''
// }

// let newObj = JSON.parse(JSON.stringify(obj)) // 便于观测
// Object.defineProperty(obj, 'name', {
//     get() {
//         return newObj.name
//     },
//     set(value) {
//         if (value === newObj.name) return
//         newObj.name = value;
//         observer() //观测
//     }
// })

// const curId = document.getElementById("curId") // model => view
// const input = document.getElementById("input") // view => model

// function observer() {
//     curId.innerHTML = obj.name;
//     input.value = obj.name;
// }

// // 事件触发
// input.oninput = function (el) {
//     obj.name = el.target.value;
// }

// 2.proxy 数据劫持实现
// let obj = {}
// obj = new Proxy(obj, {
//     get(target, prop) {
//         return target[prop]
//     },
//     set(target, prop, value) {
//         target[prop] = value;
//         observer()
//     }
// })

// const curId = document.getElementById("curId") // model => view
// const input = document.getElementById("input") // view => model

// function observer() {
//     curId.innerHTML = obj.name;
//     input.value = obj.name;
// }

// // 事件触发
// input.oninput = function (el) {
//     obj.name = el.target.value;
// }

// 模拟一个$watch
// const data = {
//     a: {
//         b: 1
//     }
// }
const data = {
    name: '霍春阳',
    age: 24
}
function walk(data) {
    for (let key in data) {
        const dep = [] // 存放需要检测的依赖
        let val = data[key]
        // 如果val是对象，递归调用walk函数将其转为访问器属性
        const nativeString = Object.prototype.toString.call(val)
        if (nativeString === '[object object]') {
            walk(val)
        }
        Object.defineProperty(data, key, {
            set(newVal) {
                if (newVal === val) return
                val = newVal
                dep.forEach(fn => fn())
            },
            get() {
                dep.push(target)
                return val
            }
        })
    }
}
walk(data)

let target = null
function $watch(exp, fn) {
    target = fn
    let pathArr, obj = data;
    // 如果exp是函数，直接执行该函数
    if (typeof exp === 'function') {
        exp()
        return
    }
    // 检查exp是否包含.
    if (/\./.test(exp)) {
        // 将字符串转为数组，'a.b'=>['a', 'b']
        pathArr = exp.split('.')
        // 使用循环读取到 data.a.b 访问需要观测的字段
        pathArr.forEach(item => {
            obj = obj[item]
        })
        return
    }
    // 读取字段，触发get函数，访问需要观测的字段
    data[exp]
}

function render() {
    return document.write(`姓名：${data.name}; 年龄：${data.age}`)
}

$watch('name', function (val) {
    console.log('第一个watch：', val)
})

$watch(render, render)

