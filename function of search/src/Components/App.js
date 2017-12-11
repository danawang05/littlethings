import React, { Component } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar.js';
import ListContainer from './ListContainer.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      pageSize: 4,
      currentPage: 1,
    };
    this.searchBooks = this.searchBooks.bind(this);
    this.changePage = this.changePage.bind(this);
  }
  componentDidMount() {
    this.searchBooks()
  }
  searchBooks(query){
    if(!query) query = 'node';
    axios.get('/v2/book/search', {
      params: {
        q: query,
        count: 100
      }
    }).then((res) => {
      if(res.status === 200){
        let {books} = res.data;
        books = books.filter((item) => {
          return item.summary;
        });
        this.setState({books})
      }
    })
  }
  changePage(currentPage){
    this.setState({currentPage})
  }
  render() {
    let {books, pageSize, currentPage} = this.state;
    let total = books.length;

    let filterBooks = books.slice((currentPage - 1) * pageSize, currentPage * pageSize);

    return (
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-heading">
            <SearchBar searchBooks={this.searchBooks}/>
          </div>
          <div className="panel-body">
            <ListContainer
              books={filterBooks}
              total={total}
              pageSize={pageSize}
              currentPage={currentPage}
              changePage={this.changePage}
            />
          </div>
        </div>
      </div>
    );
  }

}

export default App;
