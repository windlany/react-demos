import React from 'react';
import './static/css/app.css';
import Products from './containers/ProductsContainer';
import Cart from './containers/CartContainer';

const App = () => (
    <div className="app">
        <h2>Shopping Cart</h2>
        <div className="container">
            <Products />
            <Cart />
        </div>
    </div>
)

export default App;