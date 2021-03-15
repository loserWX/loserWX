<template>
  <div id="detail">
    <detail-nav-bar @titleClick="jumpContent" ref="detailNavBar"></detail-nav-bar>
    <better-scroll class="content" ref="scroll" @scroll="listenScroll" :probeType="3">
      <detail-swiper :topImages="topImages"></detail-swiper>
      <description :goods="goods"></description>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad" />
      <detail-goods-params :item-params="itemParams" ref="params"></detail-goods-params>
      <detail-comment :comment-info="commentInfo" ref="comment"></detail-comment>
      <goods-list :goods="recommend" class="recommend" ref="recommend"></goods-list>
    </better-scroll>
    <detail-bottom-bar @addToCart="addToCart" />
    <back-top @click.native="backTopClick" v-if="isShow"></back-top>
    <toast message="添加到购物车成功" :isshow="toastshow"></toast>
  </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar.vue'
import DetailSwiper from './childComps/DetailSwiper.vue'
import Description from './childComps/Description.vue'
import DetailShopInfo from './childComps/DetailShopInfo.vue'
import DetailGoodsInfo from './childComps/DetailGoodsInfo.vue'
import DetailGoodsParams from './childComps/DetailGoodsParams.vue'
import DetailComment from './childComps/DetailComment.vue'
import GoodsList from 'components/content/goods/GoodsList.vue'
import DetailBottomBar from './childComps/DetailBottomBar.vue'

import {debounce} from '@/utils'
import {getDetail, Goods, Shop, getRecommend} from 'network/detail'
import BetterScroll from 'components/common/better-scroll/BetterScroll.vue'
import BackTop from 'components/content/backtop/BackTop.vue'
import Toast from '../../components/common/toast/Toast.vue'


export default {
  name:"Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    Description,
    DetailShopInfo,
    BetterScroll,
    DetailGoodsInfo,
    DetailGoodsParams,
    DetailComment,
    GoodsList,
    DetailBottomBar,
    BackTop,
    Toast 
  },
 
  data(){
    return{
      iid: null,
      topImages:[],
      goods:{},
      shop:{},
      detailInfo:{},
      itemParams:{},
      commentInfo:{},
      recommend:[],
      jumpY:[],
      getJumpY:null,
      currentIndex:0,
      isShow:false,
      toastshow:false
    }
  },
  created(){
    // 保存传入的iid
    this.iid = this.$route.params.iid

    // 根据iid请求详细数据
    getDetail(this.iid).then(res => {
      // 1.获取轮播图数据
      this.topImages = res.result.itemInfo.topImages

      // 2.获取商品信息
      this.goods = new Goods(res.result.itemInfo, res.result.columns, res.result.shopInfo.services)

      // 3.获取店铺信息
      this.shop = new Shop(res.result.shopInfo)

      // 4.获取商品详情信息
      this.detailInfo = res.result.detailInfo

      // 5.获取商品参数信息
      this.itemParams = res.result.itemParams
           
      // 6.获取商品评论
      if(res.result.rate.cRate) {
        this.commentInfo = res.result.rate.list[0]
      }   

      // // DOM渲染后的回调函数(用于获取组件的jumpY)(失败，因为图片未加载完成)
      // this.$nextTick(() => {
      //   this.jumpY = []
      //   this.jumpY.push(0)
      //   this.jumpY.push(this.$refs.params.$el.offsetTop)
      //   this.jumpY.push(this.$refs.comment.$el.offsetTop)
      //   this.jumpY.push(this.$refs.recommend.$el.offsetTop)
      //   console.log(this.jumpY);
      // })

    })
    // 请求推荐数据
    getRecommend().then(res => {
      this.recommend = res.data.list
    })

    this.getJumpY = debounce(() => {
      this.jumpY = []
      this.jumpY.push(0)
      this.jumpY.push(this.$refs.params.$el.offsetTop)
      this.jumpY.push(this.$refs.comment.$el.offsetTop)
      this.jumpY.push(this.$refs.recommend.$el.offsetTop)
      // console.log(this.jumpY);
    },100)
    
  },
  mounted(){
    const refresh = debounce(this.$refs.scroll.refresh,200)
    this.$bus.$on('detailImageLoad',() => {
    refresh()
    })

  },
  updated(){

  },
  methods:{
    imageLoad(){
      this.$refs.scroll.refresh()
      this.getJumpY()
    },

    jumpContent(index){
      this.$refs.scroll.scrollTo(0,-this.jumpY[index],600)
    },
    listenScroll(position){
      -position.y > 1000? this.isShow = true : this.isShow = false
      if(position.y > -this.jumpY[1]) this.currentIndex = 0
      if(-this.jumpY[1] >= position.y && position.y > -this.jumpY[2]) this.currentIndex = 1
      if(-this.jumpY[2] >= position.y && position.y > -this.jumpY[3]) this.currentIndex = 2
      if(position.y <= -this.jumpY[3]) this.currentIndex = 3
      this.$refs.detailNavBar.currentIndex = this.currentIndex
      // console.log(this.jumpY);
      // console.log(this.currentIndex);
    },
    backTopClick(){
      this.$refs.scroll.scrollTo(0,0,600)
    },
    addToCart(){
      //获取商品需要加入购物车中的信息
      const product = {}
      product.image = this.topImages[0]
      product.title = this.goods.title
      product.desc = this.goods.desc
      product.price = this.goods.realPrice
      product.realPrice = this.goods.realPrice
      product.iid = this.iid

      //将信息添加到购物车
      // this.$store.state.cartList.push(product)
      // console.log(product);
      this.$store.commit('addCart',product)
      this.toastshow = true
      setTimeout(() => {
        this.toastshow = false
      },1500)
    }
  }
}
</script>

<style scoped>
#detail{
  position: relative;
  z-index: 9;
  background-color: #fff;
  height: 100vh;
}
.content{
  position: absolute;
  top: 44px;
  /* height: calc(100% - 44px); */
  bottom: 49px;
  overflow: hidden;
}
.recommend{
  padding-top: 20px;
}
</style>