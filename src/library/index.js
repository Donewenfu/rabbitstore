// 骨架屏组件
import rskeleton from '@/components/r-skeleton/index'
// 价格组件
import rprice from '@/components/r-price/index'
export default {
  install (app) {
    // 骨架组件
    app.component(rskeleton.name, rskeleton)
    // 价格组件
    app.component(rprice.name, rprice)
  }
}
