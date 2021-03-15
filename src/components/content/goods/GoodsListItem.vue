<template>
  <div class="goods_item" @click="goodsItemClick">
    <img :src="showImage" alt="" @load="imageLoad">
    <div class="goods_info">
      <p>{{goodsItem.title}}</p>
      <span class="price">￥{{goodsItem.price}}</span>
      <span class="collection">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    goodsItem:{
      type:Object,
      default(){
        return{}
      }
    }
  },
  computed:{
    showImage(){
      return this.goodsItem.image || this.goodsItem.show.img  
    }
  },
  methods:{
    imageLoad(){
      if(this.$route.path.indexOf('/home')){
        this.$bus.$emit('homeImageLoad')
      }else{
        this.$bus.$emit('detailImageLoad')
      }
    },
    goodsItemClick(){
      this.$router.push('/detail/' + this.goodsItem.iid)
    }
  }
}
</script>

<style scoped>
.goods_item{
  position: relative;
  width: 47%;
  padding-bottom: 40px;
}
.goods_item img {
  width: 100%;
  border-radius: 5px;
}
.goods_info{
  position: absolute;
  bottom: 7px;
  left: 0;
  right: 0;
  font-size: 12px;
  overflow: hidden;
  text-align: center;
  margin: 8px,0;
}
.goods_info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}
.goods_info .price{
  color: var(--color-high-text);
  margin-right: 20px;
}
.goods_info .collection{
  position: relative;
  margin-left: 20px;
}
.goods_info .collection::before {
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>