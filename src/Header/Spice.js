import clsx from "clsx";
import styles from "./Menu.module.css";

function Spice({ list, toggle }) {
  console.log("toggle", toggle);
  const spicesClasses = clsx(styles.spices, {
    [styles.space]: !toggle.on,
    [styles.flexD]: toggle.on,
  });
  return (
    <div className={styles.more}>
      <div className={spicesClasses}>
        {list.map((i) => (
          <a key={i.id} href={i.url}>
            {i.title}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Spice;
