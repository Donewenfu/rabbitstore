// 时间处理插件
import dayjs from 'dayjs'
// vueuse插件
import { useIntervalFn } from '@vueuse/core'
// vue
import { ref, onUnmounted } from 'vue'
// 确认按钮
export function useOrderTime () {
  // 秒数
  const time = ref(0)
  const timeText = ref('')
  // 倒计时是否结束
  const isendTime = ref(false)
  const { pause, resume } = useIntervalFn(() => {
    time.value--
    timeText.value = dayjs.unix(time.value).format('mm分ss秒')
    if (time.value <= 0) {
      isendTime.value = true
      pause()
    }
  }, 1000, false)
  // 组件销毁 暂停定时器
  onUnmounted(() => {
    pause()
  })
  // 根据后端的时间戳转换为倒计时格式
  const changeTime = (data) => {
    time.value = data
    timeText.value = dayjs.unix(data).format('mm分ss秒')
    // 恢复
    resume()
  }
  return {
    timeText,
    changeTime,
    isendTime
  }
}
