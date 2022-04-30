import Product from './Product.js'
import styles from './Shop.module.css'

import products from './store'


function Shop() {
	return (
		<div className={styles.pro}>
			{
				products.map(
					product =>
					<Product 
						key={product.id}
						name={product.name}
						photo_url={photo_url}
						price={product.price}
						is_stock={product.is_stock}
					/>
				)
			}
		</div>
	)
}

export default Shop;
