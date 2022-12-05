<template>
  <div class="rcatefilterskeleton-component">
    <!--loading组件-->
    <rskeleton bg="#e4e4e4" animated width="800px"></rskeleton>
    <rskeleton bg="#e4e4e4" animated width="1000px"></rskeleton>
    <rskeleton bg="#e4e4e4" animated width="100%"></rskeleton>
  </div>
</template>

<script>
export default {
  name: 'rcatefilterskeleton'
}
</script>

<style scoped lang="scss">
.rcatefilterskeleton-component{
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fff;
  padding: 20px;
  box-sizing: border-box;
  border-radius: $borderRadius;
}
</style>
