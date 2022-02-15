<!-- JAVASCRIPT -->
<script>
    import chunkArray from "../lib/chunkArray";
    import { onDestroy, onMount } from "svelte";
    import Loading from "./Loading.svelte";

    // props
    export let data = []
    export let itemsPerRender = 3
    export let containerClasses = ''
    export let defaultLoading = true
    export let defaultLoadingColor = '#18191A'

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
        const position = element.getBoundingClientRect();

        // checking whether fully visible
        if((position.top >= 0 && position.bottom <= window.innerHeight) && !loading) {
            loading = true
            page++
            setTimeout(() => {
                itemsToDisplay = [...itemsToDisplay, ...items[page]]
                loading = false
            }, 500);
        }
    }

    // component lifecycle
    onMount(()=>{
        document.getElementById('container').addEventListener('scroll', loadItems)
    })

    onDestroy(()=>{
        document.getElementById('container').removeEventListener('scroll', loadItems)
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
            <slot name="loading"></slot>
        {/if}
    {:else if (page !== items.length - 1)}
        <!-- list footer -->
        <div id="end-of-list"/>
    {/if}
        
</div>

<!-- CSS -->
<style>
    #container{
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