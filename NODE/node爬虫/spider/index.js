const https = require('https')
const cheerio = require('cheerio')
const fs = require('fs')

// 通过https模块的get方法，请求网站链接，在回调函数中获取资源
https.get('https://movie.douban.com/top250', (res) => {
    // console.log(res)
    // 因为获取到的资源是分段返回的，所以需要手动拼接 （html）
    let html = ''
    // res.on 类似于addEventlistener
    res.on('data', (chunk) => {
        html += chunk
    })

    // res 数据加载完成， 去执行xx逻辑
    res.on('end', () => {
        // 操作dom
        const $ = cheerio.load(html)
        // 存放爬取到的数据
        let allFilms = []
        $('li .item').each(function() {
            const title = $('.title', this).text()     // this 代表 'li .item' 的dw结构
            const star = $('.rating_num', this).text()
            const pic = $('.pic img', this).attr()
            allFilms.push({title, star, pic})
            console.log(allFilms)
        })
        fs.writeFile('./films.json',JSON.stringify(allFilms),function(err){
            if(!err) {
                console.log('文件已保存')
            }
        })
    })
})


