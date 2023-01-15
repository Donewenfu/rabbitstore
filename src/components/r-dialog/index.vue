<template>
  <div class="r-dialog-components">
    <div class="r-dialog-mask"></div>
  </div>
</template>

<script>
export default {
  name: 'rdialog',
  props: {
    // dialog标题
    title: {
      type: String,
      default: '默认标题'
    }
  }
}
</script>

<style scoped lang="scss">
.r-dialog-components{
  width: 100%;
  height: 100%;
  .r-dialog-mask{
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 99999;
    background-color: rgba(0, 0, 0, .5);
  }
}
</style>
