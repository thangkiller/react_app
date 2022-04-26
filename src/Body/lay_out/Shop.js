import Product from './Product.js'
import styles from './Shop.module.css'

import products from './store'


function Shop() {
	return (
		<div className={styles.pro}>
			{
				products.map(
					({
						id,
						name,
						is_stock,
						photo_url,
						price
					}) =>
					<Product 
						key={id}
						name={name}
						photo_url={photo_url}
						price={price}
						is_stock={is_stock}
					/>
				)
			}
		</div>
	)
}

export default Shop;
