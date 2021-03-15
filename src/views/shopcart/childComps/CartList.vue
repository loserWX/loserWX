<template>
  <div class="cart-list">
    <cart-list-item v-for="(item,index) in $store.state.cartList" :product="item" :key="index" />
  </div>
</template>

<script>
import CartListItem from './CartListItem.vue'
export default {
  components: { CartListItem },

}
</script>

<style scoped>

</style>