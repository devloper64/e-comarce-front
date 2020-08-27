import React, {Component} from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import {Switch,Route} from  'react-router-dom'
import Navbar from "./component/Navbar";
import Productlist from "./component/Productlist";
import Details from "./component/Details";
import Cart from "./component/Cart";

class App extends Component {
  render() {
    return (
        <React.Fragment>
            <Navbar/>
            <Switch>
                <Route exact path="/" component={Productlist}></Route>
                <Route path="/details" component={Details}></Route>
                <Route path="/cart" component={Cart}></Route>
            </Switch>
        </React.Fragment>
    );
  }
}
export default App;




