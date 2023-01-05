<template>
  <div class="r-pagination-component">
    <!--上一页-->
    <div class="prev">上一页</div>
    <span class="symbol">
      <i class="iconfont icon-ellipsis"></i>
    </span>
    <!--页码区域-->
    <ul>
      <li>
        <a href="javascript:;">1</a>
      </li>
      <li>
        <a href="javascript:;">1</a>
      </li>
      <li>
        <a href="javascript:;">1</a>
      </li>
    </ul>
    <span class="symbol">
       <i class="iconfont icon-ellipsis"></i>
    </span>
    <!--下一页-->
    <div class="next">下一页</div>
  </div>
</template>

<script>
// vue
import { watch, ref } from 'vue'
export default {
  name: 'rpagination',
  props: {
    // 总页数
    total: {
      type: Number,
      default: 10
    },
    // 当前页
    currentPage: {
      type: Number,
      default: 1
    },
    // 每页条数
    pageSize: {
      type: Number,
      default: 10
    }
  },
  setup (props) {
    // 总条数
    const mytotal = ref(100)
    // 当前页
    const mycurrent = ref(1)
    // 每页的数据
    const mypagesize = ref(10)
    // 监听props的数据变化
    watch(props, () => {
      // 总页数
      mytotal.value = props.total
      // 当前页
      mycurrent.value = props.currentPage
      // 每页条数
      mypagesize.value = props.pageSize
    })
    return {
      mytotal
    }
  }
}
</script>

<style scoped lang="scss">
.r-pagination-component{
  display: flex;
  align-items: center;
  cursor:pointer;
  .prev,.next{
    border: 1px solid #e4e4e4;
    border-radius: 3px;
    height: 26px;
    line-height: 26px;
    font-size: 14px;
    padding: 0 10px;
    transition: all .3s;
    &:hover{
      color: #fff;
      border: 1px solid $txColor;
      background-color: $txColor;
    }
  }
  span{
    width: 20px;
    height: 26px;
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 25px;
    margin: 0 3px;
    &:hover{
      color: $txColor;
    }
  }
  ul{
    display: flex;
    align-items: center;
    li{
      margin: 0 5px;
      height: 26px;
      display: flex;
      justify-content: center;
      align-items: center;
      a{
        display: inline-block;
        border: 1px solid #e4e4e4;
        font-size: 14px;
        padding: 1px 8px;
        border-radius: 3px;
        transition: all .3s;
        &:hover{
          color: #fff;
          border: 1px solid $txColor;
          background-color: $txColor;
        }
      }
    }
  }
}
</style>
