import React from 'react';
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';

const URL = `http://api.giphy.com/v1/gifs/search?q=`
const API_KEY = `&api_key=dc6zaTOxFJmzC`

class GifListContainer extends React.Component {
  state = {
    gifs: [],
    searchTerm: "cats"
  }

  componentDidMount() {
    this.getGifs()
    this.setState ({
      searchTerm: ''
    })
  }

  getGifs = () => {
    fetch(`${URL}${this.state.searchTerm}${API_KEY}`).then(resp=> resp.json()).then(res=> {
      this.setState({
        gifs: res.data.slice(0, 3)
      })
    })
  }


 handleInputChange = (event) =>{
   this.setState({
     searchTerm: event.target.value
   })
 }

 handleSubmit = (event) => {
   event.preventDefault();
   this.getGifs()
   this.setState ({
     searchTerm: ''
   })
 }


  render() {
    console.log(this.state)
    return (
      <div>
      < GifSearch
         searchTerm={this.state.searchTerm}
         handleInputChange={this.handleInputChange}
         handleSubmit={this.handleSubmit}
      />
      < GifList gifs={this.state.gifs} />
      </div>
    )
  }
}

export default GifListContainer;
