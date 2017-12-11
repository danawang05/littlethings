import React, { Component } from 'react';

function ListItem(props){
  return (
    <li className="list-group-item">
      <div className="media">
        <div className="media-left">
          <img className="media-object" src={props.image} alt={props.title}/>
        </div>
        <div className="media-body">
          <h4 className="media-heading">{props.title}</h4>
          <p>
            {props.summary}
          </p>
        </div>
      </div>
    </li>
  );
}

export default ListItem;