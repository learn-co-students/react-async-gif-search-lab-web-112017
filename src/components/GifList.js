import React from 'react'

const GifList = (props) => {
  
  const gifs = props.gifs.map((gif) => (<li key={gif.id}><img alt="from-giphy" src={gif.images.original.url}></img></li>))

  return(
    <ul>{gifs}</ul>
  )
}

export default GifList
