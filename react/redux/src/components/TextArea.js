import { useSelector, useDispatch } from 'react-redux'
import { CHANGE_TEXT, changeText } from '../store/textReducer';

function TextArea() {
  const dispatch = useDispatch();
  const { text } = useSelector(({ textReducer: { text } }) => ({ text }))
  // const state = useSelector(state => ({ text: state.text }))
  // state.text

  function handleChange(e) {
    dispatch(changeText(e.target.value.slice(0, 50)))
  }

  return (
    <textarea
      // onChange={(e) => dispatch({ type: CHANGE_TEXT, payload: e.target.value })}
      // onChange={(e) => dispatch(changeText(e.target.value))}
      onChange={handleChange}
      value={text}
    />
  )
}

export default TextArea;
