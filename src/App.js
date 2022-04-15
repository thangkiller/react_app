import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
import Chat from './Chat.js'

function App(){
  const [mount, setMount] = useState(false)

  return (
    <div style ={{ margin: 25 }} >
      <button
        onClick={ () => setMount(!mount) }
      >
        toggle
      </button>
      { mount && <Chat/> }
    </div>
  )
}




export default App;
