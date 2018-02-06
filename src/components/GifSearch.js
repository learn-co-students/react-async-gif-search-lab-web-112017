import React from 'react'

const GifSearch = (props) => {

  return(
  <form onSubmit={props.onSubmit}>
    <input type="text" />
    <input type="submit" value="submit" name="submit" />
  </form>
)
}

export default GifSearch
