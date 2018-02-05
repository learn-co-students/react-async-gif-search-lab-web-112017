import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends React.Component {

  state = {
    gifs: []
  }

  fetchGifs = (query) => {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC`)
      .then(res => res.json())
      .then(json => this.updateGifs(json.data.slice(0,3)))
  }

  updateGifs = (data) => {
    this.setState({
      gifs: data
    })
  }

  render() {
    return (
      <div>
        <GifSearch fetchGifs={ this.fetchGifs }/>
        <GifList gifs={ this.state.gifs }/>
      </div>
    )
  }
}

export default GifListContainer
