import { useState } from "react";
import styles from "./Header.module.css";
import Menu from "./Menu";
import Logo from "../store/icon/Logo";
import Modal from "./Modal";

function Header({ rounts }) {
  return (
    <div className={styles.navbar}>
      <div className={styles.left}>
        <Logo />
      </div>
      <div className={styles.right}>
        <Menu />
        <Modal />
      </div>
    </div>
  );
}

export default Header;
