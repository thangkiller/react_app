import Product from './Product.js'
import styles from './Shop.module.css'



const  products = [
	{
		id: 1,
		name: 'ORBITER MODULE',
		photo_url: '../../img/Consoles_OrbiterHero_Monogram.webp',
		is_stock: true,
		price: 149
	},
	{
		id: 2,
		name: 'DIAL MODULE',
		photo_url: '../../img/Consoles_DialBracket.webp',
		is_stock: true,
		price: 149
	},
	{
		id: 3,
		name: 'MINICONSOLE UPGRADE: MIDI',
		photo_url: '../../img/SW-box-render-mini-midi.webp',
		is_stock: false,
		price: 29
	}
]

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