import Product from "./Product";
import styles from "./Shop.module.scss";

function Shop({ products, style }) {
	return (
		<div className={style}>
			{products.map((pro) => (
				<Product
					key={pro.id}
					name={pro.name}
					photo_url={pro.photo_url}
					price={pro.price}
					is_stock={pro.is_stock}
				/>
			))}
		</div>
	);
}

export default Shop;
