import Subscribe from "./Subscribe";
import groups from "../store/footer";
import styles from "./footer.module.scss";

function Footer() {
  return (
    <div className={styles.container}>
      {groups.map((group) => (
        <div key={group.id}>
          <div>{group.title}</div>
          {group.list.map((info) => (
            <a key={info.id} href={info.name}>
              {info.name}
            </a>
          ))}
        </div>
      ))}
      <Subscribe style={styles.subscribe} />
    </div>
  );
}

export default Footer;
