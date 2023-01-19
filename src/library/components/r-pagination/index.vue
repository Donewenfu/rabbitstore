<template>
  <div class="r-pagination-component">
    <!--上一页-->
    <div class="prev" v-if="mycurrent>1" @click="changePager(mycurrent - 1)">上一页</div>
    <div class="disable" v-else>上一页</div>
    <span class="symbol" v-if="pager.start>1">
      <i class="iconfont icon-ellipsis"></i>
    </span>
    <!--页码区域-->
    <ul>
      <li v-for="(item, index) in pager.paginnationBtn" :key="index" @click="changePager(item)" >
        <a href="javascript:;" :class="{'active':mycurrent === item}">{{item}}</a>
      </li>
    </ul>
    <span class="symbol" v-if="pager.end < pager.pageCount">
       <i class="iconfont icon-ellipsis"></i>
    </span>
    <!--下一页-->
    <div class="next" v-if="mycurrent<pager.pageCount" @click="changePager(mycurrent+1)">下一页</div>

    <div class="disable" v-else>下一页</div>
    <!--页码-->
    <div class="jump-page">
      <p>跳转</p>
      <input type="text" v-model="userJumppage"  @keyup.enter="jumpageDown">
    </div>
  </div>
</template>

<script>
// vue
import { watch, ref, computed } from 'vue'
import message from '@/utils/messageUI'
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
  setup (props, { emit }) {
    // 用户输入跳转的页面
    const userJumppage = ref('')
    // 约定显示几个页码按钮
    const count = 5
    // 总条数
    const mytotal = ref(100)
    // 当前页
    const mycurrent = ref(1)
    // 每页的数据
    const mypagesize = ref(10)
    // 通过计算属性动态计算页码数据 分页计算
    const pager = computed(() => {
      // 计算总页数 向上取整
      const pageCount = Math.ceil(mytotal.value / mypagesize.value)
      // 计算偏移值
      const offset = Math.floor(count / 2)
      // 计算开始页码
      let start = mycurrent.value - offset
      // 计算结束页码
      let end = start + count - 1
      // 如果起始页小于1 需要做处理
      if (start < 1) {
        start = 1
        end = (start + count - 1) > pageCount ? pageCount : (start + count - 1)
      }
      // 如果结束页码大于总页数需要处理
      if (end > pageCount) {
        end = pageCount
        start = (end - count + 1) < 1 ? 1 : (end - count + 1)
      }
      // 生成按钮
      let paginnationBtn = []
      for (let i = start; i <= end; i++) {
        paginnationBtn.push(i)
      }
      return {
        pageCount,
        paginnationBtn,
        start,
        end
      }
    })
    // 监听props的数据变化
    watch(props, () => {
      // 总页数
      mytotal.value = props.total
      // 当前页
      mycurrent.value = props.currentPage
      // 每页条数
      mypagesize.value = props.pageSize
    }, {
      // 初始化就执行 立刻执行
      immediate: true
    })
    // 点击页码 向父组件传递用户点击的页码数 传递分页组件页码数
    const changePager = (data) => {
      // 相同页码不做处理
      if (mycurrent.value !== data) {
        mycurrent.value = data
        // 自定义事件
        emit('currentpage', data)
      }
    }
    // 用户按下跳转页面
    const jumpageDown = () => {
      if (!userJumppage.value) {
        message({
          type: 'error',
          text: '请输入页码',
          offsetTop: 170
        })
        return
      }
      // 计算总共有多少页码
      const totalPage = Math.ceil(props.total / props.pageSize)
      if (parseInt(userJumppage.value) > totalPage) {
        message({
          type: 'warn',
          text: '输入的页面大于当前页码！',
          offsetTop: 170
        })
        userJumppage.value = ''
        return
      }
      // 判断用户输入的页码是否小于1
      if (parseInt(userJumppage.value) < 1) {
        message({
          type: 'warn',
          text: '页面输入错误！',
          offsetTop: 170
        })
        userJumppage.value = ''
        return
      }
      // 自定义事件 传递用户输入的页码
      emit('currentpage', parseInt(userJumppage.value))
    }
    return {
      pager,
      mycurrent,
      changePager,
      userJumppage,
      jumpageDown
    }
  }
}
</script>

<style scoped lang="scss">
.r-pagination-component{
  display: flex;
  align-items: center;
  cursor:pointer;
  .jump-page{
    margin-left: 10px;
    display: flex;
    align-items: center;
    input{
      border: 1px solid #e4e4e4;
      font-size: 14px;
      width: 30px;
      height: 25px;
      border-radius: 3px;
      padding: 3px;
      box-sizing: border-box;
      margin-left: 10px;
      text-align: center;
    }
  }
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
  .disable{
    color: #e4e4e4;
    border: 1px solid #e4e4e4;
    border-radius: 3px;
    height: 26px;
    line-height: 26px;
    font-size: 14px;
    padding: 0 10px;
    cursor:not-allowed;
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
      height: 27px;
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
        &.active{
          color: #fff;
          background-color: $txColor;
        }
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
