import { useState } from "react";
import styles from "./Header.module.css";
import Menu from "./Menu";
import Pocket from "./Pocket";
import Logo from "../store/icon/Logo";
import Basket from "../store/icon/Basket";

function Header({ rounts }) {
  return (
    <div className={styles.navbar}>
      <div className={styles.left}>
        <Logo />
      </div>
      <div className={styles.right}>
        <Menu />
        <Basket />
      </div>
    </div>
  );
}

export default Header;
