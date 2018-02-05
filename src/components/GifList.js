import React from 'react';
import Gif from './Gif'

const GifList = ({gifs}) => {
  return (
  <div>
  {gifs.map((gif) => < Gif key={gif.id} gif={gif}/>)}
  </div>
)
}

export default GifList;
