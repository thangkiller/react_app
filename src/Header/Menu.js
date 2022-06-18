import { useState, useContext, useEffect } from "react";
import clsx from "clsx";
import { right } from "../store/header";
import { Context } from "../global/context";
import styles from "./Menu.module.css";

function Spice({ list, toggle }) {
  console.log("toggle", toggle);
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
  console.log("globalState", globalState);
  const { menu } = right;
  let spaceMore = false;

  useEffect(() => {
    console.log("spaceMore", spaceMore);
  }, [spaceMore]);

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
                spaceMore = !spaceMore;
              }
              globalState.setMore();
              e.stopPropagation();
            }}
          >
            <a href={"link" in dish && dish.link}>{dish.title}</a>
            {havingCave && <Spice list={dish.type} toggle={spaceMore} />}
          </div>
        );
      })}
    </div>
  );
}

export default Menu;
