import Product from "./Product";

function Shop({ products, style }) {
	return (
		<div className={style}>
			{products.map((pro) => (
				<Product
					key={pro.id}
					name={pro.name}
					photo_url={pro.photo_url}
					urlhover={pro.urlhover}
					price={pro.price}
					is_stock={pro.is_stock}
				/>
			))}
		</div>
	);
}

export default Shop;
