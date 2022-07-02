import { products, own } from "../Shop/good";
import Poster from "./Poster";
import Shop from "./lay_out/Shop";
import styles from "./Poster.module.scss";
import styles as fashion from "./lay_out/Shop.module.scss";

function Body() {
  return (
    <div>
      <Poster
        slogan="A CONSOLE FOR EVERY WORKFLOW"
        content="Discover the perfect console for yours."
        img="./img/shop-cta-xl.webp"
        style={styles.poster1}
      />
      <Shop products={products} style={fashion.a} />
      <Poster
        slogan="CREATE YOUR OWN CONSOLE"
        content="Add-on to make it perfect."
        img="./img/shop-banner-module.webp"
        style={styles.poster2}
      />
      <Shop products={own} style={fashion.b} />
    </div>
  );
}

export default Body;
