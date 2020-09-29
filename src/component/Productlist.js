import React, {Component} from 'react';
import Tittle from "./Tittle";
import {ProductConsumer} from "../Context"
import Product from "./Product";

class Productlist extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container ">
                        <Tittle name="our" tittle="products"/>
                        <div className="row">
                            <ProductConsumer>
                                {value => {
                                    return value.products.map(product => {
                                        return <Product key={product.id} prodcut={product}/>
                                    })
                                }}
                            </ProductConsumer>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Productlist;