// vue-router
import router from '@/router/index'
// 消息提示组件
import Message from '@/utils/messageUI'
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
      },
      // 用户当前访问的类目
      userActive: ''
    }
  },
  mutations: {
    // 设置用户信息 用户手机号 用户头像 用户昵称 账户 手机 token
    setProfile (state, profile) {
      state.profile = profile
    },
    // 设置用户当前的栏目
    setUserActive (state, name) {
      state.userActive = name
    },
    // 退出登录
    userLogout (state, { profile, logoutPath }) {
      // 清空本地存储
      state.profile = profile
      // 跳转到登录页
      router.push(`/login?redirectUrl=${encodeURIComponent(logoutPath)}`)
      // 退出成功以后消息提示
      Message({
        type: 'success',
        text: '退出成功！',
        offsetTop: 30,
        duration: 1500
      })
    }
  }
}
export default user
