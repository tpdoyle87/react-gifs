import React, { Component } from 'react';

class Gif extends Component {


  handlClick = () => {
    if (this.props.selectGif) {
      this.props.selectGif(this.props.id)
    }
  }

  render() {
  const src = `https://media.giphy.com/media/${this.props.id}/giphy.gif`

    return(
      <img className="gif" onClick={ this.handlClick } src={src} alt="Selected Gif"/>
    )
  }
}

export default Gif
