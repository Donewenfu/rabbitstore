<script>
import { h } from 'vue'
export default {
  name: 'rbread',
  render () {
    // 用法
    // h函数第一个参数 标签名字 第二个参数 标签属性对象 第三个 子节点
    // 1. 创建 brancc 容器
    // 2.获取插槽
    // 3.去除item组件中的iconfont标签 由render函数 动态渲染
    // 4.便利插槽中的item 得到动态创建的节点，最后一个item不加i标签
    // 5.把动态创建的节点渲染在bread组件中
    const slotArr = this.$slots.default()
    const renderData = []
    // 循环插槽内容
    slotArr.forEach((item, index) => {
      renderData.push(item)
      // 判断是否是最后一个
      if (index < slotArr.length - 1) {
        // 箭头符号
        renderData.push(h('i', { class: 'iconfont icon-next-icon' }))
      }
    })
    return h('div', { class: 'r-bread-components' }, renderData)
  }
}
</script>

<style  lang="scss">
.r-bread-components{
  display: flex;
  align-items: center;
  .r-bread-item{
    display: flex;
    align-items: center;
    span{
      font-size: 13px;
      color: #666;
    }
    a{
      font-size: 14px;
      color: #333;
      display: block;
      &:hover{
        color: $txColor;
      }
    }
    &:last-child{
      a{
        &:hover{
          //color: #333;
        }
        color: $txColor;
      }

    }
  }
  .icon-next-icon{
    font-size: 15px;
    margin: 0 5px;
  }
}
</style>
