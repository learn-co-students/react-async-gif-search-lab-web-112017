import React from 'react'

import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

class GifListContainer extends React.Component {
  state = {
    gifs: []
  }

  getGifs = (userSearch) => {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${userSearch}&api_key=dc6zaTOxFJmzC`)
    fetch(`http://api.giphy.com/v1/gifs/search?q=cats&api_key=dc6zaTOxFJmzC`)
    .then( res => res.json())
    .then( gifData => this.updateGifData(gifData.data))
  }

  updateGifData = (gifData) => {
    this.setState({
      gifs: gifData
    })
  }

  render() {
    return(
      <div>
        <GifSearch getGifs={this.getGifs}/>
        <GifList gifs={this.state.gifs}/>
      </div>
    )
  }

}



export default GifListContainer
