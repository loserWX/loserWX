<template>
  <div id="detail-shop-info">
    <div class="shop-name">
      <img :src="shop.logo" alt="">
      <span>{{shop.name}}</span>
    </div>
    <div class="shop-description">
      <div class="description-item shop-sells">
        <div class="total-sells">
          <div class="total-sells-number">{{shop.sells}}</div>
          <div class="total-sells-words">总销量</div>
        </div>
        <div class="total-goods">
          <div class="total-goods-number">{{shop.goodsCount}}</div>
          <div class="total-goods-words">全部宝贝</div>
        </div>
      </div>
      <span class="middle-line"></span>
      <div class="description-item shop-score">
        <table>
          <tr v-for="(item, index) in shop.score" :key="index">
            <td>{{item.name}}</td>
            <td class="score" :class="{'score-better': item.isBetter}">{{item.score}}</td>
            <td class="better" :class="{'better-more': item.isBetter}"><span>{{item.isBetter ? '高':'低'}}</span></td>
          </tr>
        </table>
      </div>
    </div>
    <div class="enter-shop">
      <span>进店逛逛</span>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    shop:{
      type:Object,
      default(){
        return {}
      }
    }
  }
}
</script>

<style scoped>
  #detail-shop-info{
    padding: 0 8px;
    border-bottom: 5px solid #f2f5f8;
  }
  .shop-name{
    margin: 20px 0;
    line-height: 45px;
    display: flex;
    align-items: center;
  }
  .shop-name img{
    height: 50px;
    width: 50px;
    border-radius: 50%;
    border: 1px solid rgba(0,0,0,0.1);
  }
  .shop-name span{
    margin-left: 10px;
    vertical-align: center;
  }
  .shop-description{
    display: flex;
    align-items: center;
    /* justify-content: space-around; */
  }
  .description-item{
    flex:1
  }
  .middle-line{
    height: 42px;
    width: 1px;
    border-right: 1px solid rgba(0,0,0,0.1);
  }
  .shop-sells{
    display: flex;
    justify-content: space-evenly;
    /* padding: 0 10px; */
    color: #333;
    text-align: center;
    /* border-right: 1px solid rgba(0,0,0,0.1); */
  }
  .total-sells-number,
  .total-goods-number{
    font-size: 18px;
  }
  .total-sells-words,
  .total-goods-words{
    margin-top: 8px;
    font-size: 12px;
  }
  .shop-score{
    font-size: 13px;  
    /* margin-left: 30px; */
    /* text-align: center; */
  }
  .shop-score table{
    margin-left: 30px;
  }
  .shop-score table td {
    padding: 3px 3px;
  }
  .shop-score .score{
    color: #5ea732;
  }
  .shop-score .score-better{
    color: #f13e3a;
  }
  .shop-score .better span{
    font-size: 12px;
    padding: 1px;
    background-color: #5ea732;
    color: #fff;
    text-align: center
  }
  .shop-score .better-more span {
    background-color: #f13e3a;
  }
  .enter-shop{
    margin:10px 0 20px 0;
    text-align: center;
  }
  .enter-shop span{
    display: inline-block;
    font-size: 14px;
    background-color: #f2f5f8;
    width: 150px;
    height: 30px;
    line-height: 30px;
    border-radius: 10px;
    border: 1 solid rgba(0,0,0,1);
  }

</style>