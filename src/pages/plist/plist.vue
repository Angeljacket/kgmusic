<template>
  <div>
    <home-top></home-top>
    <plist-menu></plist-menu>
    <plist-list :list="list"></plist-list>
  </div>
</template>

<script>
import HomeTop from '../home/top'
import PlistMenu from './compontents/menu'
import PlistList from './compontents/list'
import axios from 'axios'
export default {
  name: 'plist',
  components: {
    HomeTop,
    PlistMenu,
    PlistList
  },
  data () {
    return {
      list: []
    }
  },
  methods: {
    getHomeInfo () {
      axios.get('/proxy/plist/index/?json=true').then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      res = res.data
      this.list = res.plist.list.info
      console.log(this.list)
      for (var i = 0; i < this.list.length; i++) {
        this.list[i].imgurl = 'http://imge.kugou.com/soft/collection/400' + this.list[i].imgurl.split('{size}')[1]
      }
    }
  },
  mounted () {
    this.getHomeInfo()
  }
}
</script>

<style scoped>

</style>
