import React from "react";
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'


class GifListContainer extends React.Component {

  state = {
    searchTerm: "cats",
    gifs: []
  }


  fetchGif = () => {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${this.state.searchTerm}}&api_key=dc6zaTOxFJmzC`)
    .then(res => res.json())
    .then(jsondata => {this.setState({
      gifs: jsondata.data
    })})
  }

  componentDidMount = () => {
    this.fetchGif();
    console.log(this.state)

  }

  handleSearch = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }


  handleSubmit = (event) => {
    event.preventDefault();
    this.fetchGif();
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <GifSearch onSubmit={this.handleSubmit} onSearch={this.handleSearch} />
        <GifList gifs={this.state.gifs}/>

      </div>

    )
  }

}

export default GifListContainer
