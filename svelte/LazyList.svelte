<!-- JAVASCRIPT -->
<script>
    import '../lib/index.css'
    import chunkArray from "../lib/chunkArray";
    import { onDestroy, onMount } from "svelte";
    import Loading from "./Loading.svelte";

    // props
    export let data = []
    export let itemsPerRender = 3
    export let containerClasses = ''
    export let defaultLoading = true
    export let defaultLoadingColor = '#18191A'

    // watching changes
    $:{
        items = chunkArray(data,itemsPerRender)
        page = 0
        loading = false
        itemsToDisplay = items[0]
        loadItems()
    }

    // data
    let items = chunkArray(data,itemsPerRender) // chunkArray(data,itemsPerRender) to get array of small arrays
    let page = 0 // page represents the index of last small array in the list
    let loading = false

    let itemsToDisplay = items[0] // the list of items to be rendered

    // methods
    // load more items when scrolling to the end of the list
    const loadItems = () => {
            
        if(page === items.length - 1) return
        
        const element = document.getElementById("end-of-list");
        if(!element) return
        
        const position = element.getBoundingClientRect();

        // checking whether fully visible
        if((position.top >= 0 && position.bottom <= window.innerHeight) && !loading) {
            loading = true
            page++
            setTimeout(() => {
                itemsToDisplay = [...itemsToDisplay, ...items[page]]
                loading = false
                loadItems()
            }, 500);
        }
    }

    // component lifecycle
    onMount(()=>{
        loadItems()
        document.getElementById('container').addEventListener('scroll', loadItems)
    })

    onDestroy(()=>{
        if(document.getElementById('container')){
            document.getElementById('container').removeEventListener('scroll', loadItems)
        }
    })

</script>

<!-- HTML -->
<div id="container" class={containerClasses}>

    <!-- items rendering -->
    {#each itemsToDisplay as item}
        <slot item={item}></slot>
    {/each}

    {#if loading}
        <!-- Loading component -->
        {#if defaultLoading}
            <div id="loading-wrapper">
                <Loading color={defaultLoadingColor}/>
            </div>
        {:else}
            <div id="loading-wrapper">
                <slot name="loading"></slot>
            </div>
        {/if}
    {/if}
    <!-- list footer -->
    <div hidden={!(page !== items.length - 1)} id="end-of-list"/>
        
</div>