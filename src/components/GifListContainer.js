import React from 'react';
import GifList from './GifList'
import GifSearch from './GifSearch'

class GifListContainer extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      gifList: [],
      searchTerm: ""
    }
  }

  // componentDidMount() {
  //
  //   fetch("http://api.giphy.com/v1/gifs/search?q=" + this.state.searchTerm + "&api_key=dc6zaTOxFJmzC")
  //   .then(response => response.json())
  //   .then(json => this.setState({
  //     gifList: json.slice(0,3)
  //   }))
  // }

  handleSearchTermListener = (event) => {
    event.preventDefault()
    console.log(event.target.value)
    const enteredText = event.target.value
    console.log(this.state.searchTerm)
    this.setState({
      searchTerm: enteredText
    })
  }

  handleSearchSubmit = (event) => {
    event.preventDefault()
    debugger
    fetch("http://api.giphy.com/v1/gifs/search?q=" + this.state.searchTerm + "&api_key=dc6zaTOxFJmzC")
    .then(response => response.json())
    .then(json => this.setState({
      gifList: json.data.slice(0,3)
    }));
  }

  render() {
    return(
      <div>
        <GifList gifList={this.state.gifList} />
        <GifSearch handleSearchTermListener={this.handleSearchTermListener} handleSearchSubmit={this.handleSearchSubmit}/>
      </div>
    )
  }
}

export default GifListContainer
