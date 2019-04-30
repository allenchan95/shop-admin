import React,{Component} from 'react';
import ProductProductManager from '../../components/ProductManager/ProductManager';
import {Redirect } from 'react-router-dom';
import ProductEditForm from '../../components/ProductManager/ProductEdit';
class Product extends Component {
	state={
		product:{},
		isEdit:false
	}
	componentDidMount(){
		this.fetchProduct();
	}
	fetchProduct = () =>{
		const { id } = this.props.match.params;
		console.log('fecth id');
		const url= 'http://localhost:3000/products/'+id; 
	     fetch(url,{
              method: 'get',
              headers: {
                'Content-Type' : 'application/json',
              }
            })
	     	.then(res => res.json())
	     	.then(data => {
	     		this.setState({product:data});

	     })
        	.catch(e => console.log('error:', e))
	 }

	 onEditButtonClicked = () => {
	 	this.setState({isEdit:!this.state.isEdit});
	 }
	  onBackButtonClicked = () => {
	 	this.setState({isEdit:false});
	 }
	 onUpdateProduct=(_id,title,price,description,imageUrl)=>{
	 	const postUrl= 'http://localhost:3000/admin/edit-product'; 
	 			const data ={
	 				_id:_id,
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
	     		console.log('s');

				    this.props.history.push({
				    pathname: '/'
				})

	     })
        	.catch(e => console.log('error:', e))
	 }
	 onDeleteProduct=(_id)=>{
	 	const postUrl= 'http://localhost:3000/admin/delete-product';
	 	const data ={
	 				_id:_id
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
	     		console.log('delete s');
				    this.props.history.push({
				    pathname: '/'
				})

	     })
        	.catch(e => console.log('error:', e))
	 
	 }
	 

	render(){

		return(
				<div>
				{ !this.state.isEdit?
					this.state.product
						? <ProductProductManager product={this.state.product} editButton={this.onEditButtonClicked} deleteButton={this.onDeleteProduct} />
						:null
						: <ProductEditForm  product={this.state.product} backButton={this.onBackButtonClicked} updateButton={this.onUpdateProduct} />
				}
				</div>
		
			)
	}
}

export default Product;