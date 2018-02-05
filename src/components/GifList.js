import React from 'react'

const GifList = (props) => {
  console.log(props.gifs)

  const gifLis = props.gifs.map((gif) => (<li key={gif.id}><img src={gif.images.original.url}></img></li>))

  return(
    <ul>
      { gifLis }
    </ul>
  )
}

export default GifList
