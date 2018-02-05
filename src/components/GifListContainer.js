import React, {Component} from 'react'
import GifList from './GifList'
import GifSearch from './GifSearch'

const BASE_URL = 'http://api.giphy.com/v1/gifs/search'
const API_KEY = '7ibytI8kGK9aWFWynScdk62bnPZ9KyQA'


export default class GifListContainer extends Component {
  state = {
    gifs: [],
    searchTerm: null
  }

  handleSearch = (input) => {
    fetch(`${BASE_URL}?q=${input}&api_key=${API_KEY}`)
    .then(response => response.json())
    .then(data => this.setState({ gifs: data.data }) )
  }

  render() {
    return(
      <div>
        <GifSearch handleSearch={this.handleSearch}/>
        <GifList gifs={this.state.gifs}/>
      </div>
    )
  }
}
