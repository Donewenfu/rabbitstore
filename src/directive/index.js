const globalDirective = {
  // 图片懒加载
  lazyImg (app) {
    app.directive('lazy', {
      mounted (el, bindings) {
        console.log(el)
      }
    })
  }

}

export default globalDirective
