import React from 'react'

class GifSearch extends React.Component {

  state = {
    userInput: ''
  }

  handleUserInput = (e) => {
    this.setState({
      userInput: e.target.value
    })
  }

  handleUserSubmit = (e) => {
    e.preventDefault()
    this.props.getGifs(this.state.userInput)
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleUserSubmit}>
          <input type="text" value={this.state.value} onChange={this.handleUserInput}></input>
          <input type="submit" value="Search"></input>
        </form>
      </div>
    )
  }
}

export default GifSearch
