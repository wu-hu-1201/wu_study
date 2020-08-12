//index.js
const db = wx.cloud.database()
const projects = db.collection('projects')
const app = getApp()
// 数据库

Page({
  data: {
    title: '',
    images: []
  },
  changeTitle(event) {
    console.log(event.detail);
    this.setData({
      title: event.detail
    })
  },
  upload() {
    // 回调
    wx.chooseImage({
      count: 9,
      sizeType: ['original', 'compressed'],  //原图  压缩图
      sourceType: ['album', 'camera'],  //选择相册还是相机拍照上传
      success: (res) => {
        //   1.本地地址
        //   2.云端
        //   3.this.data.images[]
        const images = [];
        let idx = 0;
        const tempFilePaths = res.tempFilePaths;  //本地（手机）图片
        for (let filePath of tempFilePaths) {
          let tempFileName = (+ new Date() + Math.floor(Math.random() * 1000)).toString + '.png'
          wx.cloud.uploadFile({
            cloudPath: tempFileName,
            filePath: filePath,
            fail: error => {
              idx++;
            },
            success: res => {
              idx++;
              images.push(res.fileID)
              if (idx == tempFilePaths.length) {
                console.log('图片上传完毕')
                this.setData({
                  images: images
                })
              }
            }
          })
        }
      }
    })
  },
  createProject() {
    // promise  异步  存数据，存文件
    // success  回调函数  then  promise 两种都可以
    projects.add({
      data: {
        title: this.data.title,
        images: this.data.images
      }
    })
    .then(res => {
      wx.showToast({
        title:'发布项目成功',
        icon: 'success'
      })
    })
    .catch(err => {
      wx.showToast({
        title: '发布项目失败',
        icon: 'error'
      })
    })
  }
})