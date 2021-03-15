<template>
  <div class="category">
    <nav-bar class="nav-bar"><div slot="center">商品分类</div></nav-bar>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import NavBar from 'components/common/navbar/NavBar.vue';

export default {
  components: { 
    NavBar, 

  },
    
};
</script>

<style scoped>
.wrapper{
  /* height:  */
  background-color:#ddd;
  overflow: hidden;
}
.nav-bar{
  color: #fff;
  background-color: var(--color-tint);  
}
</style>