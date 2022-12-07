import { createRouter, createWebHashHistory } from 'vue-router'
// lanyout组件
const layout = () => import('@/views/layout')
// home组件
const index = () => import('@/views/home/index')
// category组件
const category = () => import('@/views/category/index')
// 二级分类页面
const subcategory = () => import('@/views/category/sub')
// 商品详情页面
const goodsDetail = () => import('@/views/goods/index')
// 购物车页面
const cartpage = () => import('@/views/cart/index')
// 路由规则
const routes = [
  {
    path: '/',
    name: 'layout',
    component: layout,
    children: [
      // 首页
      { path: '/', name: 'index', component: index },
      // 分类页面
      { path: '/category/:id', name: 'category', component: category },
      // 二级分类页面
      { path: '/category/sub/:id', name: 'subcategory', component: subcategory },
      // 商品详情页面
      { path: '/goodsdetail/:id', name: 'goodsdetail', component: goodsDetail },
      // 购物车界面
      { path: '/cart', name: 'cartpage', component: cartpage }
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
