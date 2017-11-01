import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Guess from '@/games/guess'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/guess',
      component: Guess
    }
  ]
})
