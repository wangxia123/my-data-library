import Vue from 'vue'
import Router from 'vue-router'
import index from '../components/index'
import trip from '../components/trip'
import home from '../components/home'
import food from '../components/food'
import celebrity from '../components/celebrity'
import journey from '../components/journey'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/trip',
      name: 'trip',
      component: trip
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/food',
      name: 'food',
      component: food
    },
    {
      path: '/celebrity',
      name: 'celebrity',
      component: celebrity
    },
    {
      path: '/journey',
      name: 'journey',
      component: journey
    }
  ]
})
