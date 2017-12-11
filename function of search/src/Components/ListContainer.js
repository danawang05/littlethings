import React, { Component } from 'react';
import ListItem from './ListItem.js';
import { Pagination } from 'antd';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './List.css';

class ListContainer extends Component {

  render() {
    let listItems = this.props.books.map((item) => {
      return (
        <CSSTransition
          timeout={{
            enter: 500,
            exit: 300
          }}
          classNames='fade'
          key={item.id}
        >
          <ListItem {...item}/>
        </CSSTransition>
      )
    });
    return (
      <div>
        <ul className="list-group">
          <TransitionGroup>
            {listItems}
          </TransitionGroup>
        </ul>
        <Pagination
          size="small"
          total={this.props.total}
          current={this.props.currentPage}
          pageSize={this.props.pageSize}
          onChange={this.props.changePage}
          showQuickJumper 
        />
      </div>
    );
  }

}

export default ListContainer;