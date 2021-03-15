<template>
  <div id="detail-nav-bar">
    <nav-bar>
      <div slot="left" class="back">
        <img src="~assets/img/common/back.svg" alt="" @click="backClick">
      </div>
      <div slot="center" class="title">
        <div v-for="(item,index) in titles" 
             :key="index" 
             class="title-item"
             :class="{active:index == currentIndex}"
             @click="titleClick(index)">
          <span>{{item}}</span>
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
export default {
  components: { 
    NavBar 
  },
  data(){
    return{
      titles:['商品','参数','评论','推荐'],
      currentIndex:0
    }
  },
  methods:{
    titleClick(index){
      this.currentIndex = index
      this.$emit('titleClick',index)
    },
    backClick(){
      this.$router.back()
    }
  }
}
</script>

<style scoped>
  #detail-nav-bar{
    background: #fff;
    position: fixed;
    left: 0;
    right: 0;
    z-index: 9
  }
  .back img{
    height: 18px;
    margin-top: 13px;
  }
  .title{
    display: flex;
    font-size: 14px;
  }
  .title-item{
    flex: 1;
  }
  .active{
    color: var(--color-tint);
    
  }
  .active span{
    padding: 5px 3px;
    border-bottom: 3px solid var(--color-tint);
  }
</style>