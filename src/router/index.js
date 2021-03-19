import Vue from 'vue'
import VueRouter from 'vue-router'
import addStu from '@/views/addStu'
import stuList from '@/views/stuList'

Vue.use(VueRouter)

const routes = [
 {
   path: '/stulist',
   component: stuList,
 },
 {
  path: '/addstu',
  component: addStu
 },
 {
  path: '*',
  redirect: "/stulist"
 }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  linkExactActiveClass: 'active',
})

export default router
