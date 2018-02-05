import React from 'react';

const GifList = ({ gifList }) => {
  return(
    <ul>
      {gifList.map((gif) => <li><img src = {gif.images.downsized.url} /></li>)}
    </ul>
  )
}

export default GifList
