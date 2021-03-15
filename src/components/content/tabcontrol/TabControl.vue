<template>
  <div class="tab_control">
    <div v-for="(item,index) in titles" :key="item" class="tab_control_item" :class="{active:index==currentIndex}">
      <span @click="BeActive(index)">{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    titles:{
      type:Array,
      default(){
        return[]
      }
    }
  },
  data(){
    return{
      currentIndex:0
    }
  },
  methods:{
    BeActive(index){
      this.currentIndex = index
      this.$emit('beActive',index)
    }
  }
}
</script>

<style>
.tab_control{
  display: flex;
  background-color: #fff;
}
.tab_control_item{
  flex:1;
  text-align: center;
  height: 40px;
  line-height: 40px;
  font-size: 15px;
}
.tab_control_item span {
  padding: 5px;
}
.active{
  color: var(--color-high-text);
}
.active span{
  border-bottom: 3px solid var(--color-tint);
}
</style>