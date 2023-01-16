export default {
  // 验证收货人信息
  receiver (value) {
    console.log('verify')
    if (!value) return '请输入收货人'
    return true
  },
  // 验证手机号
  contact (value) {
    const TEL_REGEXP = /^1[3-9]\d{9}/
    if (!TEL_REGEXP.test(value)) return '手机号错误🙅'
    return true
  },
  // 地区
  areainfo (value) {
    if (!value) return '请选择城市'
    return true
  },
  // 详细地址
  address (value) {
    if (!value) return '请输入详细地址'
    return true
  },
  // 邮政编码
  postalCode (value) {
    if (!value) return '请输入邮政编码'
    return true
  }
}
