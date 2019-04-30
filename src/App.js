import React, { Component } from 'react';
import './App.css'
import { Route, Switch, withRouter ,Redirect } from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import Shop from './containers/Shop/Shop';
import Product from './containers/Product/Product';
import ProductAddForm from './containers/Product/ProductAdd';



class App extends Component {

  render () {
    let routes =(
      <Switch>
        <Route path="/product/:id" component={Product}  />
         <Route path="/product-add" component={ProductAddForm}  />
        <Route path="/" component={Shop}  exact />
        <Redirect to='/'/>
      </Switch>
      );

    return (
      <div className='App'>
        <Layout>
          {routes}
        </Layout>
      </div>
    );
  }
}

export default App;
