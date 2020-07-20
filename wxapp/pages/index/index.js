//index.js
//获取应用实例
const app = getApp()
const cars =[]
Page({
  data: {
    articleList: [],
    isHidden: false,
    markers: [{
      iconPath: "/resources/car.png",
      id: 0,
      latitude: 28.719909,
      longitude: 115.834753,
      width: 50,
      height: 50
    }],
    markers: [{
      iconPath: "/resources/car.png",
      id: 1,
      latitude: 28.713666,
      longitude: 115.832500,
      width: 50,
      height: 50
    }],
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    setTimeout(() => {
      this.setData({
        articleList: [{
          date: '6月27号',
          articles:[{
            id: '0',
            title: 'aaa',
            pic: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3622830924,2930042384&fm=26&gp=0.jpg',
          }, {
            id: '1',
            title: 'bbb',
            pic: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3740637908,1127061948&fm=26&gp=0.jpg',
          }]
        }, {
          date: '6月26日',
          articles:[{
            id: 3,
            title: 'ccc',
            pic: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2834999481,1380824893&fm=26&gp=0.jpg',
  
          }, {
            id: 4,
            title: 'ddd',
            pic: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2834999481,1380824893&fm=26&gp=0.jpg',
          }]
        }],
        isHidden: true
      })
    },2000)
  },



  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
