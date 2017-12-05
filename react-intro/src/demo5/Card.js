import React, {Component} from 'react';

import { Card, Icon, Avatar } from 'antd';
const { Meta } = Card;

class CardItem extends Component {
  render(){
    return (
      <div>
        <Card
          style={{width: '300px', float: 'left', margin: '0 10px'}}
          cover={<img alt="example" src={this.props.cardImg} />}
          actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
        >
          <Meta
            avatar={<Avatar src={this.props.avatar} />}
            title={this.props.title}
            description={this.props.desc}
          />
        </Card>
      </div>
    )
  }
}

export default CardItem;
