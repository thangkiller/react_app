import Poster from "./Poster";
import Shop from "./lay_out/Shop";
import { products, own } from "../Shop/good";

function Body() {
  return (
    <div>
      <Poster
        slogan="A CONSOLE FOR EVERY WORKFLOW"
        content="Discover the perfect console for yours."
        img="./img/shop-cta-xl.webp"
      />
      <Shop products={products} />
      <Poster
        slogan="CREATE YOUR OWN CONSOLE"
        content="Add-on to make it perfect."
        img="./img/shop-banner-module.webp"
      />
      <Shop products={own} />
    </div>
  );
}

export default Body;
