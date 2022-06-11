import { useState, useContext } from "react";
import { right } from "../store/header";
import { Context } from "../global/context";
import styles from "./Menu.module.css";

function Spice({ list }) {
  const more = useContext(Context);
  return (
    <div className={styles.more} onClick={() => more.setMore()}>
      {more.MoreState && (
        <div className={styles.spices}>
          {list.map((i) => (
            <a key={i.id} href={i.url}>
              {i.title}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

function Menu() {
  const { menu } = right;
  return (
    <div className={styles.container}>
      {menu.map((dish) => (
        <div key={dish.id} className={styles.item}>
          <a href={"link" in dish ? dish.link : undefined}>{dish.title}</a>
          {"type" in dish ? <Spice list={dish.type} /> : undefined}
        </div>
      ))}
    </div>
  );
}

export default Menu;
