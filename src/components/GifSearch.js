import React from "react"

class GifSearch extends React.Component {

  state = {
      searchTerm: ""
    }

  handleInputChange = (e) => {
    this.setState({
      searchTerm: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.searchGif(this.state.searchTerm)
  }

  render() {
  return(
    <form onSubmit={this.handleSubmit}>
      <input type="text" value={this.state.searchTerm} onChange={this.handleInputChange} />
      <input type="submit" value="Search GIFs" />
    </form>
    )
  }
}

export default GifSearch
