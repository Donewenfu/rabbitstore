<template>
  <div class="c-loading-components">
    <img src="../../../assets/images/logo.svg" alt="" class="logo-loading">
    <p>客官加载中...</p>
  </div>
</template>

<script>
export default {
  name: "rloadinglogo"
}
</script>

<style  lang="scss" scoped>
@keyframes jumpanimated {
  0%{
    transform: translate(0, 0);
  }
  50%{
    transform: translate(0, -8px);
  }
  100%{
    transform: translate(0, 0);
  }
}
.logo-loading{
  width: 80px;
  display: block;
  animation: jumpanimated 1s infinite;
}
p{
  margin-top: 10px;
  font-size: 13px;
  color: #b2b2b2;
}
</style>
