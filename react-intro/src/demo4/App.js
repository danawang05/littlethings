import React from 'react';
import ReactDOM from 'react-dom';

// 在react中一个组件就是一个类
// 父组件给子组件传递数据，就是在子组件的行间加上对应的属性和值
class App extends React.Component {
  render(){
    return (
      <div>
        <h1>Hello!</h1>
        <Welcome text="XiaoM" />
        <Welcome text="React" />
        <Welcome text="Json" />
      </div>
    )
  }
}

// 子组件通过 this.props 来接收父组件传递过来的数据
// 注意 这个 this 必须保证指向 当前实例化出来的组件
class Welcome extends React.Component {
  render(){
    return (
      <div>
        <p>{this.props.text}</p>
      </div>
    )
  }
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);