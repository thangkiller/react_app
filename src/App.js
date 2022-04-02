import logo from './logo.svg';
import './App.css';
import { useState } from 'react'

function App() {
  const [counter, setCounter] = useState(0)

  const handlerAdd = () =>{
    setCounter(counter + 1)
  }
  console.log('re-render ', counter);
  return(
    <div style={{ margin: 50 }}>
    <h1>{counter}</h1>
    <button onClick={() => handlerAdd()}>ADD</button>
    </div>
  )
}

export default App;
