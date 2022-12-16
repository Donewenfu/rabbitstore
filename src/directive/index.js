const globalDirective = {
  // 图片懒加载
  lazyImg (app) {
    app.directive('lazy', {
      mounted (el, bindings) {
        // 创建一个观察对象 构造函数
        const observer = new IntersectionObserver(([{ isIntersecting }]) => {
          // 判断是否已经到达可视区？
          if (isIntersecting) {
            // 如果监听到了 或者到达了可视区 那么就要停止监听， 防止重复监听
            observer.unobserve(el)
            // 判断图片是否加载失败
            el.onerror = () => {
            }
            // 设置img的src属性
            el.src = bindings.value
          }
        }, {
          threshold: 0.01
        })
        // 监听
        observer.observe(el)
      }
    })
  }

}

export default globalDirective
