<template>
    <div class="wrap">
      <singer-top></singer-top>
      <div class="Img">
        <img :src="img" class="img">
      </div>
      <div class="head">
        <router-link to="/plist">
          <img src="http://m.kugou.com/v3/static/images/index/goback.png" alt="" class="goback">
        </router-link>
        <p>{{name}}</p>
      </div>
      <div class="Introduction {active:show==true}" @click="off()" :class="{' bd ':ischooe}">
        <li>{{intro}}</li>
        <span class="up" :class="{' off ':ischooe}"></span>
      </div>
      <ul class="anUl">
        <li v-for="item in list" class="bf" :key="item.list" @click="bt(item)">
          <div class="DD">
            <span>{{item.filename}}</span>
          </div>
          <div class="left">
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
import axios from 'axios'
import SingerTop from '../home/top'
export default {
  name: 'songlist',
  inject: ['up'],
  data () {
    return {
      list: [],
      info: [],
      img: '',
      name: '',
      intro: '',
      Y: 0,
      ischooe: false
    }
  },
  components: {
    SingerTop
  },
  created () {
    axios(`/proxy/plist/list/${localStorage.getItem('kgid')}?json=true`).then(({data}) => {
      // console.log(data.info.list.specialname)
      this.name = data.info.list.specialname
      console.log(data.list.list.info)
      this.intro = data.info.list.intro
      this.list = data.list.list.info
      this.img = 'http://imge.kugou.com/soft/collection/400' + data.info.list.imgurl.split(`{size}`)[1]
      console.log(this.img)
    })
  },
  methods: {
    off () {
      this.ischooe = !this.ischooe
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
 .anUl
    padding 0
 .anUl li
   width: 100%;
   height: 4.0714rem;
   border-bottom: 1px solid #e5e5e5;
   position: relative;
   display: table;
 .Img
   margin-top  3.27rem
   height: 18rem;
   overflow: hidden;
 .img
   width: 100%
   margin-top -3rem
 .head
   position: fixed;
   width: 100%;
   top: 3.27rem;
   background: -webkit-linear-gradient(top,rgba(0,0,0,.6),rgba(0,0,0,0));
   z-index 10
 .head p
   height: 3rem;
   line-height: 3rem;
   font-size: 1.1rem;
   color: white;
   text-align center
 .goback
   position: absolute;
   left: 0;
   top: 0;
   width: .85714rem;
   height: 1.42857rem;
   margin-top: .687265rem;
   display: inline-block;
   padding-left: .8rem;
 .Introduction
   width: 100%;
   color: black;
   height: 2.25rem;
   line-height 1.8
   overflow: hidden;
   position: relative;
   box-shadow: 0 0.1785rem 0.1785rem 0 #f4f4f4;
   box-sizing border-box
 .Introduction li
   width: 86%;
   list-style: none;
   font-size: 1.1rem;
   padding-left: 1rem;
 .Introduction .up
     position: absolute;
     width: 1.1429rem;
     height: 2rem;
     line-height: 2.1429rem;
     top: .1rem;
     right: .8rem;
     text-align: center;
     cursor: pointer;
     background: url("http://m.kugou.com/v3/static/images/index/close_icon.png") no-repeat;
     background-size: 100%
 .wrap .off
     background: url("http://m.kugou.com/v3/static/images/index/open_icon.png") no-repeat;
     background-size: 100%
 .wrap .bd
    height 100%
 .bf
   position: relative;
 .DD
   padding-right: 2.657rem;
   display: table-cell;
   vertical-align: middle;
   text-align: left;
 .DD span
   float: left;
   line-height: 4.0714rem;
   font-size: 1.1rem;
   padding-left: .3571rem;
 .left
   position: absolute;
   right: 1.3rem;
   top: 0;
   width: 1.3rem;
   height: 1.3rem;
   margin-top: 1.5rem;
   display: inline-block;
   background: url("http://m.kugou.com/v3/static/images/index/download_icon_2.png") no-repeat;
   background-size: 100%;
</style>
