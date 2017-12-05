function ce(type, props, ...children){
  return {type, props, children};
}

const ele = (
  ce(
    'div',
    {className: 'content'},
    ce('h1', null, 'Hello'),
    ce('p', null, 'Content 1'),
    ce('p', null, 'Content 2')
  )
);

function createElement(node){
  if(typeof node === 'string'){
    return document.createTextNode(node);
  }
  
  const _el = document.createElement(node.type);
  
  if(node.props){
    for(let type in node.props){
      _el[type] = node.props[type];
    }
  }
  
  node.children
    .map(createElement)
    .forEach(_el.appendChild.bind(_el));
  
  return _el;
}

const root = document.getElementById('root');

root.appendChild(createElement(ele));


