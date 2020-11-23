import { createStore } from 'redux';

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

// action creators
export function increment() {
  return { type: INCREMENT }
}

function reducer(state, action) {
  switch(action.type) {
    case INCREMENT:
      console.log('incrementig....')
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      console.log('decrementing...');
      return {
        ...state,
        count: state.count - 1,
      }
    default:
      return state;
  }
}

const initialState = {
  count: 0
};

export const store = createStore(reducer, initialState);
