


function Product({
	name,
	photo_url,
	price,
	is_stock
}) {

	return (
		<div>
			<img src={photo_url} alt=""/>
			{ is_stock && 
				( <div>in stock</div>)
			}
			<h2>{name}</h2>
			<div>{price}</div>
		</div>
	)
}


export default Product