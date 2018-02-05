import React from 'react';

const GifSearch = props => {
  return (
    <div>
    <form onSubmit={props.handleSubmit}>
     <input
        type="text"
        placeholder="Search for gifs"
        value={props.searchTerm}
        onChange={props.handleInputChange}
      />
    <input type="submit" value="Search!"/>
    </form>
    </div>
  )
}

export default GifSearch;
