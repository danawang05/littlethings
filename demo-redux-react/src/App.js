import React, { Component } from 'react';
import './index.css';

class App extends Component {
  render() {
    let store = this.props.store;
    return (
      <div>
        <div className="container">
          <button
            className="btn add"
            onClick={() => store.dispatch(this.props.addFn())}
          >+</button>
          <span className="num">{store.getState()}</span>
          <button 
            className="btn cut"
            onClick={() => store.dispatch(this.props.cutFn())}
          >-</button>
        </div>
        <div className="container">
          <button
            className="btn add"
            onClick={() => store.dispatch(this.props.asyncAdd())}
          >异步+</button>
          <button 
            className="btn cut"
            onClick={() => store.dispatch(this.props.asyncCut())}
          >异步-</button>
        </div>
      </div>
    );
  }
}

export default App;