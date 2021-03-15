<template>
  <div class="profile">
    <nav-bar class="nav-bar"><div slot="center">个人信息</div></nav-bar>
    <user-info></user-info>
    <acount-info></acount-info>
    <nomal-list-view :list-data="orderList"/>
    <nomal-list-view :list-data="serviceList"/>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue';
import UserInfo from './childComp/UserInfo.vue';
import AcountInfo from './childComp/AcountInfo.vue';
import NomalListView from './childComp/NomalListView.vue';
export default {
  components:{
    NavBar,
    UserInfo,
    AcountInfo,
    NomalListView,
  },
  data(){
    return{
		  orderList: [
			  {icon: 'message.svg', info: '我的消息'},
			  {icon: 'pointer.svg', info: '积分商城'},
			  {icon: 'vip.svg', info: '会员卡'},
		  ],
		  serviceList: [
			  {icon: 'cart.svg', info: '我的购物车'},
			  {icon: 'shopping.svg', info: '下载购物APP'},
      ]      
    }
  }
};
</script>

<style scoped>
.profile{
  background-color: #f2f2f2;
}
.nav-bar{
  color: #fff;
  background-color: var(--color-tint);  
}
</style>