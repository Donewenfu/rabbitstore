// axios
import axios from 'axios'
// vuex
import store from '@/store'
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
  // 判断token是否存在
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
}, err => {
  return Promise.reject(err)
})
