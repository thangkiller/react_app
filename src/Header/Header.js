import { useState } from 'react'
import styles from './Header.module.css'
import Menu from './Menu.js'
import Pocket from './Pocket.js'

function Header( {
  rounts
}) {
  
  return  (
  <div styles={styles.navbar}>
    <div >
      <div>logo</div> 
      <div>brand</div>
    </div>
    <div>
      <Menu/>
      <Pocket/>
    </div>
  </div>
  )
}


export default Header;
