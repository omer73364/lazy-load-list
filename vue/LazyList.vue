<!-- HTML -->
<template>
<div :class="`${containerClasses}`">
  <div id="icons-container" ref="container">

    <!-- items rendering -->
    <div 
      v-for="(item,index) in itemsToDisplay" 
      :key="index" 
    >
      <slot 
        :item="item"
      ></slot>
    </div>

    <template v-if="loading">
      <!-- Loading component -->
      <div v-if="defaultLoading" id="loading-wrapper">
          <Loading />
      </div>
      <slot v-else name="loading"></slot>
    </template>

    <template v-else-if="(page !== items.length - 1)">
      <!-- list footer -->
      <div id="end-of-list" ref="end-of-list"/>
    </template>

  </div>
</div>
</template>

<!-- JAVASCRIPT -->
<script>
  import chunkArray from "../lib/chunkArray";
  import Loading from "./Loading.vue";
  export default {
    name: 'LazyList',
    components:{Loading},
    props:{
      data:{
        type: Array,
        default: () => [],
      },
      itemsPerRender:{
        type: Number,
        default: 3,
      },
      containerClasses:{
        type: String,
        default: '',
      },
      defaultLoading:{
        type: Boolean,
        default: true,
      },
    },
    created(){
      const chunckedArray = chunkArray(this.data,this.itemsPerRender) // chunkArray(data,itemsPerRender) to get array of small arrays
      this.items = chunckedArray
      this.itemsToDisplay =  [...chunckedArray[0]]
    },
    mounted(){
      this.endOfList = this.$refs["end-of-list"]
      this.$refs['container'].addEventListener('scroll', this.loadItems)
    },
    beforeUnmount(){
      this.$refs['container'].removeEventListener('scroll', this.loadItems)
    },
    data(){
      return {
        items: [],
        page: 0, // page represents the index of last small array in the list
        loading: false,
        itemsToDisplay: [], // the list of items to be rendered
        endOfList: null
      }  
    },
    methods:{
      // load more items when scrolling to the end of the list
      loadItems(){
        if(this.page === this.items.length - 1) return
        
        const element = this.endOfList;
        if(!element) return
        
        const position = element.getBoundingClientRect();

        // checking whether fully visible
        if((position.top >= 0 && position.bottom <= window.innerHeight) && !this.loading) {
            this.loading = true
            this.page++
            setTimeout(() => {
                this.itemsToDisplay = [...this.itemsToDisplay, ...this.items[this.page]]
                this.loading = false
            }, 500);
        }
      },
    }
  }
</script>

<!-- CSS -->
<style>
    #icons-container{
        width: 100%;
        height: 100%;
        overflow-y: auto;
        overflow-x: hidden;
        scroll-behavior: smooth;
        scrollbar-width: thin;
    }
    #end-of-list{
        height: 32px;
        width: 100%;
    }
    #loading-wrapper{
        width: 100%;
        height: 32px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>