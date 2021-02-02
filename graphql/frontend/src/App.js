import { useState } from 'react'
import { useQuery, useMutation } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import './App.css';

const GET_USERS = gql`
  {
    users {
      id
      name
      age
    }
  }
`

const CREATE_USER = gql`
  mutation CreateUser($name: String!, $age: Int!) {
    createUser(name: $name, age: $age) {
      id
      name
      age
    }
  }
`

function App() {
  const { data, loading, error } = useQuery(GET_USERS)
  const [ createUser, user ] = useMutation(CREATE_USER)
  const [name, setName] = useState('')
  const [age, setAge] = useState(0)

  console.log(user)

  function handleSubmit(e) {
    e.preventDefault()

    createUser({ variables: { name, age: +age } })
  }

  if(loading) return <p>loading...</p>
  if(error) return <p>Something went wrong</p>
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <label htmlFor="age">Age</label>
        <input
          type="text"
          id="age"
          name="age"
          value={age}
          onChange={e => setAge(e.target.value)}
        />
        <button>Create user</button>
      </form>
      {data && data.users && data.users.length > 0 && data.users.map(user => {
        return (
          <div className="user" key={user.id}>
            <h2>{user.name}</h2>
            <p>{user.age}</p>
          </div>
        )
      })}
    </div>
  );
}

export default App;
