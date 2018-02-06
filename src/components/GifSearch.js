import React from 'react'

class GifSearch extends React.Component {

  handleType = (e) => {
    this.props.stateHandler(e.target.value)
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.submitHandler()
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <input type='text' onChange={this.handleType}></input>
        <input type='submit'></input>
      </form>
    )
  }
}

export default GifSearch
