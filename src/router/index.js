import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home/Home'
import Rank from '@/pages/rank/rank'
import Plist from '@/pages/plist/plist'
import Singer from '@/pages/singer/singer'
import search from '@/pages/search/search'
import RankingSongList from '@/pages/RankingSongList/RankingSongList'
import songlist from '@/pages/songlist/songlist'
import popular from '@/pages/popular/popular'
import singerinfo from '@/pages/popular/singerinfo/singerinfo'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/rank',
      name: 'Rank',
      component: Rank
    },
    {
      path: '/plist',
      name: 'Plist',
      component: Plist
    },
    {
      path: '/singer',
      name: 'Singer',
      component: Singer
    },
    {
      path: '/search',
      name: 'search',
      component: search
    },
    {
      path: '/RankingSongList',
      name: 'RankingSongList',
      component: RankingSongList
    },
    {
      path: '/songlist',
      name: 'songlist',
      component: songlist
    },
    {
      path: '/popular',
      name: 'popular',
      component: popular
    },
    {
      path: '/singerinfo',
      name: 'singerinfo',
      component: singerinfo
    }
  ]
})
