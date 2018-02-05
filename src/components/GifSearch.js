import React from 'react'

class GifSearch extends React.Component {
  state = {
    searchTerm: ""
  }

  inputChange = (e) => {
    this.setState({
      searchTerm: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.fetchGifs(this.state.searchTerm)
    this.setState({
      searchTerm: ""
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={ this.handleSubmit }>
          <input type="text" value={ this.state.searchTerm } onChange={ this.inputChange }></input>
          <input type="submit" value="Search"></input>
        </form>
      </div>
    )
  }

}

export default GifSearch
