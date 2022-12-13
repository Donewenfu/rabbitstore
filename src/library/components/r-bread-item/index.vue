<template>
    <div class="r-bread-item">
      <router-link :to="to" v-if="to"><slot></slot></router-link>
      <span v-else><slot></slot></span>
    </div>
</template>

<script>
export default {
  name: 'rbreaditem',
  props: {
    to: {
      type: [Object, String],
      default: ''
    }
  }
}
</script>
