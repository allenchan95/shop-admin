import React from 'react';
import classes from './Products.module.css';

import Product from './Product/Product';
const products = ({products}) => {
	return(
		<div className={classes.grid}>
			{	
				products.map((product,i) => {
					return (
						<Product
			 				key={i} 
			 				_id={products[i]._id} 
							title={products[i].title} 
							price={products[i].price}
							image={products[i].imageUrl}
							description={products[i].description}
			 			/>
			 		);
				})
			}	
		</div>
		)
}

export default products;