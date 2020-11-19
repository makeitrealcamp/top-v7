import { withRouter } from 'react-router-dom'

// function withRouter(Component) {
//   // lógica del match
//   const match = {}
//   // lógica del history
//   const history = {}
//   // lógica del location
//   const location = {}

//   return function(props) {
//     return (
//       <Component
//         match={match}
//         history={history}
//         location={location}
//         {...props}
//       />
//     )
//   }
// }

function Title(props) {
  console.log('Title', props);
  return <h1>{props.children}</h1>
}

export default withRouter(Title);
