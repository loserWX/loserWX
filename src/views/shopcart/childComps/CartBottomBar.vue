<template>
  <div class="bottom-bar">
    <div class="check-all">
      <div class="check-button" @click="checkButtonClick"  ><check-button :isChecked="isCheckedAll"/></div>
      <div>全选</div>
    </div>
    <div class="total-price">
      合计:￥{{totalPrice}}
    </div>
    <div class="calculate">
      去计算({{calculate}})
    </div>
  </div>
</template>

<script>
import CheckButton from 'components/content/checkButton/CheckButton.vue'
export default {
  components: {
    CheckButton 
  },
  computed:{
    totalPrice(){
      let totalprice = 0
      // if(this.$store.state.cartList.length == 0) return 0
      for(let item of this.$store.state.cartList){
        if(item.checked){
          totalprice += item.count * item.realPrice
        }
      }
      return totalprice
      // return '￥' + this.$store.state.cartList.filter(item => {
      //   return item.checked
      // }).reduce((preValue,item) => {
      //   return item.realPrice * item.count
      // },0)
    },
    isCheckedAll(){
      if(this.$store.state.cartList.length == 0) return false
      return !this.$store.state.cartList.find(item => !item.checked)
    },
    calculate(){
      return this.$store.state.cartList.filter(item => {
        return item.checked
      }).length
    }
  },
  methods:{
    checkButtonClick(){
      if(this.isCheckedAll){
        this.$store.state.cartList.forEach(item => item.checked = false)
      }else{
        this.$store.state.cartList.forEach(item => item.checked = true)
      }
    }
  }

}
</script>

<style scoped>
  .bottom-bar{
    position: fixed;
    display: flex;
    align-items: center;
    bottom: 49px;
    height: 44px;
    width: 100%;
    background-color: #f6f6f6;
    box-shadow: 0 -2px 3px rgba(0,0,0,0.2);
    font-size: 15px;
    color: #888;
    padding-left: 8px;
  }
  .check-all{
    display: flex;
    align-items: center;
    height: 44px;
    width: 90px;
  }
  .check-button{
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px;
    margin: 4px;
  }  
  .total-price{
    flex: 1;
    height: 44px;
    line-height: 44px;
    text-align: center;
    font-size: 17px;
    color: #666;   
  }
  .calculate{
    width: 110px;
    height: 100%;
    line-height: 44px;
    text-align: center;
    background-color: orangered;
    color:#fff;
    font-size: 16px;
  }
</style>