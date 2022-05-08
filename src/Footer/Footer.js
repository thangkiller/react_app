import Group from './Group.js'
import groups from '../store/footer.js'
import styles from './footer.module.css'

function Footer() {

  return (
    <div className={styles.cover}>
    {
      groups.map( group =>
        (
          <div key={group.id}>
          <div>{group.title}</div>
          { group.list.map( info => (
            <a key={info.id} href={info.name}>{info.name}</a>
            )
          )
        }
        </div>
        )
        )
    }
    </div>
    )
}

export default Footer;
