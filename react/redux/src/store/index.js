import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import textReducer from './textReducer'
import countReducer from './countReducer'
import postReducer from './postReducer'

function logger(store) {
  return function(next) {
    return function(action) {
      const prevState = store.getState();
      const result = next(action)

      console.log({
        'previous state': prevState,
        action,
        'next state': store.getState()
      })

      return result;
    }
  }
}

// const foo = logger(store);
// const baz = foo((action) => ({}));

// logger()
// logger()
// logger()

// baz()
// baz()
// baz()
// logger({ text: '' })()()

// foo()
// foo()
// foo()
// logger()()

const rootReducer = combineReducers({ textReducer, countReducer, postReducer })
const middlewares = applyMiddleware(thunk, logger)

// const store = {
//   textReducer: {
//     text: '',
//     count: 0
//   },
//   countReducer: {
//     count: 0,
//   }
// }

export const store = createStore(rootReducer, middlewares);
