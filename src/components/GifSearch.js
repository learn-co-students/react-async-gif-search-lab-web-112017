import React from 'react';

class GifSearch extends React.Component {

  searchHelper = (e) => {
    e.preventDefault()
    let value = e.target.searchTerm.value
    this.props.handleSubmit(value)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.searchHelper}>
          <input
            type='text'
            id='searchTerm'/>
          <input type='submit' value='Search' />
        </form>
      </div>
    )
  }
}

export default GifSearch;
