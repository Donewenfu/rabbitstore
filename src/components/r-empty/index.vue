<template>
  <div class="r-empty-componen">
    <img src="../../assets/images/emptygoods.png" alt="">
    <span class="emptytext">{{emptyText}}</span>
  </div>
</template>

<script>
export default {
  name: 'index',
  props: {
    // 空值提示文字
    emptyText: {
      type: String,
      default: '暂无更多数据!'
    }
  }
}
</script>

<style scoped lang="scss">
.r-empty-componen{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
  img{
    width: 200px;
  }
  .emptytext{
    color: #666;
    display: block;
    margin-top: 10px;
  }
}
</style>
