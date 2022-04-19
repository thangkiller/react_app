import './Product.css'


function Product({
	name,
	photo_url,
	price,
	is_stock
}) {

	return (
		<div>
			<div className="image">
				<img src={photo_url} alt=""
					width={250}
					height={250}
				/>
				{ is_stock && 
					( <div>in stock</div>)
				}
			</div>
			<div className="photo">
				<h2>{name}</h2>
				<div>{`$${price}`}</div>
			</div>
		</div>
	)
}


export default Product