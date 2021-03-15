import Vue from 'vue'
import Vuex from 'vuex'
// 1.安装插件
Vue.use(Vuex)
// 2.创建Store对象
const store = new Vuex.Store({
  state:{
    cartList:[]
  },
  mutations:{
    addCart(state,payload){
      // console.log(payload);
      let oldProduct = state.cartList.find(item => item.iid == payload.iid)
      if(oldProduct) oldProduct.count += 1
      else{
        payload.count = 1
        payload.checked = true
        state.cartList.push(payload)
      }
    }
  },
  
})
// 3.挂载Vue实例上
export default store