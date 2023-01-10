// 使用createVnode 函数和render函数
import { createVNode, render } from 'vue'
// 导入消息组件
import rmessage from '../library/components/r-message'
// 准备一个dom容器 等待节点渲染进去
const div = document.createElement('div')
// 设置容器的类名
div.setAttribute('class', 'r-message-container')
// 把节点放到body中
document.body.appendChild(div)
// 消息提示函数
const message = ({ type, text, offsetTop, duration = 2500 }) => {
  // 计时器
  let timer = null
  // 根据组件创建一个虚拟节点
  const vNode = createVNode(rmessage, { type, text, offsetTop })
  // 把虚拟节点 渲染到指定的容器中
  render(vNode, div)
  // 清除定时器
  clearTimeout(timer)
  // 多少秒关闭
  timer = setTimeout(() => {
    render(null, div)
  }, duration)
}

export default message
