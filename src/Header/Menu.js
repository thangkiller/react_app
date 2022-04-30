import { useState } from 'react'
import styles from './Menu.module.css'


const list = [
  {
    title:'HOW IT WORKS',
    link:''
  },
  {
    title:'WORKFLOWS',
    link:''
  },
  {
    title:'DOWNLOAD',
    link:''
  },
  {
    title:'BLOG',
    link:''
  },
  {
    title:'SUPPORTED',
    link:''
  },
  {
    title:'SHOP',
    link:''
  }
]


function Menu() {
  
  return (
  <div>
    {list.map( dish =>
      <a href={dish?.link}>{dish.title}</a>)
    }
  </div>
  )
}

export default Menu;
