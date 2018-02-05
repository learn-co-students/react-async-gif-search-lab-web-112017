import React from "react";
import GifSearch from "./GifSearch";
import GifList from "./GifList";

class GifListContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: []
    }
  }

  searchGif = (searchTerm) => {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=dc6zaTOxFJmzC`)
      .then(r => r.json())
      .then(json => this.setState({gifs: json.data.slice(0, 3) }))
  }

  render() {
    return (
      <div>
        <GifSearch searchGif={this.searchGif}/>
        <GifList gifs={this.state.gifs}/>
      </div>
    )
  }
  }
export default GifListContainer
