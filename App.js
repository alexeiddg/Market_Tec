import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Login from './components/Login';
import ShoppingCart from './components/ShoppingCart';
import RegisterServiceWorker from './registerServiceWorker';

function App() {
    return (
        <Router>
        <div className="App">
            <Navbar />
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/login" component={Login} />
                <Route path="/shopping-cart" component={ShoppingCart} />
            </Switch>
        </div>
        </Router>
    );
}

export default App;