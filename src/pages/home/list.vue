<template>
    <div class="dist">
      <ul>
      <li v-for="(item, index) of list" class="bf" :key="index" @click="bt(item)">
            <div class="the-list"><span>{{item.filename}}</span></div>
        <div class="left"></div>
      </li>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'HomeList',
  inject: ['up'],
  props: {
    list: Array
  },
  methods: {
    bt (data) {
      this.$store.commit('pudateMusicThis', 1)
      this.$store.commit('pudateMusicList', data)
      this.up(true)
    }
  }
}
</script>

<style lang="stylus" scoped>
 .dist ul
   padding 0
   padding-left .7143rem
 .bf
   width 100%
   height: 4.0714rem
   border-bottom: 1px solid #e5e5e5
   display: table
   position: relative
   padding-left .7143rem
 .the-list
   padding-right: 2.657rem;
   display: table-cell;
   vertical-align: middle;
   text-align: left;
 .the-list span
   float: left
   font-size: 1.1rem
 .left
   position: absolute;
   right: 1rem;
   top: 0;
   width: 1.3rem;
   height: 1.3rem;
   margin-top: 1.5rem;
   display: inline-block;
   background: url("http://m.kugou.com/v3/static/images/index/download_icon_2.png") no-repeat;
   background-size: 100%;
</style>
