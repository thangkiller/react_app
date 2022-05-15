import { useState } from 'react'
import styles from './Header.module.css'
import Menu from './Menu.js'
import Pocket from './Pocket.js'
import Logo from './Logo.js'


const brand = 'MONOGRAM'


function Header( {
  rounts
}) {
  
  return  (
  <div className={styles.navbar}>
    <div className={styles.left}>
      <Logo />
    </div>
    <div className={styles.right}>
      <Menu/>
      <Pocket/>
    </div>
  </div>
  )
}


export default Header;


