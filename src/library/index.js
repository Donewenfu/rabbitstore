// 全局指令
import globalDirective from '@/directive'
// 消息提示组件
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
  }
}
