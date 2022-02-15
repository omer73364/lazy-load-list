
<template>
  <Github />
  <main>
    
    <h1>
      Random 500 Colors
    </h1>
    
    <h4>
      example for <a href="https://github.com/omer73364/lazy-load-list" target="blank">lazy load list</a> on Vue js
    </h4>

    <h4 v-show="copied" class="cpoied">
      {{ `Color ${copied} copied to clipboard` }}
    </h4>
    
    <div class="container">
      <LazyList
        :data="colors"
        :itemsPerRender="15"
        containerClasses="list"
        defaultLoadingColor="#222"
      >

        <template v-slot="{item}">
          <div @click="copyColor(item.hex)" class="item" :style="`background-color: ${item.hex}`">
            <div class="copy">{{ item.hex }}</div>
          </div>
        </template>

      </LazyList>
    </div>

  </main>
</template>


<script>
import LazyList from 'lazy-load-list/vue'
import Github from './components/Github.vue'
import './index.css'
import colors from './colors'

export default {
  components: {
    LazyList,
    Github
  },
  data(){
    return {
      // 100 items of fruits
      colors,
      copied:''
    }
  },
  methods:{
    copyColor(color){
      window.navigator.clipboard.writeText(color)
      this.showCopiedText(color)
    },
    showCopiedText(color){
      this.copied = color
      setTimeout(() => {
        this.copied = ''
      }, 800);
    }
  }

}
</script>