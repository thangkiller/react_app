import Product from './Product.js'
const  products = [
	{
		id: 1,
		name: 'ORBITER MODULE',
		photo_url: './img/Consoles_OrbiterHero_Monogram.webp',
		is_stock: true,
		price: 149
	},
	{
		id: 2,
		name: 'DIAL MODULE',
		photo_url: './img/Consoles_DialBracket.webp',
		is_stock: true,
		price: 149
	},
	{
		id: 3,
		name: 'MINICONSOLE UPGRADE: MIDI',
		photo_url: './img/SW-box-render-mini-midi.webp',
		is_stock: false,
		price: 29
	}
]





function Shop() {
	return (
		<div>
			{
				products.map( product =>
					<Product key={product.id}
						name={product.name}
						photo_url={product.photo_url}
						price={product.price}
						is_stock={product.is_stock}
					/>
				)
			}
		</div>
	)
}

export default Shop;