<template>
  <p>{{ $store.state.user.profile.nickname }}</p>
  <button @click="$store.commit('user/setNickname', '张三')">更改数据</button>
  <router-view/>
</template>

<style lang="scss">

</style>
