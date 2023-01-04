<template>
  <div class="r-goodscomment-components">
    <!--评价顶部-->
    <div class="comment-top-header">
      <!--人数 好评-->
      <div class="comment-top-left">
        <ul>
          <li>
            <h2>{{ evaluateData.salesCount }}人</h2>
            <p>人购买</p>
          </li>
          <li>
            <h2>{{ evaluateData.praisePercent }}</h2>
            <p>好评率</p>
          </li>
        </ul>
      </div>
      <!--右侧标签区域-->
      <div class="comment-top-right">
        <div class="left-text">大家都在说：</div>
        <div class="right-list">
          <ul>
            <li
              v-for="(item, index) in evaluateData.tags" :key="index"
              :class="{'active':tagCurrent === index}"
              @click="clickTag(index)"
            >{{ item.title }}({{item.tagCount}})</li>
          </ul>
        </div>
      </div>
    </div>
    <!--评价列表区域-->
    <!--排序-->
    <div class="sort-area">
      <p>排序:</p>
      <ul>
        <li>默认</li>
        <li>最新</li>
        <li class="active">最热</li>
      </ul>
    </div>
    <!--评论列表-->
    <div class="comment-list">
      <rcomment></rcomment>
    </div>
  </div>
</template>

<script>
// 评价组件
import rcomment from '@/components/r-comment'
import { ref } from 'vue'

export default {
  name: "rgoodscomment",
  setup () {
    // 当前评价选中下标
    const tagCurrent = ref(0)
    // 点击标签
    const clickTag = (index) => {
      tagCurrent.value = index
    }
    return {
      tagCurrent,
      clickTag
    }
  },
  props: {
    evaluateData: {
      type: Object,
      default: () => {}
    }
  },
  components: {
    rcomment
  }
}
</script>

<style scoped lang="scss">
.r-goodscomment-components{
  .comment-top-header{
    display: flex;
    align-items: center;
    height: 150px;
    .comment-top-left{
      width: 60%;
      display: flex;
      justify-content: center;
      height: 100px;
      ul{
        border-right: 1px solid #f5f5f5;
        display: flex;
        align-items: center;
        li{
          margin: 0 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          h2{
            margin: 0;
            padding: 0;
            font-size: 20px;
            color: $priceColor;
          }
          p{
            font-size: 14px;
            color: #999;
            margin-top: 8px;
          }
          &:last-child{
            padding-right: 40px;
          }
        }
      }
    }
    .comment-top-right{
      display: flex;
      .left-text{
        color: #333;
        font-size: 14px;
        font-weight: bold;
        width: 200px;
        margin-left: 10px;
      }
      .right-list{
        ul{
          display: flex;
          flex-wrap: wrap;
          li{
            cursor: pointer;
            width: 130px;
            height: 38px;
            margin-left: 20px;
            margin-bottom: 20px;
            border-radius: 4px;
            border: 1px solid #e4e4e4;
            background: #f5f5f5;
            color: #999;
            text-align: center;
            line-height: 38px;
            &.active{
              background-color: $txColor;
              color: #fff;
              border: 1px solid $txColor;
            }
          }
        }
      }
    }
  }
  .sort-area{
    display: flex;
    align-items: center;
    border-top: 1px solid #f5f5f5;
    border-bottom: 1px solid #f5f5f5;
    padding-top: 20px;
    padding-bottom: 20px;
    p{
      margin-left: 40px;
      margin-right: 20px;
      font-weight: bold;
    }
    ul{
      display: flex;
      align-items: center;
      li{
        margin: 0 5px;
        cursor: pointer;
        &.active{
          color: $txColor;
        }
      }
    }
  }
  .comment-list{
    margin-top: 30px;
    padding: 20px;
    box-sizing: border-box;
  }
}
</style>
