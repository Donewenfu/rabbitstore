<template>
  <div class='home-skeleton'>
    <div class="item" v-for="i in 4" :key="i" :style="{backgroundColor:bg}">
      <rskeleton bg="#e4e4e4" width="306px" height="306px" animated />
      <rskeleton bg="#e4e4e4" width="160px" height="24px" animated />
      <rskeleton bg="#e4e4e4" width="120px" height="24px" animated />
    </div>
  </div>
</template>

<script>
export default {
  name: 'rskeletonproduct',
  props: {
    bg: {
      type: String,
      default: '#fff'
    }
  }
}
</script>

<style scoped lang="scss">
.home-skeleton {
  width: 1240px;
  height: 406px;
  display: flex;
  justify-content: space-between;
  .item {
    width: 306px;
    display: flex;
    flex-direction: column;
    align-items: center;
    div{
      margin-bottom: 10px;
    }
  }
}
</style>
