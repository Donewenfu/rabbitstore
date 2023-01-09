import { createRouter, createWebHashHistory } from 'vue-router'
// lanyout组件
const layout = () => import('@/views/layout')
// home组件
const index = () => import('@/views/home/index')
// category组件
const category = () => import('@/views/category')
// 二级分类页面
const subcategory = () => import('@/views/category/sub')
// 商品详情页面
const goodsDetail = () => import('@/views/goods')
// 购物车页面
const cartpage = () => import('@/views/cart')
// 登录页面
const loginpage = () => import('@/views/login')
// 404页面 没有找到该页面
const notpage = () => import('@/views/notpage')
// 测试页面
const testpage =  () => import('@/views/testpage')
// 路由规则
const routes = [
  {
    path: '/',
    name: 'layout',
    component: layout,
    children: [
      // 首页
      { path: '/', name: 'index', component: index, meta: { title: '象米子商城' } },
      // 分类页面
      { path: '/category/:id', name: 'category', component: category, meta: { title: '加载中...' } },
      // 二级分类页面
      { path: '/category/sub/:id', name: 'subcategory', component: subcategory, meta: { title: '加载中...' } },
      // 商品详情页面
      { path: '/goodsdetail/:id', name: 'goodsdetail', component: goodsDetail, meta: { title: '加载中...' } },
      // 购物车界面
      { path: '/cart', name: 'cartpage', component: cartpage, meta: { title: '购物车' } }
    ]
  },
  // 登录界面
  { path: '/login', name: 'loginpage', component: loginpage, meta: { title: '欢迎登录' } },
  // 测试页面
  { path: '/testpage', name: 'testpage', component: testpage, meta: { title: '测试页面' } },
  // 404页面
  { path: '/:pathMatch(.*)*', name: 'notpage', component: notpage, meta: { title: '没找到该页面' } }
]

const router = createRouter({
  // 路由模式
  history: createWebHashHistory(),
  routes,
  scrollBehavior () {
    return { top: 0 }
  }
})

// 路由守卫
router.beforeEach((to, from ,next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default router
