import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Home from '@/games/home'
import Maingame from '@/games/maingame'
import Basic from '@/games/basic_model'
import Challenge from '@/games/challenge_model'
import Strength from '@/games/strength_model'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/home',
      component: Home,
      children: [{
        path: 'game',
        component: Maingame,
        children: [{
          path: 'basic',
          component: Basic
        }, {
          path: 'challenge',
          component: Challenge
        }, {
          path: 'strength',
          component: Strength
        }]
      }]
    }
  ]
})
