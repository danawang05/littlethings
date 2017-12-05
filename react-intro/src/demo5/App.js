import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import {Row, Col} from 'antd';

import Card from './Card.js';

const data = [
  {
    id: 1,
    title: '麻辣烫',
    desc: '酸甜口味的',
    cardImg: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" ,
    avatar: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
  },
  {
    id: 2,
    title: '麻辣香锅',
    desc: '打野的~',
    cardImg: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" ,
    avatar: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
  },
  {
    id: 3,
    title: '吹泡泡',
    desc: '反向两段Q',
    cardImg: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" ,
    avatar: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
  }
]

class App extends Component {
  render(){
    // 在循环使用组件的时候，必须为每个组件设定一个key属性
    let cards = data.map((item) => {
      return (
        <Card
          key={item.id}
          {...item}
        ></Card>
      )
    });
    return (
      <div>
        {cards}
      </div>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
)

