<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  data(){
    return{
      scroll:null,

    }
  },
  props:{
    probeType:{
      type:Number,
      default:0
    },
    pullUpLoad:{
      type:Boolean,
      default:false
    }
  },
  mounted(){
    // 创建BScroll对象
    this.scroll = new BScroll(this.$refs.wrapper,{
      observeDOM:true,
      click:true,
      probeType:this.probeType,
      pullUpLoad:this.pullUpLoad
    })
    
    // 监听滚动位置
    this.scroll.on('scroll',position => {
      this.$emit('scroll',position)
    })

    // 监听上拉加载更多
    if(this.pullUpLoad){
      this.scroll.on('pullingUp',() => {
        this.$emit('pullingUp')
      })
    }
  },
  methods:{
    refresh(){
      this.scroll.refresh()
    },
    scrollTo(x,y,time){
      this.scroll.scrollTo(x,y,time)
    },
    getScrollY(){
      return this.scroll ? this.scroll.y : 0
    }
  }
}
</script>

<style>

</style>