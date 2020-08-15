const trendings = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([{
            repo: '皮项目'
        }])
    },2000)
    // wx.request()
})

const getRepo = () => new Promise((resolve, reject) => {
    const url = ''
    wx.request({
        url,
        data: {
            language: 'all'
        },
        success(res) {
            console.log(res)
            resolve(res);
        },
    
    })
})

module.exports = {
    trendings,
    getRepo
}