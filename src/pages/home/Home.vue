<template>
  <div>
  <div class="home">
      <home-top></home-top>
      <home-menu></home-menu>
  </div>
    <home-banner :list="banner"></home-banner>
    <home-list :list="list"></home-list>
    </div>
</template>

<script>
import BoFang from '../BoFang'
import HomeTop from './top'
import HomeMenu from './menu'
import HomeBanner from './banner'
import HomeList from './list'
import axios from 'axios'
export default {
  name: 'Home',
  components: {
    HomeTop,
    HomeMenu,
    HomeBanner,
    HomeList,
    BoFang
  },
  data () {
    return {
      list: [],
      banner: []
    }
  },
  methods: {
    getHomeInfo () {
      axios.get('/proxy/?json=true').then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      res = res.data
      this.banner = res.banner
      this.list = res.data
      // console.log(this.list)
    }
    // axios('/proxy/?json=true').then(({data}) => {
    //   // console.log(data)
    //   this.banner = data.banner
    //   this.list = data.data
    //   console.log(this.banner)
    //   // console.log(this.list)
    // })
  },
  mounted () {
    this.getHomeInfo()
  }
}
</script>

<style lang="stylus" scoped>
  .home
    overflow-x: hidden
    width 100%
    height auto
    box-sizing border-box
</style>
