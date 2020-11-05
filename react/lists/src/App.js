import logo from './logo.svg';
import './App.css';

// mock data
const data = [
  {
    id: 5,
    title: 'tarea 4',
    done: true
  },
  {
    id: 1,
    title: 'tarea 1',
    done: true
  },
  {
    id: 2,
    title: 'tarea 2',
    done: false
  },
  {
    id: 3,
    title: 'tarea 3',
    done: true
  }
]

// true && true => true
// true && false => false
// false && true => false
// false && false => false
// 1 && 2 => 2
// 0 && 2 => 0
// true && true && false => false
// true && false && true => false

// true || true => true
// true || false => true
// false || true => true
// false || false => false
// const num = init || 1

// !
// !true => false
// !false => true
// !1 => false
// !null => true
// !0 => true
// !!0 => !true => false
// Boolean(0)

function App() {
  // let data = NaN;
  // let data = 0;
  // if(loading) return <p>Loading...</p>
  return (
    <div className="App">
      {!!data && data.length > 0 && data.map(el => {
        return (
          <div key={el.id} className="task">
            <p>{!!el.id && el.done && el.title}</p>
            <p>{el.done && 'completado'}</p>
          </div>
        )
      })}
    </div>
  )
}

export default App;
