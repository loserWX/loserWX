<template>
  <div class="check-button" :class="{checked:isChecked}">
    <img src="~assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>
export default {
  props:{
    isChecked:{
      type:Boolean,
      default:false
    }
  }
}
</script>

<style>
.check-button{
  border-radius: 50%;
  border:1px solid #aaa
}
.checked{
  border-color: orangered;
  background-color: orangered;
}
</style>