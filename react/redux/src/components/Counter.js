import { connect } from 'react-redux'

function Counter({ count }) {
  // console.log(props)
  return <p>{count}</p>;
}

// function connect(mapStateToProps, mapDispatchToProps) {
//   const store = mapStateToProps(reduxStore);

//   return function(Component) {
//     return function (props) {
//       <Component
//         {...store}
//         {...props}
//       />
//     }
//   }
// }

// function mapStateToProps(state) {
//   return {
//     two: state.count,
//     one: 1
//   };
// }

function mapStateToProps({ countReducer: { count }}) {
  return { count };
}

export default connect(mapStateToProps)(Counter);
