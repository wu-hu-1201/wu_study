<template>
  <div class="detail">
      <h1>Computed 计算属性</h1>
      <div class="price">
          {{totalPrice}}元
      </div>
      <div class="news">
          <ul>
            <li v-for="(item, index) in reverseNews" :key="index">
                {{item.title}}---{{item.date}}
            </li>
          </ul>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            price: 100,
            num: 4,
            news: [
                {title:'教育部回应部分高校一刀切封闭管理', date: '2020/08/24'},
                {title:'儿子考上北大 他亲手投递录取通知书!', date: '2020/08/25'},
                {title:'高校食堂光盘可换免费水果', date: '2020/08/26'},
                {title:'袁隆平爷爷90岁生日前去理发', date: '2020/08/27'}
            ]
        }
    },
    computed: {
        totalPrice: function() {
            return this.price * this.num
        },
        reverseNews: function() {
            let news = this.news
            return news.reverse()
        }
    }

}
</script>

<style>

</style>