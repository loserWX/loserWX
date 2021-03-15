<template>
  <div class="shop-cart">
    <nav-bar class="nav-bar">
      <div class="div" slot="center">购物车（{{$store.state.cartList.length}}）</div>
    </nav-bar>
    <better-scroll class="content" ref="scroll">
      <cart-list/>
    </better-scroll>
    <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue';
import CartList from './childComps/CartList.vue';
import BetterScroll from '../../components/common/better-scroll/BetterScroll.vue';
import CartBottomBar from './childComps/CartBottomBar.vue';
export default {
  components: { 
    NavBar,
    CartList,
    BetterScroll,
    CartBottomBar 
  },
  activated(){
    this.$refs.scroll.refresh()
  }

};
</script>

<style scoped>
  .shop-cart{
    height: 100vh;
  }
  .nav-bar{
    /* font-size: 17px; */
    color: #fff;
    background-color: var(--color-tint);
  }
  .content{
    height: calc(100% - 44px - 49px - 40px);
    width: 100%;
    overflow: hidden;
  }
</style>