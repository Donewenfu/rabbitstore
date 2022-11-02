<template>
  <p>{{ $store.state.user.profile.nickname }}</p>
  <button @click="$store.commit('user/setProfile', {nickname: '李思思'})">更改数据</button>
  <button @click="reqs">request</button>
  <router-view/>
</template>

<script>
import requestFn from '@/utils/request'
export default {
  setup () {
    const reqs = () => {
      requestFn('https://www.baidu.com', 'get', { name: 'zhangsan' })
    }
    return { reqs }
  }
}
</script>

<style lang="scss">

</style>
