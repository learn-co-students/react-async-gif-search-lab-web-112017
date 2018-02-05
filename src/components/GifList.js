import React from 'react'

const GifList = props => {
  function handleImage() {
    if (props.gifs.length === 0) {
      return null
    } else {
      console.log(props.gifs);
      return(
        <ul>
          <li><img src={props.gifs[0].images.original.url} alt="alt" width="300px" /></li>
          <li><img src={props.gifs[1].images.original.url} alt="alt" width="300px" /></li>
          <li><img src={props.gifs[2].images.original.url} alt="alt" width="300px" /></li>
        </ul>
      )
    }
  }

  return handleImage()

}

export default GifList
