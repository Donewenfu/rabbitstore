// 使用createVNode render 函数
import { createVNode, render } from 'vue'
// 导入确认组件
import rconfirm from '@/components/r-confirm'
// 准备一个容器 把组件 元素渲染进去
const div = document.createElement('div')
// 给容器设置一个类名
div.setAttribute('class', 'c-confirm-container')
// 把节点放到body中
document.body.appendChild(div)
// 确认弹窗函数
const confirm = ({ type, title, content, showClose = true }) => {
  console.log('**')
  console.log(showClose)
  return new Promise((resolve, reject) => {
    // 用户点击取消的回调函数
    const canCelCallback = () => {
      console.log('88')
      render(null, div)
      // 用户点击取消 页面可滚动
      document.body.style = 'overflow-y: scroll;'
      // 点击取消按钮，触发reject同时销毁组件
      reject(new Error('已取消'))
    }
    // 用户点击确定的回调函数
    const confirmCallback = () => {
      render(null, div)
      // 用户点击取消 页面可滚动
      document.body.style = 'overflow-y: scroll;'
      // 点击确认按钮，触发resolve同时销毁组件
      resolve()
    }

    // 创建节点
    const vNode = createVNode(rconfirm, { type, title, content, showClose , confirmCallback, canCelCallback })
    document.body.style = 'overflow: hidden;'
    // 渲染
    render(vNode, div)
  })
}

export default confirm
