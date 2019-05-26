<template>
  <div id="app">
    <router-view>
    </router-view>
    <div>
      <bofang v-if="show" @updatemusicoff="updatemusicoff"></bofang>
    </div>
    <div class="music" v-show="musicoff">
      <musicucc @updatemusicoff="updatemusicoff"></musicucc>
    </div>
  </div>
</template>

<script>
import Bofang from './pages/BoFang'
import musicucc from './pages/musicucc'
export default {
  name: 'App',
  components: {
    Bofang,
    musicucc
  },
  data () {
    return {
      show: false,
      musicoff: false
    }
  },
  methods: {
    up (data) {
      // console.log(data)
      this.show = data
    },
    updatemusicoff (data) {
      this.musicoff = data
    }
  },
  provide () {
    return {
      up: this.up
    }
  }
}
</script>

<style>
  #app{
    /*margin: 0 auto;*/
    /*width: 23.44rem;*/
  }
  .music{
    position: fixed;
    z-index: 99;
    top: 3.2rem;
    width: 100%;
    height: 100%;
    background: black
  }
  .music .play{
    display: block
  }
  body{
    margin: 0 auto;
    overflow-x: hidden;
  }
  ul,li{
    list-style: none;
  }
  a{
    text-decoration: none;
  }
  p{
    margin: 0;
  }
</style>
