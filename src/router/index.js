import { createRouter, createWebHashHistory } from 'vue-router'
// lanyout组件
const layout = () => import('@/views/layout')
// home组件
const index = () => import('@/views/home/index')
// category组件
const category = () => import('@/views/category/index')
// 路由规则
const routes = [
  {
    path: '/',
    name: 'layout',
    component: layout,
    children: [
      // 首页
      {
        path: '/',
        name: 'index',
        component: index
      },
      {
        path: '/category/:id',
        name: 'category',
        component: category
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
