import React from 'react'

const GifList = (props) => {

  const gifs = props.gifs.map(gif => <li><img src={gif.images.downsized.url}/></li>)
  return (
    <div>
      <ul>
        {gifs}
      </ul>
    </div>
  )
}

export default GifList
