import clsx from 'clsx'
import { useState } from 'react'
import styles from './Header.module.css'
import Menu from './Menu.js'
import Pocket from './Pocket.js'

function Header( {
  rounts
}) {
  
  return  (
  <div className={styles.navbar}>
    <div className={clsx(styles.item, styles.right)}>
      <div className={styles.right__item}>logo</div> 
      <div className={styles.right__item}>brand</div>
    </div>
    <div className={clsx(styles.item, styles.left)}>
      <Menu/>
      <Pocket/>
    </div>
  </div>
  )
}


export default Header;
