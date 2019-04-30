import React,{Component} from 'react';
import {Redirect } from 'react-router-dom';
import ProductAddForm from '../../components/ProductManager/ProductAdd';
class ProductAdd extends Component {
	state={
		product:{},
	}
	componentDidMount(){
		
	}
	

	 onAddProduct=(title,price,description,imageUrl) =>{
	 	const postUrl= 'http://localhost:3000/admin/add-product'; 
	 			const data ={
	 				title:title,
	 				price:price,
	 				description:description,
	 				imageUrl:imageUrl
		}
	     fetch(postUrl,{
              method: 'post',
              headers: {
                'Content-Type' : 'application/json',
              },
               body: JSON.stringify(data)
            })
	     	.then(res => res.json())
	     	.then(data => {
	     		console.log('product added s');
				    this.props.history.push({
				    pathname: '/'
				})

	     })
        	.catch(e => console.log('error:', e))
	 }
	

	render(){

		return(
				<div>
					<ProductAddForm addButton={this.onAddProduct}/>
				</div>
		
			)
	}
}

export default ProductAdd;