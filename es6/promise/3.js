let xq = new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log('yl相亲了！')
        resolve('相亲成功！嘿嘿')
    }, 2000)
})
xq.then((res) => {
    console.log(res)
    if (res == '相亲成功！嘿嘿') {
        marry()
        return marry()
    }
})
.then((res) => {
    console.log(res)
    return baby1()
})
.catch((err) => {
    console.log(err)
})

// function xq() {
//     setTimeout(() => {
//         console.log('yl相亲了！')
//     }, 2000)
// }

function marry() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('yl结婚了！')
            resolve('yl结婚顺利')
        }, 1000)
    })
    
}

function baby1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('小yl1出生')
            resolve('baby1')
        }, 500)
    })
    
}
function baby2() {
    setTimeout(() => {
        console.log('小yl2出生')
    }, 400)
}
// xq()
// marry()
// baby1()

