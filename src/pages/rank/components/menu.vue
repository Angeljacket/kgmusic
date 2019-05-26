<template>
  <div class="menu">
    <div class="top-nav">
      <ul>
        <li class=""><router-link tag="a" to="/">新歌</router-link></li>
        <li class="cur"><router-link tag="a" to="/rank">排行</router-link></li>
        <li class=""><router-link tag="a" to="/plist">歌单</router-link></li>
        <li class=""><router-link tag="a" to="/singer">歌手</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RankMenu',
  components: {
  },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style lang="stylus" scoped>
  .menu
    width 100%
    position fixed
    top: 2.28rem
    z-index 5
  .top-nav
    width: 100%;
    background: #fff;
    height: 3.2143rem;
    line-height: 3rem;
    box-shadow: 0 0.1785rem 0.1785rem 0 #f4f4f4
  .top-nav ul
    width 100%
    padding: 0 .7143rem
    display: -webkit-box
    box-sizing: border-box;
  .top-nav li
    width: 20%;
    text-align: center;
    -webkit-box-flex: 1;
    box-flex: 1;
  .top-nav li a
    border-bottom: .2143rem solid #fff;
    display: block;
    color: #333;
    font-size: 1.1429rem;
    -webkit-box-sizing: border-box;
    box-sizing: border-box
  .top-nav .cur a
    border-bottom: .2143rem solid #33a3f5
</style>
