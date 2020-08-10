//index.js
const app = getApp()
const db = wx.cloud.database();
const productsCollection = db.collection('products');

Page({
  uploadAvatar() {
    //  上传图片  选择上传图片类型
    //  图片
    //  上传到云服务器
    //  硬件
    wx.chooseImage({
      count: 9,
      sizeType: ['original', 'compressed'],  //原图  压缩图
      sourceType: ['album', 'camera'],  //选择相册还是相机拍照上传
      success: res => {
        console.log(res.tempFilePaths);
        for (let filePath of res.tempFilePaths) {
          let currentFileName = Math.floor(Math.random()*1000000).toString() + '.png';
          wx.cloud.uploadFile({
            cloudPath: currentFileName,
            filePath,
            success: res => {
              console.log(res)
            }
          })
        }
      }
    })
  },
  data: {
    products: []
  },
  gotoDetail(event) {
    productsCollection.doc(
      event.currentTarget.dataset.id.get().then(res => {
        console.log(res);
        
      })

    )
  },
  onLoad() {
    productsCollection
    .get()
    .then(res => {
      console.log(res);
      this.setData({
        products: res.data
      })
    })
  }

  
})
