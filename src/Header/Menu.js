import { useState } from "react";
import { right } from "../store/header";
import Sidebar from "../global/Sidebar";
import Spice from "./Spice";
import styles from "./Menu.module.css";

function Menu() {
  const { menu } = right;
  const [on, setOn] = useState(false);
  return (
    <div className={styles.container}>
      {menu.map((dish) => {
        const inWorkflows = "type" in dish;
        if (inWorkflows) {
          return (
            <Sidebar element={<Spice list={dish.type} on={on} setOn={setOn} />}>
              <div key={dish.id} className={styles.item}>
                <a href={"link" in dish && dish.link}>{dish.title}</a>
              </div>
            </Sidebar>
          );
        }
        return (
          <div key={dish.id} className={styles.item}>
            <a href={"link" in dish && dish.link}>{dish.title}</a>
          </div>
        );
      })}
    </div>
  );
}

export default Menu;
