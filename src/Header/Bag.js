import clsx from "clsx";
import styles from "./Bag.module.scss";
import { Arrow, Editing, pays } from "../store/icon";

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
				<div className={$.body}>
					<div className={$.body__header}>
						<h2>NOTHING IN YOUR BAG!</h2>
						<div>
							<a href="./">Start shopping</a> to see if you
							qualify for free shipping.
						</div>
					</div>
					<div className={$.body}>
						<Editing />
						<div className={$.content}>
							<div className={$.cap}>
								MONOGRAM BETTER EDITING GUARANTEE
							</div>
							<p>
								Try Monogram Creative Console in your own
								workflow for 30 days. If it does not improve
								your editing experience, you can return it for a
								full refund.
							</p>
						</div>
					</div>
					<div className={$.body__footer}>
						<div className={$.title}>SECURE PAYMENTS</div>
						<ul>
							{pays.map((Pay, i) => {
								return (
									<li key={i}>
										<Pay />
									</li>
								);
							})}
						</ul>
					</div>
				</div>
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
