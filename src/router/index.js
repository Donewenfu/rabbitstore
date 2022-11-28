import { createRouter, createWebHashHistory } from 'vue-router'
// lanyout组件
const layout = () => import('@/views/layout')
// home组件
const index = () => import('@/views/home/index')
// category组件
const category = () => import('@/views/category/index')
// 二级分类页面
const subcategory = () => import('@/views/category/sub')
// 路由规则
const routes = [
  {
    path: '/',
    name: 'layout',
    component: layout,
    children: [
      // 首页
      { path: '/', name: 'index', component: index },
      { path: '/category/:id', name: 'category', component: category },
      { path: '/category/sub/:id', name: 'subcategory', component: subcategory }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior () {
    return { top: 0 }
  }
})

export default router
