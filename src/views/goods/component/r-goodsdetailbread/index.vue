<template>
  <div class="r-goodsdetailbread">
    <rbread>
      <rbreaditem to="/">首页</rbreaditem>
      <rbreaditem v-if="goodsData" :to="`/category/sub/${goodsData.categories[1].id}`">{{ goodsData.categories[1].name }}</rbreaditem>
      <rbreaditem v-if="goodsData" :to="`/category/sub/${goodsData.categories[0].id}`">{{ goodsData.categories[0].name }}</rbreaditem>
      <rbreaditem v-if="goodsData">{{ goodsData.name }}</rbreaditem>
    </rbread>
  </div>
</template>

<script>
export default {
  name: 'rgoodsdetailbread',
  props: {
    goodsData: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style scoped lang="scss">

</style>
