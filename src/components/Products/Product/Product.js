import React from 'react';
import './Product.css';
import { withRouter } from 'react-router-dom';;
const product = (props) => {
  const onViewClick=()=>{
    const id=props._id;
    let path = `/product/${id}`;
    props.history.push({
    pathname: path
})
  }
	return(
          <div className="product">
              <div className="product_image"><img className='product_image_photo' src={props.image} alt={props.title}/></div>
              <div className="product_info">
                <div className="product_title">{props.title}</div>
                <div className="product_price">$ {props.price}</div>
                <div className="product_descrption">{props.description}</div>
                <div className="product_btn" onClick={onViewClick}>VIEW</div>
              </div>
          </div>



		)
}
export default withRouter(product);