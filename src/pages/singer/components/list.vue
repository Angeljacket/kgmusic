<template>
    <div class="singer-list">
      <ul>
        <li v-for="item in list" :key="item.list" class="gs" @click="show(item)">
            {{item.classname}}
          <i class="singer-list-arrow"></i>
        </li>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'SingerList',
  props: {
    list: Array
  },
  methods: {
    show (data) {
      localStorage.setItem('kgid', data.classid)
      console.log('kgid')
      this.$router.push('/popular')
    }
  }
}
</script>

<style lang="stylus" scoped>
 li
   list-style: none;
   background: #fbfbfb;
   border: 1px solid #e4e4e4;
   padding: 1.4rem;
   margin: 1rem .7143rem 1.0714rem .7143rem;
   display: flex;
   position: relative;
 i
  position: absolute;
  right: 0.4rem;
  top: 1.2rem;
 .singer-list
   padding-top 6.6rem
 .singer-list ul
   padding 0
 .singer-list-arrow
   width: .57143rem;
   height: 1rem;
   margin-top: .2rem;
   background: url(http://m.kugou.com/v3/static/images/index/arrow_icon.png);
   background-size: 100%;
   float: right;
   display: block;
</style>
