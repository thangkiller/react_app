import clsx from "clsx";
import { products, own } from "../Shop/good";
import Poster from "./Poster";
import Shop from "./lay_out/Shop";
import { ArrowDown } from "../store/icon";
import { default as fashion } from "./lay_out/Shop.module.scss";
import styles from "./Poster.module.scss";

function Body() {
  const posShop_y = 700;
  return (
    <div>
      <Poster
        slogan="A CONSOLE FOR EVERY WORKFLOW"
        content="Discover the perfect console for yours."
        img="./img/shop-cta-xl.webp"
        style={styles.poster1}
      />
      <a
        className={styles.arrow}
        onClick={() => {
          window.scroll({ top: posShop_y, left: 0, behavior: "smooth" });
        }}
      >
        <ArrowDown />
      </a>
      <Shop products={products} style={fashion.product} />
      <Poster
        slogan="CREATE YOUR OWN CONSOLE"
        content="Add-on to make it perfect."
        img="./img/shop-banner-module.webp"
        style={styles.poster2}
      />
      <Shop products={own} style={clsx(fashion.product, fashion.own)} />
    </div>
  );
}

export default Body;
