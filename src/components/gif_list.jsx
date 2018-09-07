import React, { Component } from 'react';

import Gif from './gif.jsx'

class GifList extends Component {
  render() {
    return(
      this.props.gifs.map(gif => <Gif id={gif.id} selectGif={this.props.selectGif} key={gif.id} /> )
    )
  }
}

export default GifList
