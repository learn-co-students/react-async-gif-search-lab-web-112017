import React from 'react';

class GifList extends React.Component {

  gifRenderHelper = () => {
    if (this.props.gifs.length === 0) {
      return <div><h1>No gifs here! Search above</h1><img src='http://img.picturequotes.com/2/588/587383/sadness-quote-2-picture-quote-1.jpg'/></div>
    } else {
      console.log(this.props.gifs)
      return this.props.gifs.map((g) => <li><img src={g.images.original.url}/></li>)
    }
  }

  render() {
    return (
      <div>
        <ul>
          {this.gifRenderHelper()}
        </ul>
      </div>
    )
  }
}

export default GifList;
