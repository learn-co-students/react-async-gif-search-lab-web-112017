import React from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

class GifListContainer extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      gifs: [],
      searchTerm: ""
    }
  }

  fetchGifs = (query) => {
    const URL = "http://api.giphy.com/v1/gifs/search?" + `q=${query}` + "&api_key=dc6zaTOxFJmzC"

    fetch(URL)
    .then(resp => resp.json())
    .then(json => this.setState({
      gifs: json.data
    }))
  }

  handleFormChange = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  handleFormSubmit = (event) => {
    event.preventDefault()
    this.fetchGifs(this.state.searchTerm)
  }

  render() {
    return (
      <div>
        <div>
          < GifSearch searchTerm={this.state.searchTerm} handleFormChange={this.handleFormChange} handleFormSubmit={this.handleFormSubmit}/>
        </div>
        <div>
          < GifList gifs={this.state.gifs}/>
        </div>
      </div>
    )
  }
}

export default GifListContainer
