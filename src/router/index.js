import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import App from '@/components/App'
import About from '@/components/About'
import People from '@/components/People'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/app',
      name: 'App',
      component: App
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/people',
      name: 'People',
      component: People
    }
  ],
  mode: 'history'
})
