import React, { useRef, useState, useEffect } from 'react'
import '../lib/index.css'
import chunkArray from "../lib/chunkArray";
import Loading from "./Loading";

export default (props) => {

    const container = useRef()
    const endOfList = useRef()

    // props
    const {
        renderItem = () => null,
        loadingComponent = () => null,
        data = [],
        itemsPerRender = 3,
        containerClasses = '',
        defaultLoading = true,
        defaultLoadingColor = '#18191A'
    } = props

    // Data
    let [page, setPage] = useState(0) // page represents the index of last small array in the list
    let [loading, setLoading] = useState(false)
    let [items, setItems]= useState([])
    let [itemsToDisplay, setItemsToDisplay]= useState([]) // the list of items to be rendered

    // Methods

    // set items to display
    const updateList = () => {
        items = chunkArray(data,itemsPerRender)
        setItems(items) // chunkArray(data,itemsPerRender) to get array of small arrays
        itemsToDisplay = items[0]
        setItemsToDisplay(itemsToDisplay)
    }

    // load more items when scrolling to the end of the list
    const loadItems = () => {
            
        if(page === items.length - 1) return
        
        const element = endOfList.current;
        if(!element) return

        const position = element.getBoundingClientRect();

        // checking whether fully visible
        if((position.top >= 0 && position.bottom <= window.innerHeight) && !loading) {
            loading = true
            setLoading(loading)
            page = page + 1
            setPage(page)
            setTimeout(() => {
                itemsToDisplay = [...itemsToDisplay, ...items[page]]
                setItemsToDisplay(itemsToDisplay)
                loading = false
                setLoading(loading)
                loadItems()
            }, 500);
        }
    }

    // component lifecycle
    useEffect(()=>{
        updateList()
        loadItems()
        container.current.addEventListener('scroll', loadItems)
        
    
        return(()=>{
            container.current.removeEventListener('scroll', loadItems)
        })

    },[data])


    return (
        <div id="container" ref={container} className={containerClasses.toString()}>

            {/* <!-- items rendering --> */}
            { itemsToDisplay.map((item,index) => renderItem({item,index}))}

            {
                loading ?
                    // !-- Loading component -->
                    defaultLoading
                    ? 
                        <div id="loading-wrapper">
                            <Loading color={defaultLoadingColor}/>
                        </div>
                    :
                        <div id="loading-wrapper">
                            { loadingComponent() }
                        </div>
                : null
            }
            
            {/* <!-- list footer --> */}
            <div className={((page === items.length - 1) || loading) ? 'hidden' : ''} id="end-of-list" ref={endOfList}/>
                
        </div>

    )
}
