async function async1() {
    console.log("async1 start")
    await async2()  // 相当于 new Promise(function(){async2()}).then(console.log())
    console.log("async1 end")
}

async function async2() {
    console.log("async2 start")
}
console.log("js start")

// 下一个宏任务
setTimeout(function () {
    console.log("setTimeout")
}, 0)
async1()
new Promise(function (resolve) {
    console.log("promise1")
    resolve()
}).then(function () {
    console.log("promise2")
})
console.log("js end")

// 宏任务
// js start
// async1 start
// async2 start 
// promise1
// js end
// 清空微任务
// async1 end
// promise2
// setTimeout

console.log('start')
setTimeout(function () {
    console.log('children2')
    Promise.resolve().then(() => {
        console.log('children3')
    })
}, 0)

new Promise(function (resolve, reject) {
    console.log('children4');
    setTimeout(function () {
        console.log('children5')
        resolve('children6')
    }, 0)
}).then((res) => {
    console.log('children7')
    setTimeout(function () {
        console.log(res)
    })
})

// start
// children4  第一轮宏任务结束，没有发现微任务队列
// children2 
// 第二轮宏任务结束，尝试清空微任务队列
// children3 
// children5 第三轮宏任务
// children 7 清空微任务队列
// children6 



const p = function () {
    return new Promise((resolve, reject) => {
        const p1 = new Promise((resolve, reject) => {
            setTimeout(function () {
                resolve(1)
            }, 0)
            resolve(2)
        })
        p1.then((res) => {
            console.log(res)
        })
        console.log(3)
        resolve(4)
    })
}

p().then((res) => {
    console.log(res)
})
console.log('end')

// 3
// end
// 2
// 4
