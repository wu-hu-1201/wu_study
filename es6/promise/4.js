function a() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('a')
            resolve('aa')
        }, 1500)
    })
    
}
function b() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('b')
            resolve('bb')
        }, 1500)
    })
}

function c() {
    setTimeout(() => {
        console.log('c')
    }, 500)
}

function d() {
    setTimeout(() => {
        console.log('d')
    }, 600)
}

// class Promise {
//     constructor() {
//         status: 'pending'
//     }
//     resolve() {
//         this.status = 'resolved'
//     }
//     reject() {
//         this.status = 'reject'
//     }
//     then() {
//         if (this.status = 'resolved') {
//             // 执行
//         }
//     }
//     catch() {
//         if (this.status = 'reject') {
//             // 执行
//         }
//     }
//     finally() {
//         // 何种情况下都能执行
//     }
// }
// Promise pending(进行中) resolved(已成功) reject(已失败)
// finally  不管promise最后是个什么状态，都能走进finally里面
a().then(b).catch(c).finally(d)


function e() {
    
            console.log('e')
      
    }
// all 
// Promise.all([a(), b()]).then(e)  // a 和 b 都执行完后再执行e

// race
// Promise.race([a(), b()]).then(e)  // a和b只要有一个先执行e就会执行 然后再执行剩下的那个
