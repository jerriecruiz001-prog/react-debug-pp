import React, { useState } from 'react'
import './App.css'

function UserCard(props) {
  return (
    <div
      style={{
        border: '1px solid gray',
        padding: '10px',
        marginTop: '10px',
        borderRadius: '8px',
      }}
    >
      <h2>{props.name}</h2>
      <p>Age: {props.age}</p>
    </div>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>React Debugging Checkpoint</h1>

      <p>Counter: {count}</p>

      <button onClick={() => setCount(count + 1)}>
        Increase Counter
      </button>

      <UserCard name="John" age={25} />
      <UserCard name="Sarah" age={30} />
    </div>
  )
}

export default App
