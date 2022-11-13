// 导入懒加载组合式api 库 vue use
import { useIntersectionObserver } from '@vueuse/core'
import { ref } from 'vue'
// 数据懒加载
const useLayzData = function (target, apiFn) {
  console.log(typeof apiFn)
  console.log(target)
  const result = ref([])
  const { stop } = useIntersectionObserver(target, ([{ isIntersecting }], observerElement) => {
    if (isIntersecting) {
      stop()
      // 请求数据
      apiFn().then((res) => {
        result.value = res.result
      })
    }
  })
  return result
}

export default useLayzData
