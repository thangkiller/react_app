import Group from './Group.js'
import groups from '../store/footer.js'

function Footer() {
  
  return (
  <div>
  {
    groups.map( group =>
      (
        <div>
          <div>{group.title}</div>
          { group.list.map( info => (
            <a href={info.name}>{info.name}</a>
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
