import React from 'react';

const Gif = ({gif}) => {
  return (
    <div>
      <h3>{gif.title} </h3>
      <img src={gif.images.downsized_medium.url} alt=""/>
    </div>
  )
}

export default Gif
