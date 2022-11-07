// 本地导航数据
import { navlink } from '@/jsondata/nnavlink'
// api
import { getNavListData } from '@/api/category'
// 商品分类模块
const category = {
  // 命名空间
  namespaced: true,
  // 数据
  state () {
    return {
      // 分类导航数据
      cateList: navlink
    }
  },
  mutations: {
    // 设置分类导航数据
    setCategoryData (state, list) {
      console.log('执行了')
      console.log(list)
      state.cateList = list
    }
  },
  actions: {
    async setListData ({ commit }) {
      const { result } = await getNavListData()
      commit('setCategoryData', result)
    }
  }
}
export default category
