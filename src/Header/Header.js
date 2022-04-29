import { useState } from 'React'
import Menu from './Menu.js'
import Pocket from './Pocket.js'

function Header( {
  rounts
}) {
  const [menu, setMenu] = useState(false)
  const [pocket, setPocket] = useState(false)
  
  return  (
  <div>
    <div>
      <div>logo</div> 
      <div>brand</div>
    </div>
    <div>
      <div
        onClick={}
      >
      { menu && <Menu/>}
      </div>
      <div
      onClick={}
      >
      { pocket && <Pocket/> }
      </div>
    </div>
  </div>
  )
}


export default Header;
