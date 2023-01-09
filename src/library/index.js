// 全局指令
import globalDirective from '@/directive'
// 消息提示方法
import message from '@/utils/messageUI'
// require 获取compoents下面的vue文件
const importFn = require.context('./components', true, /\.vue$/)
export default {
  install (app) {
    importFn.keys().forEach(item => {
      // 导入组件
      const component = importFn(item).default
      // 注册全局组件
      app.component(component.name, component)
    })
    // 全局指令
    globalDirective.lazyImg(app)
    // 在vue3 原型挂载方法全局使用 全局使用消息提示方法
    app.config.globalProperties.$message = message
    console.log(app.config.globalProperties)
  }
}
