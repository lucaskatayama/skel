import React from 'react';
import { Link, Match } from 'react-router';
import { connect } from 'react-redux';
import { Home, Login, ProductDetails, ProductList, Cart } from '../pages';
import { Sidebar, ControlSidebar, Footer, Header } from '../layouts';
import { fetchBefore, withAuthentication } from '../enhancers';


const App = ({ pathname, dispatch }) => (
  <div>
    <Header />
    <Sidebar />
    <div className="content-wrapper">
      <Match exactly pattern={pathname} component={Home} />
      <Match
        exactly
        pattern="/products"
        render={fetchBefore(dispatch, ProductList)}
      />
      <Match exactly pattern="/products/:permalink" component={ProductDetails} />
      <Match exactly pattern="/cart" component={withAuthentication(Cart)} />
      <Match exactly pattern="/login" component={Login} />
    </div>
    <Footer />
    <ControlSidebar />
  </div>
);

App.propTypes = {
  pathname: React.PropTypes.string.isRequired,
  dispatch: React.PropTypes.func.isRequired,
};

export default connect()(App);
