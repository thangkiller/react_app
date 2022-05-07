import Group from './Group.js'
import groups from '../store/footer.js'

function Footer() {
  
  return (
  <div>
  {
    groups.map( group =>
      (
        <div>{group.title}</div>
        {
          group.list.map( info =>
            <a href={info.url}>{info.name}</a>
          )
        }
      )
    )
  }
  </div>
  )
}

export default Footer;
