import React,{Component} from 'react';
import Products from '../../components/Products/Products';
class Shop extends Component {
	state={
		products:[]
	}
	componentDidMount(){
		this.fetchProducts();
	}
	 fetchProducts = () =>{
	     fetch(`http://localhost:3000/products`,{
              method: 'get',
              headers: {
                'Content-Type' : 'application/json',
              }
            })
	     	.then(res => res.json())
	     	.then(data => {
	     		this.setState({products:data}
	     		)})
        	.catch(e => console.log('error:', e))
	 }
	render(){
		return(
				<div>
					<Products products={this.state.products}/>
				</div>
			)
	}
}






export default Shop;