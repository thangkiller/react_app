import clsx from "clsx";
import styles from "./Menu.module.css";

function Spice({ list, on }) {
  console.log("on", on);
  const spicesClasses = clsx(styles.spices, {
    [styles.space]: !on,
    [styles.flexD]: on,
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
