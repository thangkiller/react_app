import { useState } from "react";
import { right } from "../store/header";
import { Sidebar } from "../global";
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
            <Sidebar
              key={dish.id}
              element={<Spice list={dish.type} on={on} setOn={setOn} />}
            >
              <a href={"link" in dish ? dish.link : undefined}>{dish.title}</a>
            </Sidebar>
          );
        }
        return (
          <div key={dish.id}>
            <a href={"link" in dish && dish.link}>{dish.title}</a>
          </div>
        );
      })}
    </div>
  );
}

export default Menu;
