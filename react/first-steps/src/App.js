import logo from './logo.svg';
import './App.css';

function Title() {
  return <h1>Hola title</h1>
}

// function App() {
//   return (
//     React.createElement('div', { className: 'App', hola: 'mundo' },
//       React.createElement('h1', null, 'Hola mundo'),
//       React.createElement('p', null, 'Hola mundo')
//     )
//   )
// }

function App() {
  // JSX - JavaScript and XML
  // 1. Todas las etiquetas se deben cerrar explicitamente.
  // 2. Un componente no puede retornar elementos de react adyacentes.
  // 3. Atributos que tienen el nombre de palabras reservedas de js hay que cambiar el atributo
  //  - class -> className
  //  - for -> htmlFor
  return (
    <div className="App" hola="mundo">
      <Title />
      <Title />
      <p>Hola mundo</p>
    </div>
  )
}

export default App;
