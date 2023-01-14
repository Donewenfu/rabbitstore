// 请求库
import request from '@/utils/request'

// 获取确认订单的数据
export function getCheckorderDat () {
  return request('/member/order/pre', 'GET')
}
