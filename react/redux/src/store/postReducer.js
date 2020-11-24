import axios from 'axios'

const POSTS_LOADING = 'POSTS_LOADING';
const POSTS_SUCCESS = 'POSTS_SUCCESS';
const POSTS_FAILURE = 'POSTS_FAILURE';
const POSTS_FINISHED = 'POSTS_FINISHED'

const jsonplaceholder = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
});

export function getPosts() {
  return async function(dispatch) {
    dispatch({ type: POSTS_LOADING });
    try {
      const { data } = await jsonplaceholder({
        method: 'GET',
        url: '/posts'
      });

      dispatch({ type: POSTS_SUCCESS, payload: data })
    } catch(error) {
      dispatch({ type: POSTS_FAILURE, payload: error })
    } finally {
      dispatch({ type: POSTS_FINISHED })
    }
  }
}

// export function createPost(data) {
//   return async function(dispatch) {
//     dispatch({ type: POSTS_LOADING })
//     try {
//       jsonplaceholder({
//         method: 'POST',
//         url: '/posts',
//         data,
//       })
//     } catch(error) {

//     }
//   }
// }

const initialState = {
  posts: [],
  loading: false,
  error: null
}

function postReducer(state = initialState, action) {
  switch(action.type) {
    case POSTS_LOADING:
      return {
        ...state,
        loading: true,
      };
    case POSTS_SUCCESS:
      return {
        ...state,
        posts: action.payload,
      }
    case POSTS_FAILURE:
      return {
        ...state,
        error: action.payload,
      }
    case POSTS_FINISHED:
      return {
        ...state,
        loading: false,
      }
    default:
      return state;
  }
}

export default postReducer;
