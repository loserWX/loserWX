<template>
  <div class="toast" v-show="isshow">
    <div>{{message}}</div>
  </div>
</template>

<script>
export default {
  props:{
    message:{
      type: String,
      default:''
    },
    isshow:{
      type:Boolean,
      default:false
    }
  }
}
</script>

<style scoped>
.toast{
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 100;
  transform: translate(-50%, -50%);
  padding: 8px 10px;
  border-radius: 6px;
  color: #fff;
  background-color: rgba(0,0,0,0.7);
}
</style>