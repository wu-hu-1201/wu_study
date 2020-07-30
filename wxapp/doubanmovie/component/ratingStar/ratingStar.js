// component/ratingStar/ratingStar.js
const STAR_ON = "/assets/imgs/rating_star_small_on.png";
const STAR_OFF = "/assets/imgs/rating_star_small_off.png";
const STAR_HALF = "/assets/imgs/rating_star_small_half.png";
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    score: {
      type: Number,
      // value: 0,
      observer: function(newVal, oldVal, path) {
        let stars = [STAR_OFF, STAR_OFF, STAR_OFF, STAR_OFF, STAR_OFF]
        if(newVal > 0) {
          newVal =newVal / 10
          let floor = Math.floor(newVal)
          if(floor != newVal) {  //说明有小数
            stars[floor] = STAR_HALF
          }
          for(let i = 0; i < floor; i++) {
            stars[i] = STAR_ON
          }
        }
        this.setData({
          stars: stars
        })
      }
    },
    iconSize: {
      type:String,
      value: '26rpx'
    }
  },
  

  /**
   * 组件的初始数据
   */
  data: {
    // num: 0,
    // halfstar: 0,
    // blankstar: 5
    stars: [STAR_OFF, STAR_OFF, STAR_OFF, STAR_OFF, STAR_OFF]
  },


  // lifetimes: {
  //   attached: function () {
  //     if (this.data.score <= 0) {
  //       return
  //     } else if (this.data.score >= 10) {
  //       this.setData({
  //         num: 5,
  //         blankstar: 0
  //       })
  //       return
  //     }

  //     console.log(this.data.score)
  //     let num = parseInt(this.data.score / 2)

  //     let decimal = (this.data.score) - num
  //     if(decimal > 0) {
  //       this.setData({
  //         halfstar: 1
  //       })
  //     }

  //     let blankstar = 5 - num -(this.data.halfstar)
  //     this.setData({
  //       num,
  //       blankstar
  //     })
  //   }
  // },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
