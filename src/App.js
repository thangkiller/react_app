import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
import Button from './Button.js'




function App(){
  const [mount, setMount] = useState(false)

  return (
    <div style ={{ margin: 25 }} >
      <button
        onClick={ () => setMount(!mount) }
      >
        toggle
      </button>
      { mount && <Button/> }
    </div>
  )
}




export default App;
