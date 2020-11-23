import { connect } from 'react-redux';

// function Button({ increment }) {
function Button({ onClick, children }) {
  // console.log(props)
  return (
    <button
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

// function mapDispatchToProps(dispatch) {
//   return {
//     increment: () => dispatch({ type: 'increment' })
//   }
// }

// export default connect(null, mapDispatchToProps)(Button);
export default Button;
