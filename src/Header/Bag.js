import styles from "./Bag.module.scss";
import Arrow from "../store/icon/Arrow";

const money = 0;

function Cover() {
	return <div className={styles.cover}></div>;
}
function Bag() {
	return (
		<div className={styles.bag}>
			<div className={styles.header}>
				<div>
					<Arrow />
					CONTINUTE SHOPPING
				</div>
			</div>
			<div className={styles.body}></div>
			<div className={styles.footer}>
				<div className={styles.paidMoney}>
					<div>SUBTOTAL</div>
					<div>{`$${money}`}</div>
				</div>
				<button>CHECKOUT</button>
				<div className={styles.gift}>gift card or discount code</div>
			</div>
		</div>
	);
}

export { Bag, Cover };
