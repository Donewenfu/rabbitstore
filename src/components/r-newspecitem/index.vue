<template>
  <div class="r-newspec-components">
    <div class="newspec-top">
      <img :src="newspecData.cover" alt="" class="specimg">
      <div class="mask">
        <div class="mask-left">
          <p>标题</p>
          <p>很好，很暖和(｡･ω･｡)！</p>
        </div>
        <div class="mask-price">
          <rprice :price="100"></rprice>
          <span>起</span>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'index',
  props: {
    newspecData: {
      type: Object,
      default: () => {
        return {}
      }
    }
  }
}
</script>

<style scoped lang="scss">
.r-newspec-components{
  width: 400px !important;
  height: 287px;
  background-color: #fff;
  position: relative;
  .newspec-top{
    width: 100%;
    height: 100%;
    position: relative;
    .specimg{
      width: 100%;
      object-fit: cover;
      height: 100%;
    }
    .mask{
      width: 100%;
      height: 287px;
      position: absolute;
      left: 0;
      bottom: 0;
      background-image: linear-gradient(0deg,rgba(0,0,0,.8),transparent 50%);
    }
  }
}
</style>
