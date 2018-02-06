import React from 'react'
import GifList from './GifList'
import GifSearch from './GifSearch'
class GifListContainer extends React.Component {

  state = {
    gifData: [],
    searchTerm: 'spooky'
  }

  componentDidMount(){
    this.fetchData()
    .then(json => this.setState({
      gifData: json.data
    }));
  }

  fetchData  = () => {
    return fetch(`http://api.giphy.com/v1/gifs/search?q=${this.state.searchTerm}&api_key=dc6zaTOxFJmzC`)
    .then(res => res.json())
  }

  stateHandler = (term) => {
    this.setState({
      searchTerm: term
    })
  }

  submitHandler = () => {
    this.fetchData().then(json => this.setState({
      gifData: json.data
    }));
  }

  render(){
    return(
    <div>
      <GifSearch stateHandler={this.stateHandler} submitHandler={this.submitHandler}/>
      <GifList data={this.state.gifData} />
    </div>
    )
  }
}

export default GifListContainer
