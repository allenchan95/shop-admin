import React from 'react';
import classes from './ProductManager.module.css';
const product = (props) => {
	return(
        <div className={classes.grid}>
          <div className={classes.product}>
              <div className={classes.product_image}><img className={classes.product_image_photo} src={props.product.imageUrl} alt={props.product.title}/></div>
              <div className={classes.product_info}>
                <div className={classes.product_title}>{props.product.title}</div>
                <div className={classes.product_price}>$ {props.product.price}</div>
                <div className={classes.product_description}>{props.product.description}</div>
                <div className={classes.product_btn} onClick={props.editButton}>Edit</div>
                <div className={classes.product_btn_danger} onClick={()=>props.deleteButton(props.product._id)} >Delete</div>
              </div>
          </div>
         </div>
		)
}
export default product;