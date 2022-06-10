import { useState } from "react";
import { right } from "../store/header";
import { Context } from "../global/context";
import styles from "./Menu.module.css";

function Spice({ list, toggle }) {
  return (
    <div className={styles.more} onClick={() => console.log("tao buox dem")}>
      {toggle && (
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
  const [mount, setMount] = useState(false);

  return (
    <div className={styles.container}>
      {menu.map((dish) => (
        <div
          key={dish.id}
          className={styles.item}
          onClick={() => ("type" in dish ? setMount(!mount) : undefined)}
        >
          <a href={"link" in dish ? dish.link : undefined}>{dish.title}</a>
          {"type" in dish ? (
            <Spice list={dish.type} toggle={mount} />
          ) : undefined}
        </div>
      ))}
    </div>
  );
}

export default Menu;
