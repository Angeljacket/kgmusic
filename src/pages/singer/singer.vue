<template>
    <div>
      <singer-top></singer-top>
      <singer-menu></singer-menu>
      <singer-list :list="list"></singer-list>
    </div>
</template>

<script>
import axios from 'axios'
import SingerTop from '../home/top'
import SingerMenu from './components/menu'
import SingerList from './components/list'
export default {
  name: 'singer',
  data () {
    return {
      list: []
    }
  },
  components: {
    SingerTop,
    SingerMenu,
    SingerList
  },
  methods: {
    getHomeInfo () {
      axios.get('/proxy/singer/class/?json=true').then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      res = res.data
      this.list = res.list
      console.log(this.list)
    }
  },
  mounted () {
    this.getHomeInfo()
  }
}
</script>

<style scoped>

</style>
