<template>
  <div class="bf">
    <div class="bfa" @click="jinru">
      <div class="tp">
      <!--<img src="http://singerimg.kugou.com/uploadpic/softhead/400/20181120/20181120163251820.jpg" alt="">-->
        <img :src="this.$store.state.songName.imgUrl">
        </div>
      <!--<p>123123123</p>-->
      <!--<p>2312321321</p>-->
      <div class="wz">
        <p>{{$store.state.songName.songName}}</p>
        <p>{{$store.state.songName.singerName}}</p>
      </div>
    </div>
    <div class="BoFang">
      <div class="btn">
        <i class="musicplay"  @click="musicplay" :class="{ zt : $store.state.isshow }"></i>
        <i class="next"  @click="pudateMusiThis(item)"></i>
        <i class="download"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BoFang',
  data () {
    return {
      isshow: false
    }
  },
  methods: {
    jinru () {
      // console.log(1)
      this.$emit('updatemusicoff', true)
    },
    pudateMusiThis (data) {
      console.log(data)
      this.$store.commit('pudateMusicThis', 1)
      if (this.$store.state.isshow) {
        this.$store.state.isshow = !this.$store.state.isshow
      }
    },
    musicplay () {
      this.$store.state.isshow = !this.$store.state.isshow
      let music = document.getElementById('music')
      if (this.$store.state.isshow) {
        music.pause()
      } else {
        music.play()
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
 .bf
   height: 4.2rem;
   width: 100%;
   position: fixed;
   bottom: 0;
   background: rgba(0,0,0,.9);
   color: #fff;
 .bf .bfa
   display: block;
   width: 65%;
   height: 100%;
   background: rgba(0,0,0,.9);
 .bfa p
   color: white
   float left
 .tp
   width: 3.75rem;
   height: 3.75rem;
   margin: .2143rem .535rem 0rem .2143rem;
   float: left;
 .tp img
   width: 100%;
 .wz
   width: 65%;
   display: inline-block;
   vertical-align: middle;
 .wz p
   width: 100%;
   line-height: 2rem;
   overflow: hidden;
   white-space: nowrap;
   text-overflow: ellipsis;
   font-size: .8571rem;
   color: #fff;
 .BoFang
   height: 4.2rem;
   width: 35%;
   position: fixed;
   bottom: 0;
   right 0
   background: rgba(0,0,0,.9);
   color: #fff;
   font-size: 0;
 .btn
   position: absolute;
   top: 1.0714rem;
   width: 100%;
   height: 100%;
   float: left
 .btn i
   width: 1.786rem;
   height: 1.786rem;
   margin-left: .9rem;
   display: inline-block;
   vertical-align: middle;
   cursor: pointer;
 .btn .zt
    background: url(http://m.kugou.com/v3/static/images/index/play_icon.png) no-repeat;
    background-size: 100%;
 .musicplay
   background: url(http://m.kugou.com/v3/static/images/index/pause_icon.png) no-repeat;
   background-size: 100%;
 .next
   background: url(http://m.kugou.com/v3/static/images/index/next_icon.png) no-repeat;
   background-size: 100%;
 .download
   background: url(http://m.kugou.com/v3/static/images/index/download_icon.png) no-repeat;
   background-size: 100%;
</style>
