import Product from "./Product";
import styles from "./Shop.module.scss";

import { products } from "../../Shop/good";

function Shop() {
	return (
		<div className={styles.product}>
			{products.map((product) => (
				<Product
					key={product.id}
					name={product.name}
					photo_url={product.photo_url}
					price={product.price}
					is_stock={product.is_stock}
				/>
			))}
		</div>
	);
}

export default Shop;
