import React from "react";
import GifList from './GifList';
import GifSearch from './GifSearch'

class GifListContainer extends React.Component {
  state = {
    gifs: []
  }

  componentDidMount(){
    this.getGifs();
  }

  getGifs = (str) => {

    return fetch(`http://api.giphy.com/v1/gifs/search?q=${str}&api_key=dc6zaTOxFJmzC`)
    .then(response => response.json())
    .then(json => {
      this.setState({gifs: json.data})
      console.log(json.data);
      console.log('logged json')
    })
  }

  render() {
    return (
      <div>
        <GifSearch onSubmit={this.handleSearchSubmit} />
        <GifList gifs={this.state.gifs} />
      </div>
    )
  }

  handleSearchSubmit = (e) => {
    e.preventDefault()

    this.getGifs(e.target.firstElementChild.value);


  }
}
export default GifListContainer
