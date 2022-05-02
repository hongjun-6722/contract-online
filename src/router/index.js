import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '@/views/Index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: index,
    redirect:'/information',
    children:[
      {
        path: '/information',
        name: 'information',
        component: () => import('@/components/Information.vue')
      },
      {
        path: '/signature',
        name: 'signature',
        component: () => import('../components/Signature.vue')
      },
      {
        path: '/completion',
        name: 'completion',
        component: () => import('../components/CompletionProtocol.vue')
      },
    ]
  },
]

const originalPush = VueRouter.prototype.push
const originalReplace = VueRouter.prototype.replace

VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) {
    return originalPush.call(this, location, onResolve, onReject)
  }
  return originalPush.call(this, location).catch(err => err)
}


VueRouter.prototype.replace = function push(location, onResolve, onReject) {
  if (onResolve || onReject) {
    return originalReplace.call(this, location, onResolve, onReject)
  }
  return originalReplace.call(this, location).catch(err => err)
}


const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
