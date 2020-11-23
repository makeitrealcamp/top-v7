import { createStore, combineReducers } from 'redux';
import textReducer from './textReducer'
import countReducer from './countReducer'

const rootReducer = combineReducers({ textReducer, countReducer })

// const store = {
//   textReducer: {
//     text: '',
//     count: 0
//   },
//   countReducer: {
//     count: 0,
//   }
// }

export const store = createStore(rootReducer);
