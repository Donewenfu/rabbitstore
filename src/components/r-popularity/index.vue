<template>
  <div class="r-popularity-components">
    <div class="r-popularity-top">
      <div class="r-popularity-title">
        <h3>{{ title }}</h3>
        <span>{{ desc }}</span>
      </div>
      <div class="r-popularity-more">
        <a href="javascript:;" @click="changeBrand('prev')" :class="currentIndex>0?'active':'noclass'">
          <i class="iconfont icon-previous-icon"></i>
        </a>
        <a href="javascript:;" @click="changeBrand('next')" :class="currentIndex<(brandData.length/5)-1?'active':'noclass'">
          <i class="iconfont icon-next-icon"></i>
        </a>
      </div>
    </div>
    <!--品牌列表数据-->
    <div class="r-poplarity-list" :style="wrapStyle">
        <div class="poplarity-item" v-for="(item,index) in brandData" :key="index">
          <img v-lazy="item.picture" alt="">
        </div>
    </div>
  </div>
</template>

<script>
import { computed, ref } from 'vue'

export default {
  name: 'rpopularity',
  props: {
    // 标题
    title: {
      type: String,
      default: '请填写标题',
      required: true
    },
    // 描述
    desc: {
      type: String,
      default: '请填写描述',
      required: true
    },
    // 品牌数据
    brandData: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  setup (props) {
    // 当前页数
    const currentIndex = ref(0)
    // 计算属性 计算外层盒子总体宽度
    const wrapStyle = computed(() => {
      return {
        width: ((props.brandData.length / 5) * 1240) + 'px',
        transform: `translateX(-${currentIndex.value * 1240}px)`
      }
    })
    // 切换事件
    const changeBrand = (type) => {
      if (type === 'prev') {
        if (currentIndex.value !== 0) {
          currentIndex.value--
        }
      } else {
        if (currentIndex.value < ((props.brandData.length) / 5) - 1) {
          currentIndex.value++
        }
      }
    }
    return { wrapStyle, changeBrand, currentIndex }
  }
}
</script>

<style scoped lang="scss">
.r-popularity-components{
  width: 100%;
  overflow: hidden;
  .r-popularity-top{
    display: flex;
    align-items: center;
    justify-content: space-between;
    .r-popularity-title{
      display: flex;
      align-items: center;
      h3{
        font-size: 20px;
        margin-right: 10px;
      }
      span{
        font-size: 14px;
        color: #999;
      }
    }
    .r-popularity-more{
      display: flex;
      align-items: center;
      a{
        background-color: #E2E2E2;
        border-radius: 3px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        width: 19px;
        height: 19px;
        &:first-child{
          margin-right: 5px;
        }
        .iconfont{
          font-size: 12px;
          position: relative;
          top: 1px;
        }
        &.active{
          background-color: $txColor;
        }
        &.noclass{
          cursor: not-allowed;
        }
      }
    }
  }
  .r-poplarity-list{
    overflow: hidden;
    margin-top: 30px;
    width: 100%;
    margin-bottom: 30px;
    display: flex;
    flex-wrap: nowrap;
    transition: all .3s;
    .poplarity-item{
      margin-right: 5px;
      &:last-child{
        margin-right: 0;
      }
      img{
        cursor: pointer;
        width: 230px;
      }
    }
  }
}
</style>
