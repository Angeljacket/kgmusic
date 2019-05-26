<template>
    <div>
      <div class="top">
      <search-top></search-top>
      </div>
      <div class="padding-top">
      <img src="http://m.kugou.com/v3/static/images/index/goback.png" alt="" class="goback" @click="fn()">
      <P>搜索</P>
      <div class="search-box">
        <div class="search-form-box">
          <!--<form name="searchForm" class="search-form">-->
          <span class="search-icon"></span>
          <input type="text" placeholder="歌手/歌名/拼音" name="keyword" value="" id="keyword" class="search-keyword" v-model="find" @keyup.13="cli()" >
          <input type="submit" value="搜索" class="search-btn search-disabled-btn" id="searchBtn" @click="cli()" >
          <!--</form>-->
        </div>
      </div>
      </div>
      <ul>
        <div class="total" v-if="show">共有{{total}}条结果</div>
        <li v-for="item in list" class="bf" :key="item.list" @click="bt(item)">
          <div class="DD">
            <span class="wz">{{item.filename}}</span>
          </div>
          <div class="left">
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
import axios from 'axios'
import SearchTop from './top'
export default {
  name: 'search',
  inject: ['up'],
  data () {
    return {
      list: [],
      find: '',
      show: false,
      total: ''
    }
  },
  components: {
    SearchTop
  },
  methods: {
    fn () {
      this.$router.go(-1)
      // console.log(this.$store.state.songName.url)
      if (this.$store.state.songName.url) {
      //   // 点击返回上一页的时候，判断是否在播歌曲
        this.up(true)
      //   // true是显示出来的
      } else {
      //   // 否则没有歌曲在播的时候ftplay页面不显示
        this.up(false)
      //   // false不显示
      }
    },
    cli () {
      if (this.find.length) {
        // this.show = false
        axios(`/search/api/v3/search/song?format=json&keyword=${this.find}&page=1&pagesize=30&showtype=1`).then(({data}) => {
          console.log(data)
          console.log(data.data.total)
          this.total = data.data.total
          // console.log(this.total)
          this.list = data.data.info
          console.log(this.list)
          this.show = true
          // this.up(false)
        })
      } else {
        alert('请输入搜索的歌曲')
      }
    },
    bt (data) {
      this.$store.commit('pudateMusicThis', 1)
      this.$store.commit('pudateMusicList', data)
      this.up(true)
    }
  }
}
</script>

<style lang="stylus" scoped>
  ul
    padding  0
  p
    line-height: 3rem
    font-size: 1.2rem
    text-align: center;
    border-bottom: .05rem solid #a9acb1
  ul,li
    width: 100%;
    height: 4.0714rem;
    border-bottom: 1px solid #e5e5e5;
    position: relative;
    display: table;
  .top
     position relative
  .padding-top
    padding-top 3.2rem
  .goback
    color: black;
    width: .85714rem;
    height: 1.42857rem;
    position: absolute;
    left: .6rem;
    top: 4rem;
  .search-box
    margin-top: 1rem;
    width: 90%;
    padding-left: 5%;
    position: relative;
    font-size: 0;
    margin-bottom: 1rem;
    background: #fbfbfb
  .span
    position: relative;
    font-size: 0;
  .search-icon
    width: 1.2143rem;
    height: 1.9285rem;
    display: block;
    position: absolute;
    top: .06rem;
    left: 1.5rem;
    background: url(http://m.kugou.com/v3/static/images/index/search_icon.png) no-repeat;
    background-size: 100%;
  .search-keyword
    width: 70%
    padding: .4rem .0714rem .4rem  1.6rem
    margin-right: 3%
    display: inline-block
    vertical-align: middle
    border: 0.1rem solid #e5e5e5
    border-radius: 5px
    font-size: 1rem
  .search-disabled-btn
    color: #959595
    background: #e5e5e5
  .search-btn
    width: 17.25%
    height: 2.0714rem
    line-height: 2.0714rem
    border: none
    border-radius: 5px
    display: inline-block
    vertical-align: middle
    font-size: 1rem
    text-align: center
    background: #2ba2fa
    color: #fff
  .total
    height: 1.5714rem;
    line-height: 1.5714rem;
    background: #e6e6e6;
    padding-left: .9rem;
    font-size: .7857rem;
    color: #5d5d5d;
    text-align: left;
  .DD
    padding-right: 2.657rem;
    display: table-cell;
    vertical-align: middle;
    text-align: left;
  .wz
    padding-left: 1.3571rem;
    float: left;
    font-size: 1.2rem;
  .left
    position: absolute;
    right: .8rem;
    top: 0;
    width: 1.3rem;
    height: 1.3rem;
    margin-top: 1.5rem;
    display: inline-block;
    background: url("http://m.kugou.com/v3/static/images/index/download_icon_2.png") no-repeat;
    background-size: 100%;
</style>
