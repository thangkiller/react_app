import { useState, useContext } from "react";
import clsx from "clsx";
import { right } from "../store/header";
import { Context } from "../global/context";
import styles from "./Menu.module.css";

function Spice({ list, toggle }) {
  const spicesClasses = clsx(styles.spices, {
    [styles.space]: !toggle,
    [styles.flexD]: toggle,
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

function Menu() {
  const globalState = useContext(Context);
  const { menu } = right;
  const [spaceMore, setSpaceMore] = useState(false);

  return (
    <div className={styles.container}>
      {menu.map((dish) => {
        const havingCave = "type" in dish;

        return (
          <div
            key={dish.id}
            className={styles.item}
            onClick={(e) => {
              if (havingCave) {
                setSpaceMore(globalState.offMore || !spaceMore);
              }
              globalState.setMore();
              e.stopPropagation();
            }}
          >
            <a href={"link" in dish && dish.link}>{dish.title}</a>
            {havingCave && (
              <Spice
                list={dish.type}
                toggle={!globalState.offMore && spaceMore}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Menu;
