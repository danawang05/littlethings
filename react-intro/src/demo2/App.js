import React from 'react';
import ReactDOM from 'react-dom';

import './App.css';

// 实例1：JSX表达式
// const conetnet = 'Hello, world!';
// const element = <h1>{conetnet}</h1>;

// 实例2：react默认不会渲染html结构，为了防止 XSS(跨站脚本) 
// const conetnet = '<span>你好,react!</span>';
// const element = <h1>{conetnet}</h1>;
// const element = <h1 dangerouslySetInnerHTML={{__html: conetnet}}></h1>

// 实例3：使用三元表达式
// let user = 'fq';
// const element = <h1>当前登陆状态: {user ? user + '已登陆' : '未登录'}</h1>;

// 实例4：添加样式
const textStyle = {
  fontSize: '30px'
};

// 在JSX中每个元素只能渲染一个节点
// 每个元素的属性遵循的是DOM的API，而不是HTML的规范
const element = (  
  <div>
    <h1 style={{fontSize: 60}}>Hello</h1>
    {/*这是一段注释*/}
    <p style={textStyle} className="text-color">Welcome to use react!</p>
  </div>
);

ReactDOM.render(
  element,
  document.getElementById('root')
);

