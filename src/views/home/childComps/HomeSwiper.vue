<template>
   <swiper>
      <swiper-item v-for="item in banner" :key="item.id">
        <a :href="item.link">
          <img :src="item.image" alt="" @load="imageLoad">
        </a>
      </swiper-item>
    </swiper>
</template>

<script>
import {Swiper,SwiperItem} from 'components/common/swiper'

export default {
  components:{
    Swiper,
    SwiperItem
  },
  props:{
    banner:{
      type:Array,
      default(){
        return []
      }
    }
  },
  methods:{
    imageLoad(){
      this.$emit('swiperImageLoad')
    }
  }

}
</script>

<style>

</style>