import { createStore } from 'vuex'
// vuex本地存储
import createPersistedState from 'vuex-persistedstate'
// 用户模块
import user from '@/store/modules/user'
// 购物车模块
import cart from '@/store/modules/cart'
// 分类模块
import category from '@/store/modules/category'

export default createStore({
  modules: {
    // 用户模块
    user,
    // 购物车模块
    cart,
    // 分类模块
    category
  },
  plugins: [createPersistedState({
    // 本地存储的键名
    key: 'rb',
    // 那些模块数据要存储
    paths: ['user', 'cart', 'category']
  })]
})
