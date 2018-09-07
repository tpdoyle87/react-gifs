import React, { Component } from 'react';
import giphy from 'giphy-api'

import SearchBar from './search_bar.jsx'
import Gif from './gif.jsx'
import GifList from './gif_list.jsx'

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      gifs: [],
      selectedGifId: "xT9IgDEI1iZyb2wqo8"
    }
  }


  search = (query) => {
    giphy("9J8x1QSfzKgl5SRINng9gnHrlOGtDh8j").search({
      q: query,
      limit: 10
      }, (error, result) => {
      this.setState({
        gifs: result.data
      })
    })
  };

  selectGif = (id) => {
    this.setState({
      selectedGifId: id
    })
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar search={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId}/>
          </div>
        </div>
        <div className="right-scene">
          <div className="gif-list">
            <GifList gifs={this.state.gifs} selectGif={this.selectGif} className="gif-list"/>
          </div>
        </div>
      </div>
    );
  }
}

export default App
