<template>
  <div class="recommend">
    <div v-for="item in recommend" :key="item.id" class="recommend_item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div> {{item.title}} </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    recommend:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style scoped>
  .recommend{
    display: flex;
    width: 100%;
    text-align: center;
    font-size: 12px;
    padding: 10px 0 20px 0;
    border-bottom: 10px solid #eee;
  }
  .recommend_item{
    flex: 1;
  }
  .recommend img {
    height: 65px;
    width: 65px;
    margin-bottom: 10px;
  }
</style>