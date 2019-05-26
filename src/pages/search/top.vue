<template>
    <div class="top">
      <router-link to="/" slot="left">
        <img src="http://m.kugou.com/v3/static/images/index/logo.png" class="logo">
      </router-link>
        <img src="http://m.kugou.com/v3/static/images/index/search.png" class="search">
    </div>
</template>

<script>
export default {
  name: 'SearchTop',
  methods: {
    sea () {
      alert(1)
    }
  }
}
</script>

<style lang="stylus" scoped>
 .top
   width: 100%;
   padding-top: .0357rem;
   height: 3.2143rem;
   line-height: 3rem;
   background: #2ca2f9;
   position: fixed;
   top: 0
   z-index 5
 .logo
   width: 7.286rem
   height: 1.67857rem
   display: inline-block
   vertical-align: middle
   margin-left: .7143rem
 .search
   width: 1.2143rem
   height: 1.2143rem
   position: absolute
   top: 1rem
   right: .7143rem
   cursor: pointer
</style>
