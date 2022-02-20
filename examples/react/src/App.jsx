import React, {useState} from 'react'
import LazyList from 'lazy-load-list/react'
import Github from './components/Github'
import colors from './colors'

function App() {

  const [copied, setCopied] = useState('')

  const copyColor = (color) => {
    window.navigator.clipboard.writeText(color)
    showCopiedText(color)
  }
  
  const showCopiedText = (color) => {
    setCopied(color)
    setTimeout(() => {
      setCopied('')
    }, 800);
  }

  const renderItem = ({item, index}) => (
    <div key={index} onClick={()=>copyColor(item.hex)} className="item" style={{backgroundColor: item.hex}}>
      <div className="copy">{ item.hex }</div>
    </div>
  )
  return (
    <>
      <Github />
      <main>
        
        <h1>
          Random 500 Colors
        </h1>
        
        <h4>
          example for <a href="https://github.com/omer73364/lazy-load-list" target="blank">lazy load list</a> on React js
        </h4>

        {
          copied ?
          <h4 className="cpoied">
            { `Color ${copied} copied to clipboard` }
          </h4> : null
        }
        
        <div className="container">
          <LazyList
            data={colors}
            itemsPerRender={15}
            containerClasses="list"
            defaultLoadingColor="#222"
            renderItem={renderItem}
          />
        </div>

      </main>
    </>
  )
}

export default App
