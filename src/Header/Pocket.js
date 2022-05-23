import { useState } from "react";
import clsx from "clsx";
import styles from "./Bag.module.scss";
import Basket from "../store/icon/Basket.js";
import Arrow from "../store/icon/Arrow.js";

const money = 0;

function Pocket() {
	const [stack, setStack] = useState(true);

	return (
		<button className={styles.pocket} onClick={() => setStack(false)}>
			<Basket />
			<div
				onClick={(e) => {
					setStack(true);
					e.stopPropagation();
				}}
				className={clsx(styles.cover, {
					[styles.disappear]: stack,
				})}
			></div>
			<div
				className={clsx(styles.bag, {
					[styles.disappear]: stack,
				})}
			>
				<div className={styles.header}>
					<div
						onClick={(e) => {
							setStack(true);
							e.stopPropagation();
						}}
					>
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
					<div className={styles.gift}>
						gift card or discount code
					</div>
				</div>
			</div>
		</button>
	);
}

export default Pocket;
