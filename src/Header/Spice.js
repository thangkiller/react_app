import clsx from "clsx";
import styles from "./Menu.module.css";

function Spice({ list, open }) {
  console.log("toggle", open);
  const spicesClasses = clsx(styles.spices, {
    [styles.space]: !open.toggle,
    [styles.flexD]: open.toggle,
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
