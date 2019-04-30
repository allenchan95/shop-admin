import React from 'react';

import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/"  exact>PRODUCTS</NavigationItem>
       <NavigationItem link="/product-add"  exact>ADD</NavigationItem>
        
    </ul>
);


export default (navigationItems);
