import React from 'react';
import classes from './ProductEdit.module.css';
class productEdit extends React.Component{
	state ={
		url:this.props.product.imageUrl,
		title:this.props.product.title,
		price:this.props.product.price,
		description:this.props.product.description
	}
	onUrlChanged= (event) =>{
		this.setState({url:event.target.value})
	}
	onTitleChanged= (event) =>{
		this.setState({title:event.target.value})
	}
	onPriceChanged= (event) =>{
		this.setState({price:event.target.value})
	}
	onDescriptionChanged= (event) =>{
		this.setState({description:event.target.value})
	}
	render(){
		return(
		<div>
			 <div className={classes.grid}>
	          <div className={classes.product}>
	              <div className={classes.product_image}><img className={classes.product_image_photo} src={this.state.url} alt={this.state.title}/></div>
	              <div className={classes.product_info}>
	                <div className={classes.product_title}>{this.state.title}</div>
	                <div className={classes.product_price}>$ {this.state.price}</div>
	                <div className={classes.product_description}>{this.state.description}</div>
	                 <div className={classes.product_btn_danger} onClick={this.props.backButton}>Back</div>
	              </div>
	          </div>
	         </div>
			<div><input className={classes.input} type='text' placeholder='image url' value={this.state.url} onChange ={(event)=>this.onUrlChanged(event)}/></div>
			<div><input className={classes.input} type='text' placeholder='title' value={this.state.title} onChange ={(event)=>this.onTitleChanged(event)} /> </div>
			<div><input className={classes.input} type='number' min={0}  placeholder='Price' value={this.state.price} onChange ={(event)=>this.onPriceChanged(event)} /></div>
			<div><textarea className={classes.input} type='text' placeholder='descrption' value={this.state.description} onChange ={(event)=>this.onDescriptionChanged(event)} /> </div>
			<div className={classes.product_btn} onClick={()=>this.props.updateButton(this.props.product._id,this.state.title,this.state.price,this.state.description,this.state.url )} >Save</div>
		</div>
		)
	}
}
export default productEdit;