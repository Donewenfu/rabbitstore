// 本地导航数据
import { navlink } from '@/jsondata/nnavlink'
// api
import { getNavListData } from '@/api/category'
import { getLocalStorageData } from '@/utils/storage'
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
      state.cateList = list
    }
  },
  actions: {
    // 异步调用mutations中的方法 setCategoryData
    async setListData ({ commit }) {
      // 判断本地存储是否有数据 如果有数据取本地存储的数据
      if (getLocalStorageData('rb')) {
        commit('setCategoryData', getLocalStorageData('rb').category.cateList)
      } else {
        const { result } = await getNavListData()
        commit('setCategoryData', result)
      }
    }
  }
}
export default category
