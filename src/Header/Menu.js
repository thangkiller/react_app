import { useState } from 'react'
import styles from './Menu.module.css'
import { right } from '../store/header.js'

function Spice({ list }) {
  const [mount, setMount] = useState(false)

  return(
  <div className={styles.spices}
    onClick={() => setMount(!mount)}
  >
    {
      list.map( i =>
        <a key={i.id} href={i.url}>{i.title}</a>
      )
    }
  </div>
  )
}


function Menu() {
  const { menu } = right
  return (
  <div className={styles.container}>
    {
      menu.map( dish => (
        <div key={dish.id} className={styles.item}>
          <a href={ ('link' in dish) ? dish.link : undefined }>{dish.title}</a>
          {
            ('type' in dish) ?
              <Spice list={dish.type}/>
            : undefined
          }
        </div>
        )
      )
    }
  </div>
  )
}

export default Menu;
