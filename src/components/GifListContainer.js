import React from 'react';
import GifList from './GifList'
import GifSearch from './GifSearch'

const baseURL = 'http://api.giphy.com/v1/gifs/search?q='

const key = 'dc6zaTOxFJmzC'

class GifListContainer extends React.Component {

  state = {
    gifs: [],
    queryTerm: 'cat'
  }

  handleSubmit = (queryTerm) => {
    fetch(`${baseURL}?q=${queryTerm}&api_key=${key}`)
    .then(res => res.json())
    .then(data => this.setState({gifs: data.data}))
  }

  render () {
    return (
      <div className='gif-container'>
        <GifSearch queryTerm={this.state.queryTerm} handleSubmit={this.handleSubmit}/>
        <GifList gifs={this.state.gifs}/>
      </div>
    )
  }
}

export default GifListContainer;
