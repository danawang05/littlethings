import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {counter, addFn, cutFn, asyncAdd, asyncCut} from './redux/counter.redux.js';
import App from './App.js';

const store = createStore(counter, compose(
  // 使用处理异步的中间件
  applyMiddleware(thunk),
  // 调试工具的配置
  window.devToolsExtension ? window.devToolsExtension() : null
));

function render(){
  ReactDOM.render(
    <App
      store={store}
      addFn={addFn}
      cutFn={cutFn}
      asyncAdd={asyncAdd}
      asyncCut={asyncCut}
    />,
    document.getElementById('root')
  );
}

render();

store.subscribe(render);

