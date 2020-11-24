import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getPosts } from '../store/postReducer'

function Posts() {
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector(
    ({ postReducer: { posts, loading, error }}) => {
      return { posts, loading, error };
    }
  );

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  if(loading) return <p>Loading..</p>
  if(error) return <p>Something went wrong</p>
  return (
    <div>
      {!!posts && posts.length > 0 && posts.map(({ id, title, body }) => {
        return (
          <div key={id}>
            <h2>{title}</h2>
            <p>{body}</p>
          </div>
        )
      })}
    </div>
  );
}

export default Posts
