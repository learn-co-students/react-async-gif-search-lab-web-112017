import React, {Component} from 'react'

export default class GifListContainer extends Component {
  handleSearch = event => {
    event.preventDefault()
    let input = document.querySelector('#input').value
    this.props.handleSearch(input)
  }

  render() {
    return(
      <form onSubmit={this.handleSearch}>
        <input type="text" id="input"/>
        <input type="submit" />
      </form>
    )
  }
}
