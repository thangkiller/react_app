import styles from './Product.module.css'


function Product({
	name,
	photo_url,
	price,
	is_stock
}) {

	return (
		<div>
			<div className={styles.image}>
				<img src={photo_url} alt=""
				/>
				{ is_stock && 
					( <div>in stock</div>)
				}
			</div>
			<div className={styles.content}>
				<h2>{name}</h2>
				<div>{`$${price}`}</div>
			</div>
		</div>
	)
}


export default Product;