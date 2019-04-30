import React from 'react';
import {withRouter} from 'react-router-dom';
import Logo from '../../assets/images/icon.jpg';
import classes from './Logo.module.css';

const logo = (props) => {
	const onIconClicked =() =>{
		props.history.push('/');
	}
	return (
	    <div className={classes.Logo} style={{height: props.height}}>
	        <img src={Logo} alt="MyIcon"  onClick={()=>onIconClicked()}/>
	    </div>
);
}

export default withRouter(logo);