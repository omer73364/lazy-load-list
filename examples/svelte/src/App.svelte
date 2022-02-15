<script>
  import LazyList from 'lazy-load-list/svelte'
  import Github from './Components/Github.svelte';
  import './index.css'
  import colors from './colors'
  
  let copied = ''

  const copyColor = (color) => {
    window.navigator.clipboard.writeText(color)
    showCopiedText(color)
  }

  const showCopiedText = (color) => {
    copied = color
    setTimeout(() => {
      copied = ''
    }, 800);
  }

</script>

<Github/>
<main>
    
  <h1>
    Random 500 Colors
  </h1>
  
  <h4>
    example for <a href="https://github.com/omer73364/lazy-load-list" target="blank">lazy load list</a> on Svelte js
  </h4>

  {#if copied}
  <h4 class="cpoied">
    { `Color ${copied} copied to clipboard` }
  </h4>
  {/if}
  
  <div class="container">
    <LazyList
      data={colors}
      itemsPerRender={15}
      containerClasses="list"
      defaultLoadingColor="#222"
      let:item={item}
    >
      <div on:click={()=>copyColor(item?.hex)} class="item" style={`background-color: ${item?.hex}`}>
        <div class="copy">{ item?.hex }</div>
      </div>
    </LazyList>
  </div>

</main>