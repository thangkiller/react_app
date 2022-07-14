import { useState } from "react";
import styles from "./Product.module.scss";

function Product({ name, photo_url, urlhover, price, is_stock }) {
	const [hover, setHover] = useState(false);
	return (
		<div className={styles.wrapper}>
			<div className={styles.image}>
				<img
					src={hover ? urlhover : photo_url}
					onMouseOver={() => setHover(true)}
					onMouseOut={() => setHover(false)}
				/>
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
