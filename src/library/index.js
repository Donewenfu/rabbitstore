// 骨架屏组件
import rskeleton from '@/components/r-skeleton/index'
// 价格组件
import rprice from '@/components/r-price/index'
// 全局指令
import globalDirective from '@/directive'
export default {
  install (app) {
    // 骨架组件
    app.component(rskeleton.name, rskeleton)
    // 价格组件
    app.component(rprice.name, rprice)
    // 全局指令
    globalDirective.lazyImg(app)
  }
}
