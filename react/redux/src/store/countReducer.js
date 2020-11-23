export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

// action creators
export function increment() {
  return { type: INCREMENT }
}

const initialState = {
  count: 0,
};

function countReducer(state = initialState, action) {
  switch(action.type) {
    case INCREMENT:
      console.log('incrementig....')
      return {
        ...state,
        count: state.count + 1,
      };
      // { count: 1 }
    case DECREMENT:
      console.log('decrementing...');
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
}

export default countReducer;
