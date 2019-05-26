<template>
    <div>
      <home-top></home-top>
      <div class="content">
        <router-link to="/singer">
          <img src="http://m.kugou.com/v3/static/images/index/goback.png" alt="" class="goback">
        </router-link>
        <p>{{classname}}</p>
      </div>
      <div class="bd">
          <ul class="PopularSinger">
            <li v-for="item in list" :key="item.list" class="gs" @click="show1(item)">
              <div class="left">
                <img :src="item.imgurl">
              </div>
              <div class="name">
                <p>
                  {{item.singername}}
                </p>
              </div>
            </li>
          </ul>
      </div>
    </div>
</template>

<script>
import axios from 'axios'
import HomeTop from '../home/top'
export default {
  name: 'popular',
  data () {
    return {
      list: [],
      classname: ''
    }
  },
  components: {
    HomeTop
  },
  methods: {
    show1 (data) {
      localStorage.setItem('kgidd', data.singerid)// 储存
      this.$router.push('/singerinfo')
    }
  },
  created () {
    axios(`/proxy/singer/list/${localStorage.getItem('kgid')}?json=true`).then(({data}) => {
      console.log(data.singers.list.info)
      this.classname = data.classname
      this.list = data.singers.list.info
      for (var i = 0; i < this.list.length; i++) {
        // console.log(this.list[i].singername)
        // console.log(this.list[i].imgurl)
        this.list[i].imgurl = 'http://singerimg.kugou.com/uploadpic/pass/softhead/400' + this.list[i].imgurl.split('{size}')[1]
      }
    })
  }
}
</script>

<style lang="stylus" scoped>
  ul
    padding 0
 .content
   margin-top 3.27rem
   position relative
   box-shadow 0 0.1785rem 0.1785rem 0 #f4f4f4;
   -webkit-box-shadow 0 0.1785rem 0.1785rem 0 #f4f4f4;
 .goback
   position: absolute;
   left: 0;
   top: 0;
   width: .85714rem;
   height: 1.42857rem;
   margin-top: .687265rem;
   display: inline-block;
   padding-left: .8rem;
 .content p
   height: 3rem;
   line-height: 3rem;
   font-size: 1.2rem;
   text-align: center;
 .PopularSinger
  position relative
 .gs
  display: block;
  position: relative;
  margin-left: .7143rem;
  padding: .7143rem 2.14286rem .7143rem 4.4286rem;
  border-bottom: 1px solid #e5e5e5;
  text-decoration: none;
 .left
   width: 3.3929rem;
   height: 3.3929rem;
   position: absolute;
   left: 0;
   top: 0;
   padding-top: .8rem;
 .left img
   width 100%
 .name
   min-height: 3.3929rem;
   line-height: 3.3929rem;
   color: #333333;
   font-size: 1.2rem;
   position: relative;
</style>
