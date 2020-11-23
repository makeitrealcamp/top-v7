import { useSelector } from 'react-redux';

function Text() {
  const state = useSelector(({ textReducer: { text, count } }) => ({
    text,
    count,
  }))

  return <p>{state.text} {state.count}</p>
}

export default Text;
