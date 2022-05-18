import { useState } from 'react'
import styles from './Pocket.module.css'

const money = 0



function Pocket() {
	const [stack, setStack] = useState(false)

	return (
	<button className={styles.pocket}
		onClick={ () => setStack(!stack)}
	>
		<svg height="25" width="25" fill="currentColor" class="bi bi-bag" viewBox="0 0 16 16"><path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"></path></svg>
		{
			stack &&
			<div className={styles.cover}>
				<div className={styles.bag}>
					<div className={styles.header}>CONTINUTE SHOPPING</div>
					<div className={styles.body}>

					</div>
					<div className={styles.footer}>
						<div className={styles.paidMoney}>
							<div>SUBTOTAL</div>
							<div>{`$${money}`}</div>
						</div>
						<button>CHECKOUT</button>
						<div>gift card or discount code</div>
					</div>
				</div>
			</div>
		}
	</button>
	)
}

export default Pocket;