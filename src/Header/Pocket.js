import { useState } from "react";
import clsx from "clsx";
import styles from "./Bag.module.scss";
import Basket from "../store/icon/Basket.js";
import Arrow from "../store/icon/Arrow.js";

const money = 0;
const isPresent = 2;
const isDisappear = 1;
const isHide = 0;

function Pocket() {
	const [stack, setStack] = useState(isHide);

	return (
		<button className={styles.pocket} onClick={() => setStack(isPresent)}>
			<Basket />
			<div
				onClick={(e) => {
					setStack(isDisappear);
					e.stopPropagation();
				}}
				className={clsx(styles.cover, {
					[styles.coverPresent]: stack === isPresent,
					[styles.hide]: stack === isHide,
					[styles.coverDisappear]: stack === isDisappear,
				})}
			></div>
			<div
				className={clsx(styles.bag, {
					[styles.bagPresent]: stack === isPresent,
					[styles.hide]: stack === isHide,
					[styles.bagDisappear]: stack === isDisappear,
				})}
			>
				<div className={styles.header}>
					<div
						onClick={(e) => {
							setStack(isDisappear);
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
