// js 是单线程的
function a() {
    console.log('wn')
}

function b() {
    setTimeout(() => {
        console.log('yl')
    },1000)
    
}

function c() {
    console.log('zc')
}

b()
a()
c()