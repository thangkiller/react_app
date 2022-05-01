import { useState } from 'react'
import styles from './Menu.module.css'


const list = [
  {
    id: '01',
    title:'HOW IT WORKS',
    link:'',
  },
  {
    id: '02',
    title: 'WORKFLOWS',
    link: '',
    type: [
      {
        id: '12',
        title: 'PHOTO EDITING',
        url: ''
      },
      {
        id: '22',
        title: 'VIDEO & FILMMARKING',
        url: ''
      },
      {
        id: '32',
        title: 'MUSIC & AUDIO',
        url: ''
      },
      {
        id: '42',
        title: 'VITUAL PRODUCTION',
        url: ''
      },
      {
        id: '52',
        title: 'EVERYDAY ESSENTIAL',
        url: ''
      }
    ]
  },
  {
    id: '03',
    title:'DOWNLOAD',
    link:'',
  },
  {
    id: '04',
    title:'BLOG',
    link:'',
  },
  {
    id: '05',
    title:'SUPPORTED',
    link:'',
  },
  {
    id: '06',
    title:'SHOP',
    link:'',
  }
]

function Spice({ list }) {
  const [mount, setMount] = useState(false)

  return(
  <div className={styles.spices}
    onClick={() => setMount(!mount)}
  >
  v
    <div className={styles.spice}>
      { mount &&
        list.map( i =>
          <a key={i.id} href={i.url}>{i.title}</a>
        )
      }
    </div>
  </div>
  )
}


function Menu() {
  
  return (
  <div className={styles.container}>
    {
      list.map( dish => (
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
