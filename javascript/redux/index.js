// store
// const store = {
//   posts: [],
//   loading: false,
//   count: 0
// }

// function dispatch(action) {
//   store = reducer(store, action)
// }

// function handleClick() {
//   dispatch({ type: 'increment' })
// }

// function reducer(state, action) {
//   switch(action.type) {
//     case 'increment':
//       return {
//         ...state,
//         count: state.count + 1
//       }
//   }
// }

const { createStore } = require('redux')

const initialState = {
  count: 0
}

function reducer(state = initialState, action) {
  switch(action.type) {
    case 'increment':
      return {
        ...state,
        count: state.count + action.payload,
      }
    case 'decrement':
      return {
        ...state,
        count: state.count - 1
      }
    default:
      return state;
  }
}

const store = createStore(reducer)

store.subscribe(() => console.log(store.getState()))

store.dispatch({ type: 'increment', payload: 2 })
// store.dispatch({ type: 'increment' })
// store.dispatch({ type: 'increment' })
// store.dispatch({ type: 'decrement' })








