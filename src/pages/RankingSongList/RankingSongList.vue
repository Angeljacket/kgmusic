<template>
    <div class="height">
      <home-top></home-top>
      <div class="Topbar" ref="topbar">
        <router-link to="/rank">
          <img src="http://m.kugou.com/v3/static/images/index/goback_1.png" alt="" class="goback">
        </router-link>
        <p>{{name}}</p>
      </div>
      <div class="bg"
           :style="'background-image: url(' + img + ')' + ';' + 'background-position: 0 -' + Y + 'px'"
      >
        <div class="time">
          <span>上次更新时间:{{time}}</span>
        </div>
      </div>
      <ul class="uls">
        <li v-for="(item, index) in list" :key="index" @click="bt(item)">
          <span class="panel-songs-item-num">{{index+1}}</span>
          <div class="r"><p class="content">{{item.filename}}</p></div>
          <div class="left">
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
import axios from 'axios'
import HomeTop from '../home/top'
export default {
  name: 'RankingSongList',
  inject: ['up'],
  data () {
    return {
      list: [],
      time: [],
      img: '',
      name: '',
      Y: 0
    }
  },
  components: {
    HomeTop
  },
  methods: {
    bt (data) {
      this.$store.commit('pudateMusicThis', 1)
      this.$store.commit('pudateMusicList', data)
      this.up(true)
    }
  },
  mounted () {
    let This = this
    // console.log(this.$refs.topbar.offsetTop) // offsetTop指 obj 距离上方或上层控件的位置，整型，单位像素
    window.addEventListener('scroll', function () {
      var t = document.documentElement.scrollTop || document.body.scrollTop
      console.log(t / 2)
      This.Y = t / 2
    })
  },
  created () {
    axios(`/proxy/rank/info/${localStorage.getItem('kgid')}?json=true`).then(({data}) => {
      // console.log(data.info.rankname)
      // console.log(data.songs.list[1].addtime)
      this.time = data.songs.list[1].addtime
      this.name = data.info.rankname
      console.log(data.songs.list)
      this.list = data.songs.list
      // console.log(data.info.imgurl)
      this.img = 'http://imge.kugou.com/mcommon/400' + data.info.imgurl.split(`{size}`)[1]
      console.log(this.img)
    })
  }
}
</script>

<style lang="stylus" scoped>
 ul
   padding: 0
   padding-left: .7143rem;
   overflow: hidden;
   text-overflow: ellipsis;
   white-space: nowrap;
 ul,li
   width: 100%;
   height: 4.0714rem;
   border-bottom: 1px solid #e5e5e5;
   position: relative;
   display: table;
   table-layout: fixed;
   white-space: nowrap;
   overflow: hidden;
   text-overflow: ellipsis;
 .Topbar
   padding-top .6rem
   z-index 2
   position fixed
   width: 100%;
 .Topbar p
     background: -webkit-linear-gradient(top,rgba(0,0,0,.6),rgba(0,0,0,0));
     color: white;
     font-size: 1.2rem;
     height: 4rem;
     line-height: 4rem;
     text-align center
     z-index 50
 .goback
   position: absolute;
   left: 0;
   top: 3.5rem;
   width: .85714rem;
   height: 1.42857rem;
   margin-top: .687265rem;
   display: inline-block;
   padding-left: .8rem;
 .bg
   margin-top 2.6rem
   width: 100%;
   height: 14rem;
   background-size: 100%;
   background-position: 0 10px;
   background-repeat: no-repeat;
   background-attachment:fixed;
   position: relative;
 .time
   width: 100%;
   height: 2.8rem;
   background: -webkit-linear-gradient(bottom,rgba(0,0,0,.6),rgba(0,0,0,0));
   position: absolute;
   bottom: 0;
   left: 0;
.time span
  position: absolute;
  bottom: 1.25rem;
  left: 1.07143rem;
  color: #fafff2;
  font-size: 1rem;
 .phgd
   position: relative;
   height: 3rem;
   background: red;
   width: 100%;
   text-align:left;
 p
   line-height:3rem
   height: 3rem
   text-align: center
   overflow hidden
 .goback
   position: absolute;
   left: 0;
   top: .5rem;
   width: .85714rem;
   height: 1.42857rem;
   margin-top: .687265rem;
   display: inline-block;
   padding-left: .8rem;
 .content
   text-align: left;
   line-height: 4.0714rem;
   font-size: 1.1rem;
   padding-left 2rem
 .r
   padding-right: 3rem;
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
 .panel-songs-item-num
   padding: 0 .5rem;
   height: 1.0714rem;
   line-height: 1.0714rem;
   border-radius: .5rem;
   position: absolute;
   top: 50%;
   left: 0;
   margin-top: -.5357rem;
   text-align: center;
   font-size: .7143rem;
   color: #999;
   display: inline-block;
 .uls li:nth-child(1) span
    background: #e80000
    color: #fff
 .uls li:nth-child(2) span
   background: #ff7200
   color: #fff
 .uls li:nth-child(3) span
   background: #f8b300
   color: #fff
</style>
