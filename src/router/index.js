import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  mode:"history",  
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/layouts/Layouts'),
      children: [
        {
          path: '',
          name: 'home',
          component: () => import("@/views/Home")
        }
      ]
    },
    {
      path: '/',
      name: 'navigation',
      component: () => import('@/layouts/Layouts'),
      children: [
        {
          path: '/:en_name',
          name: 'navigation',
          component: () => import("@/views/ThreadList")
        }
      ]
    },
    {
      path: '/posts',
      name: 'threads',
      component: () => import('@/layouts/Layouts'),
      children: [
        {
          path: 'threads/:hash_url',
          name: 'threaddetail',
          component: () => import("@/views/ThreadDetail")
        }
      ]
    },
    {
      path: '/chat',
      name: 'chatroom',
      component: ()=>import("@/components/ChatRoom")
    }
    
  ]
})
