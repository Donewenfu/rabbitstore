// 用户模块
const user = {
  // 开启vuex命名空间
  namespaced: true,
  // 数据
  state () {
    return {
      // 用户数据
      profile: {
        // 用户id
        id: '',
        // 用户头像
        avatar: '',
        // 用户昵称
        nickname: 'zhangsan',
        // 账户
        account: '',
        // 手机
        mobile: '',
        // token
        token: ''
      }
    }
  },
  mutations: {
    setNickname (state, name) {
      state.profile.nickname = name
    }
  }
}
export default user
