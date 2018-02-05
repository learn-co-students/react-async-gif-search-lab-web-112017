import React from "react"

const GifList = (props) => {
  // console.log()
  return(
    <ul>
      {props.gifs.map(gif => {console.log(gif); return <li key={gif.id}><img src={gif.images.original.url} /></li>})}
    </ul>
  )
}

export default GifList
