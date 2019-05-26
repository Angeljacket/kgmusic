<template>
    <div class="home">
      <home-top></home-top>
      <rank-menu></rank-menu>
      <rank-list :list="list"></rank-list>
    </div>
</template>

<script>
import axios from 'axios'
import RankList from './components/list'
import HomeTop from '../home/top'
import RankMenu from './components/menu'
export default {
  name: 'HomeRank',
  components: {
    HomeTop,
    RankMenu,
    RankList
  },
  data () {
    return {
      list: []
    }
  },
  methods: {
    getHomeInfo () {
      axios.get('/proxy/rank/list/?json=true').then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      res = res.data
      this.list = res.rank.list
      // console.log(this.list)
      for (var i = 0; i < this.list.length; i++) {
        // console.log(this.list[i].imgurl.split('{size}'))
        this.list[i].imgurl = 'http://imge.kugou.com/mcommon/400' + this.list[i].imgurl.split('{size}')[1]
      }
    }
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
