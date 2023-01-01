<template>
  <div class="c-loading-components">
    <img src="../../../assets/images/logo.svg" alt="" class="logo-loading">
  </div>
</template>

<script>
export default {
  name: "rloadinglogo"
}
</script>

<style  lang="scss">
@keyframes jumpanimated {
  0%{
    transform: translate(0, 0);
  }
  50%{
    transform: translate(0, -5px);
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
</style>
