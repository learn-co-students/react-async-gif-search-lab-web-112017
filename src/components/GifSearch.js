import React from 'react'

const GifSearch = ({searchTerm, handleFormChange, handleFormSubmit}) => {
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input type="text" onChange={handleFormChange} value={searchTerm}></input>
        <input type="submit" value="search"></input>
      </form>
    </div>
  )
}

export default GifSearch
