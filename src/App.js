import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
import Shop from './Shop.js'




function App(){
  const [mount, setMount] = useState(false)

  return (
    <div style ={{ margin: 25 }} >
      <button
        onClick={ () => setMount(!mount) }
      >
        toggle
      </button>
      { mount && <Shop/> }
    </div>
  )
}




export default App;
