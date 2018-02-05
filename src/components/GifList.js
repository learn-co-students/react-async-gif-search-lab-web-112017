import React from "react";


const GifList = (props) => {
  console.log(props)

  let gifs = props.gifs.map(gif => <li> <img src={gif.images.downsized.url} alt="img"/></li>)


  return (

    <div>
      <ul>
        {gifs}
      </ul>


    </div>
  )


}



export default GifList
