import React, {Component} from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import {Switch,Route} from  'react-router-dom'
import Navbar from "./component/Navbar";
import Productlist from "./component/Productlist";
import Details from "./component/Details";
import Cart from "./component/Cart";
import Modal from "./component/Modal";

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
            <Modal/>
        </React.Fragment>
    );
  }
}
export default App;




