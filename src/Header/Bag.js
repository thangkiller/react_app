import clsx from "clsx";
import styles from "./Bag.module.scss";
import { Arrow } from "../store/icon";

const money = 0;
const $ = styles;

function Bag({ on, setOn }) {
	const overlay = clsx($.overlay, {
		[$.overlay_off]: on,
		[$.overlay_on]: !on,
	});
	const bag = clsx($.bag, {
		[$.bag_off]: on,
		[$.bag_on]: !on,
	});
	const modal = clsx($.modal, {
		[$.modal_off]: false,
	});

	return (
		<div className={modal}>
			<div className={overlay} onClick={() => setOn(true)}></div>
			<div className={bag}>
				<div className={$.header}>
					<div onClick={() => setOn(true)}>
						<Arrow />
						CONTINUTE SHOPPING
					</div>
				</div>
				<div className={$.body}></div>
				<div className={$.footer}>
					<div className={$.paidMoney}>
						<div>SUBTOTAL</div>
						<div>{`$${money}`}</div>
					</div>
					<button>CHECKOUT</button>
					<div className={$.gift}>gift card or discount code</div>
				</div>
			</div>
		</div>
	);
}

export default Bag;
