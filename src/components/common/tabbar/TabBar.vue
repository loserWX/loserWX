<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style>
@import "~assets/css/base.css";

#tab-bar {
  display: flex;
  background-color: #f6f6f6;

  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 6;
  box-shadow: 0 -1px 3px rgba(100, 100, 100, 0.3);
}
</style>