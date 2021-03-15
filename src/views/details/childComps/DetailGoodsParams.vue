<template>
  <div class="detail-goods-params" v-if="Object.keys(itemParams).length != 0">
    <table v-for="(table,key) in itemParams.rule.tables" :key="key">
        <tr v-for="(tr,x) in table" :key="x">
          <td v-for="(td,y) in tr" :key="y">{{td}}</td>
        </tr>
    </table>
    <table class="params-info">
      <tr v-for="(tr1,z) in itemParams.info.set" :key="z">
        <td class="params-info-key">{{tr1.key}}</td>
        <td class="params-info-value">{{tr1.value}}</td>
      </tr>
    </table>
    <div class="params-img" v-if="itemParams.info.image">
      <img :src="itemParams.info.images[0]" alt="">
    </div>
  </div>
</template>

<script>
export default {
  props:{
    itemParams:{
      type:Object,
      default(){
        return {}
      }
    }
  }
}
</script>

<style scoped>
  .detail-goods-params{
    padding: 20px 15px;
    font-size: 14px;
    border-bottom: 5px solid #f2f5f8;
  }
  .detail-goods-params table{
    width: 100%;
    border-collapse:collapse;
  }
  .detail-goods-params table tr{
    height: 42px;
  }
  .detail-goods-params table tr td{
    border-bottom: 1px solid rgba(100,100,100,0.1)
  }
  .params-info{
    border-top: 3px solid rgba(100,100,100,0.1);
  }
  .params-info-key{
    width: 95px;
  }
  /* .params-info-value{
    color: #eb4868;
  } */
  .params-img img {
    width: 100%;
  }
</style>

