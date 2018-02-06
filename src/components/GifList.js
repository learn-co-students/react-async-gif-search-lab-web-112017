import React from 'react'

const GifList = (props) => {
  let returnGifs;
  if (props.data.length > 0){
    returnGifs = props.data.map((gif)=><img key={gif.id} src={gif.images['fixed_height'].url}></img>)
  }
  return (
    <ul className='container'>
      {returnGifs}
    </ul>
  )
}

export default GifList
