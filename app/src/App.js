import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Login from './components/Login/Login';
import SelectProduct from './components/SelectProduct/SelectProduct.jsx';
import Home from './components/Home/Home';
import Product from './components/Product/Product';
import Navbar from './components/navbar/Navbar';
function App() {
    return (
        <Router>
        <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />

                <Route path="/check" component={Login} />

                <Route path="/buy" component={SelectProduct} />

                <Route path="/products" component={Product} />
            </Switch>
        </Router>
    );
}

export default App;
