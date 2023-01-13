// api
import { getCartList, addCartData } from '@/api/cart'
// 消息提示
import Message from '@/utils/messageUI'
// 购物车模块
const cart = {
  // 命名空间
  namespaced: true,
  // 数据
  state () {
    return {
      // 购物车列表
      list: []
    }
  },
  mutations: {
    // 设置购物车列表
    setCartList (state, cartList) {
      state.list = cartList
    }
  },
  getters: {
    // 获取购物车数量
    getCartCount (state) {
      return state.list.reduce((p, c) => p + c.count, 0)
    }
  },
  actions: {
    // 获取购物车列表
    async getCartList (ctx) {
      // 判断用户是否登录
      const { result } = await getCartList()
      ctx.commit('setCartList', result)
    },
    // 添加购物车数据
    async addCart (ctx, params) {
      const { msg } = await addCartData(params)
      if (msg == '操作成功') {
        ctx.dispatch('getCartList')
      } else {
        Message({
          type: 'error',
          text: '加入购物车失败！',
          offsetTop: 170
        })
      }
    }
  }
}
export default cart
