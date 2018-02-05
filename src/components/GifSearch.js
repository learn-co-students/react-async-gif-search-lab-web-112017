import React from 'react'

const GifSearch = ({handleSearchTermListener, handleSearchSubmit}) => {
  return(
    <form>
      <input type="text" onChange={handleSearchTermListener}></input>
      <input type="submit" value="submit" onClick={handleSearchSubmit}></input>
    </form>
  )
}

export default GifSearch
