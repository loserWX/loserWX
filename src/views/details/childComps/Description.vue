<template>
  <div id="detail-description" v-if="Object.keys(goods).length !== 0">
    <div class="info-title"> {{goods.title}} </div>
    <div class="info-price">
      <span class="new-price">{{goods.newPrice}}</span>
      <span class="old-price">{{goods.oldPrice}}</span>
      <span v-if="goods.discount" class="discount">{{goods.discount}}</span>
    </div>
    <div class="info-other">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.services[goods.services.length-1].name}}</span>
    </div>
    <div class="info-service">
      <span class="info-service-item" v-for="index in goods.services.length-1" :key="index">
        <img :src="goods.services[index-1].icon" alt="">
        <span> {{goods.services[index-1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    goods:{
      type:Object,
      default(){
        return {}
      }
    }
  }
}
</script>

<style scoped>
  #detail-description{
    padding: 10px 8px 0px 8px;
    color: #999;
    border-bottom: 5px solid #f2f5f8;
  }
  .info-title{
    color: #222;
    font-size: 15px;
  }
  .info-price{
    margin-top: 15px;
  }
  .info-price .new-price{
    font-size: 26px;
    color: var(--color-high-text);
  }
  .info-price .old-price{
    font-size: 13px;
    margin-left: 5px;
    text-decoration: line-through;
  }
  .info-price .discount{
    position: relative;
    top:-8px;

    font-size: 12px;
    padding: 2px 5px;
    color: #fff;
    background-color: var(--color-high-text);
    border-radius: 8px;
    margin-left: 5px;
  }
  .info-other{
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
    padding-bottom: 10px;
    font-size: 13px;
    border-bottom: 2px solid rgba(100,100,100,0.1);
  }
  .info-service{
    display: flex;
    justify-content: space-between;
    margin: 10px 0;
    /* line-height: 60px; */
    font-size: 12px;
    color: #333;
  }
  .info-service img{
    position: relative;
    top: 1px;
    height: 12px;
    width: 12px;
  }


</style>