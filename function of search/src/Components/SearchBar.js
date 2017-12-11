import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      val: ''
    };
    this.handleChangeVal = this.handleChangeVal.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleKeyUpSearch = this.handleKeyUpSearch.bind(this);
  }
  handleChangeVal(e){
    let {value} = e.target;
    this.setState({
      val:value
    })
  }
  handleSearch(){
    this.props.searchBooks(this.state.val)
  }
  handleKeyUpSearch(e){
    if(e.keyCode === 13){
      this.handleSearch();
    }
  }
  render() {
    return (
      <div className="input-group input-group-lg">
        <span className="input-group-addon">搜索图书:</span>
        <input
          type="text"
          className="form-control"
          placeholder="Search Books"
          onKeyUp={this.handleKeyUpSearch}
          onChange={this.handleChangeVal}
          value={this.state.val}
        />
        <span className="input-group-btn">
          <button
            className="btn btn-default"
            type="button"
            onClick={this.handleSearch}
          >搜索</button>
        </span>
      </div>
    );
  }

}

export default SearchBar;