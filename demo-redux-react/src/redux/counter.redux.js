const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

export function counter(state = 10, action){
  // action 是一个对象，这里面需要一个 type 属性
  if(action.type === INCREMENT){
    return state + 1;
  }
  if(action.type === DECREMENT){
    return state - 1;
  }
  return state;
};

// action creater
export function addFn(){
  return {type: INCREMENT};
}

export function cutFn(){
  return {type: DECREMENT};
}

export function asyncAdd(){
  return dispatch => {
    setTimeout(function() {
      dispatch(addFn())
    }, 2000);
  }
}

export function asyncCut(){
  return dispatch => {
    setTimeout(function() {
      dispatch(cutFn())
    }, 2000);
  }
}


