<template>
    <div class="rank-list">
      <ul class="panel-img-list">
        <li v-for="item in list" :key="item.list" @click="show(item)">
          <div class="panel-img-left">
            <img :src="item.imgurl" alt="">
          </div>
          <div class="panel-img-content">
            <p>
              {{item.rankname}}
            </p>
          </div>
          <div class="panel-img-right">
            <i class="panel-img-arrow"></i>
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'RankList',
  props: {
    list: Array
  },
  data () {
    return {
      onlist: []
    }
  },
  methods: {
    show (data) {
      console.log(data.rankid) // 获取到列表的id
      localStorage.setItem('kgid', data.rankid) // 本地储存起来这个数据
      this.$router.push('/RankingSongList')
    }
  }
}
</script>

<style lang="stylus" scoped>
 .rank-list
   width 100%
   padding-top: 6.6rem
 .panel-img-list
    padding 0
 .panel-img-list li
   display: block;
   position: relative;
   margin-left: .7143rem;
   padding: .7143rem 2.14286rem .7143rem 6.4286rem;
   border-bottom: 1px solid #e5e5e5;
 .panel-img-left
   position: absolute
   top: .7143rem
   left: 0
   width: 5.3751rem
   height: 5.3751rem
 .panel-img-left img
   width 100%
 .panel-img-content
    min-height: 5.3751rem
    line-height: 3rem
    display: block
    font-size: 1.0714rem
    color: #333
 .panel-img-content p
   float: left
 .panel-img-right
   position: absolute;
   top: 0;
   right: 0;
   width: 2.14286rem;
   height: 100%;
   text-align: center;
   display: block
  .panel-img-arrow
    width: .57143rem
    height: 1rem
    margin-top: -.5rem
    position: absolute
    top: 50%
    right: .7143rem
    display: block
    background: url(https://m3ws.kugou.com/v3/static/images/index/arrow_icon.png) no-repeat
    background-size: 100%
</style>
