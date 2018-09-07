import React, { Component } from 'react';


class SearchBar extends Component {

  handleClick = (event) => {
    this.props.search(event.target.value)
  }

  render() {
    return(
      <input type="text" placeHolder="Search Gifs" onChange={ this.handleClick } className="form-control form-search" />
    )
  }
}

export default SearchBar;
