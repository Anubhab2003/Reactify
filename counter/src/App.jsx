import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
const [counter, setCounter] = useState(0);
const addValue = () => {
  setCounter(counter + 1);
}
const DecreaseVal = () => {
  if (counter > 0) { setCounter(counter - 1); }
}



  return (
    <>
     <h1>BatMan</h1>
     <h2>Counter value:{counter}</h2>
      <button onClick={addValue}>Increment</button>
      <br />
      <button onClick={DecreaseVal}>Decrement</button>
    </>
  )
}

export default App
