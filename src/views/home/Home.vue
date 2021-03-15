<template>
  <div id="home">
    <nav-bar class="nav_home">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control :titles="['流行','新款','精选']" 
                   @beActive="beActive"
                   ref="tabControl1"
                   class="sticky"
                   v-show="isSticky"></tab-control>
    <better-scroll class="content" 
                   ref="scroll" 
                   :probe-type="2" 
                   :pull-up-load="true" 
                   @scroll="contentScroll"
                   @pullingUp="loadMore">
      <home-swiper :banner="banner" @swiperImageLoad="swiperImageLoad"></home-swiper>
      <home-recommend :recommend="recommend"></home-recommend>
      <feature-view></feature-view>
      <tab-control :titles="['流行','新款','精选']" 
                   @beActive="beActive"
                   ref="tabControl2"></tab-control>
      <goods-list :goods="goods[currentType].list"></goods-list>
    </better-scroll>
    <back-top @click.native="backTop" v-show="isShowBackTop"></back-top> <!-- 监听组件点击需加入.native -->
  
  </div>
</template>

<script>
import HomeSwiper from './childComps/HomeSwiper'
import HomeRecommend from './childComps/HomeRecommend'
import FeatureView from './childComps/FeatureView.vue'

import NavBar from 'components/common/navbar/NavBar'
import TabControl from 'components/content/tabcontrol/TabControl.vue'
import GoodsList from 'components/content/goods/GoodsList.vue'
import BetterScroll from 'components/common/better-scroll/BetterScroll.vue'
import BackTop from 'components/content/backtop/BackTop.vue'


import {getHomeMultidata,getHomeGoods} from 'network/home.js'
import {debounce} from '@/utils'



export default {
  components:{
    NavBar,
    HomeSwiper,
    HomeRecommend,
    FeatureView,
    TabControl,
    GoodsList,
    BetterScroll,
    BackTop

  },
  data(){
    return{
      banner:[],
      recommend:[],
      goods:{
        'pop':{page:0, list:[]},
        'new':{page:0, list:[]},
        'sell':{page:0, list:[]},
      },
      currentType:'pop',
      isShowBackTop:false,
      isSticky:false,
      tabOffsetTop:0,
      saveY:0
    }
  },
  created(){
    //1.请求多个数据
    this.getHomeMultidata()

    // 2.请求商品数据
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  
    
  },
  mounted(){
    // 3.监听item中图片加载完成

    // this.$bus.$on('imageLoad',() => {
    //   this.$refs.scroll.refresh()
    // })

    const refresh = debounce(this.$refs.scroll.refresh,200)
    this.$bus.$on('homeImageLoad',() => {
      refresh()
    })

  },
  activated(){
    // console.log(this.saveY);
    this.$refs.scroll.scroll.refresh()
    this.$refs.scroll.scrollTo(0, this.saveY, 0)
    
  },
  deactivated(){
    this.saveY = this.$refs.scroll.getScrollY()
    // console.log(this.saveY);
  },
  methods:{
    getHomeMultidata(){
    getHomeMultidata().then(res => {
      // this.result = res
        this.banner = res.data.banner.list
        this.recommend = res.data.recommend.list
        // console.log(this.recommend);
      })
    },
    getHomeGoods(type){
      const page = this.goods[type].page + 1
      getHomeGoods(type,page).then(res => {
        this.goods[type].list = this.goods[type].list.concat(res.data.list)
        this.goods[page] += 1
    })
    },
    beActive(index){
      switch(index){
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
          break
      }
      this.$refs.tabControl1.currentIndex = index
      this.$refs.tabControl2.currentIndex = index
    },
    backTop(){
      // console.log(this.$refs.scroll.scroll);
      this.$refs.scroll.scroll.scrollTo(0,0,500)
    },
    contentScroll(position){
      this.isShowBackTop = position.y < -1000
      this.isSticky = position.y < -this.tabOffsetTop
    },
    loadMore(){
      this.getHomeGoods(this.currentType)
      this.$refs.scroll.scroll.finishPullUp()
    },
    swiperImageLoad(){
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
      // console.log(this.$refs.tabControl2.$el.offsetTop);
    }

  }
};
</script>

<style scoped>
#home{
  /* margin-top: 44px; */
  position: relative;
  /* padding-top: 44px; */
  height: 100vh;

}
.nav_home {
  background-color: var(--color-tint);
  color: #fff;
  z-index: 9; 
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  
}
.sticky{
  position: fixed;
  top: 44px;
  left: 0;
  right: 0;
  z-index: 9;
}


.content{
  position: absolute;
  width: 100%;
  top:44px;
  bottom: 49px;
  overflow: hidden;
}
/* .content{
  height: calc(100% - 93px);
  margin-top: 44px; 
  overflow: hidden;
} */
</style>