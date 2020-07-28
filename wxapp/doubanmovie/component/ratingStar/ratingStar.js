// component/ratingStar/ratingStar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    score: {
      type: Number,
      value: 0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    num: 0,
    halfstar: 0,
    blankstar: 5
  },


  lifetimes: {
    attached: function () {
      if (this.data.score <= 0) {
        return
      } else if (this.data.score >= 10) {
        this.setData({
          num: 5,
          blankstar: 0
        })
        return
      }

      console.log(this.data.score)
      let num = parseInt(this.data.score / 2)

      let decimal = (this.data.score) - num
      if(decimal > 0) {
        this.setData({
          halfstar: 1
        })
      }

      let blankstar = 5 - num -(this.data.halfstar)
      this.setData({
        num,
        blankstar
      })
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
