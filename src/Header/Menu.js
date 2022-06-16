import { useState, useContext } from "react";
import clsx from "clsx";
import { right } from "../store/header";
import { Context } from "../global/context";
import styles from "./Menu.module.css";

function Spice({ list }) {
  const { setMore, MoreState } = useContext(Context);
  const classes = clsx(
    { [styles.space]: spaceMore, [styles.crazy]: !spaceMore },
    styles.spices
  );
  console.log(classes);
  return (
    <div className={styles.more} onClick={() => setSpaceMore(!spaceMore)}>
      <div className={classes}>
        {list.map((i) => (
          <a key={i.id} href={i.url}>
            {i.title}
          </a>
        ))}
      </div>
    </div>
  );
}

function Menu() {
  const { menu } = right;
  const [spaceMore, setSpaceMore] = useState(false);
  return (
    <div className={styles.container}>
      {menu.map((dish) => (
        <div key={dish.id} className={styles.item}>
          <a
            href={"link" in dish ? dish.link : undefined}
            onClick={() => setSpaceMore(!spaceMore)}
          >
            {dish.title}
          </a>
          {"type" in dish ? <Spice list={dish.type} /> : undefined}
        </div>
      ))}
    </div>
  );
}

export default Menu;
