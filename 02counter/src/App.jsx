import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  let [counter,setCounter]=useState(15)
  // let counter=15
  const addValue=()=>{
    console.log("value Added",counter);
    counter++;
    setCounter(counter)
  }

    const removeValue=()=>{
    console.log("value Removed",counter);
    counter--;
    setCounter(counter)
  }
  return (
    <>
    <h1>Chai Aur React</h1>
    <h2>Counter Value:{counter}</h2>
    <button
    onClick={addValue}
    >Add Value:{counter}</button>
    <br />
    <button
    onClick={removeValue}
    >Remove Value:{counter}</button>

    </>
  )
}

export default App
