import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import App from '@/components/App'
import About from '@/components/About'
import CandA from '@/components/CandA'
import Login from '@/components/Login'

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
      path: '/curatorsandacademics',
      name: 'Curators and Academics',
      component: CandA
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ],
  mode: 'history'
})
