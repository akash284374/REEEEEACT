import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
function App() {

  let myObj={
    username:'akash',
    age:21
  }
  return (
  <>
  <h1 className='bg-green-400' text-green-600 >train</h1>
  {/* <Card channel='akash' someObj={myObj}/> */}
  <Card username="akash" btnText='Visitme'/>

  <Card/>

  </>
  );
}

export default App;
