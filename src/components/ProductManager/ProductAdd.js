import React from 'react';
import classes from './ProductEdit.module.css';
class productAdd extends React.Component{
	state ={
		url:'',
		title:'',
		price:'',
		description:'',
		isVaild:false
	}
	onUrlChanged= (event) =>{
		this.setState({url:event.target.value});
		this.checkValid();
	}
	onTitleChanged= (event) =>{
		this.setState({title:event.target.value});
		this.checkValid();
	}
	onPriceChanged= (event) =>{
		this.setState({price:event.target.value});
		this.checkValid();
	}
	onDescriptionChanged= (event) =>{
		this.setState({description:event.target.value});
		this.checkValid();
	}
	checkValid = () => {
		if(this.state.url && this.state.title && this.state.price && this.state.description && this.state.url){
			this.setState({isVaild:true})
		}else{
			this.setState({isVaild:false})
		}
	}
	render(){
		return(
		<div>
			{this.state.url && this.state.title && this.state.price && this.state.description
				? 	<div className={classes.grid}>
			          <div className={classes.product}>
			              <div className={classes.product_image}><img className={classes.product_image_photo} src={this.state.url} alt={this.state.title}/></div>
			              <div className={classes.product_info}>
			                <div className={classes.product_title}>{this.state.title}</div>
			                <div className={classes.product_price}>$ {this.state.price}</div>
			                <div className={classes.product_description}>{this.state.description}</div>
			              </div>
			          </div>
			         </div>
				:null}

			<div ><input className={classes.input} type='text' placeholder='image url' value={this.state.url} onChange ={(event)=>this.onUrlChanged(event)}/></div>
			<div ><input  className={classes.input}type='text' placeholder='title' value={this.state.title} onChange ={(event)=>this.onTitleChanged(event)} /> </div>
			<div ><input  className={classes.input}type='number' min={0}  placeholder='Price' value={this.state.price} onChange ={(event)=>this.onPriceChanged(event)} /></div>
			<div ><textarea  className={classes.input} placeholder='descrption' value={this.state.description} onChange ={(event)=>this.onDescriptionChanged(event)} /> </div>
			<div className={classes.product_btn}  disabled={!this.state.isVaild} onClick={()=>this.props.addButton(this.state.title,this.state.price,this.state.description,this.state.url)} >Add</div>
		</div>
		)
	}
}
export default productAdd;