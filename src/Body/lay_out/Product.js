import styles from "./Product.module.scss";

function Product({ name, photo_url, urlhover, price, is_stock }) {
	return (
		<div className={styles.wrapper}>
			<div className={styles.images}>
				<img className={styles.img_main} src={photo_url} />
				<img className={styles.img_hover} src={urlhover} />
				{is_stock && <div>in stock</div>}
			</div>
			<div className={styles.content}>
				<h2>{name}</h2>
				<div>{`$${price}`}</div>
				<button>SHOP NOW</button>
			</div>
		</div>
	);
}

export default Product;
