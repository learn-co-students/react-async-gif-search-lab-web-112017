import React from 'react'
import GifListItem from './GifListItem'

const GifList = ({gifs}) => {
  const gifListItems = gifs.map(g => < GifListItem gif={g} key={g.id}/>)

  return (
    <div>
      {gifListItems}
    </div>
  )
}

export default GifList
