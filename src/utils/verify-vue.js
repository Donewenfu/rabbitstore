export default {
  // 验证账号 函数
  account (value) {
    if (!value) return '请输入用户名！'
    return true
  },
  // 验证密码
  password (value) {
    if (!value) return '请输入密码！'
    return true
  },
  // 验证用户是否选中协议
  agreement (value) {
    if (!value) return '请选择用户协议！'
    return true
  }
}
