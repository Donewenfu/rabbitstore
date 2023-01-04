<template>
  <div class="r-start-component">
    <div class="r-start-inner">
      <template v-if="score>0">
        <i class="iconfont icon-pingjia" v-for="(item,index) in solid" :key="index"></i>
        <i class="iconfont icon-star" v-for="(item,index) in hollow" :key="index"></i>
      </template>
      <span v-else>暂未评分哦！</span>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue"
export default {
  name: "rstart",
  props: {
    score: {
      type: [String, Number],
      default: 5
    }
  },
  setup (props) {
    // 实心
    const solid = ref(0)
    // 空心
    const hollow = ref(0)
    const initScore = () => {
      if (props.score < 0) return
      // 计算空心
      hollow.value = 5 - props.score
      // 计算实心
      solid.value = parseInt(props.score)
    }
    // 根据分数计算 循环渲染的
    onMounted(() => {
      initScore()
    })
    return {
      solid,
      hollow
    }
  }
}
</script>

<style scoped lang="scss">
.r-start-component{
  .r-start-inner{
    i{
      color: $txColor;
      display: inline-block;
      margin: 0 1px;
    }
    span{
      font-size: 14px;
      color: #999;
    }
  }
}
</style>
