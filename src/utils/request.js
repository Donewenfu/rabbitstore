// axios
import axios from 'axios'
// vuex
import store from '@/store'
// vuerouter
import router from '@/router'
// config
import { baseURL } from '@/config'

const axiosInstance = axios.create({
  // 请求路径
  baseURL,
  // 请求超时时间
  timeout: 8000
})

// 请求拦截器
axiosInstance.interceptors.request.use(config => {
  // 如果本地token需要在请求头添加token校验信息
  const { token } = store.state.user.profile
  // 判断token是否存在 如果存在token 发送请求携带token
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
}, err => {
  return Promise.reject(err)
})

// 响应拦截器
axiosInstance.interceptors.response.use((res) => {
  return res.data
}, (err) => {
  // 响应请求状态码是401时需要做响应处理
  if (err.response && err.response.status === 401) {
    // 清空本地用户信息 清空vuex 用户信息
    store.commit('user/setProfile', {})
    // 跳转到登录界面
    // 获取之前用户点击的路由地址
    const currentRouter = router.currentRoute.value.fullPath
    router.push(`/login?redirectUrl=${encodeURIComponent(currentRouter)}`)
  }
  return Promise.reject(err)
})

// 请求方法
const requestFn = (url, method, submitData) => {
  return axiosInstance({
    url,
    method,
    [method.toLowerCase() === 'get' ? 'params' : 'data']: submitData
  })
}

export default requestFn
