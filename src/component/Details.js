import React, {Component} from 'react';
import {ProductConsumer} from "../Context";
import {Link} from "react-router-dom";
import {ButtonContainer} from "./Button";
import styled from "styled-components";

class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {
                    value => {
                        const {id, title, img, price, company, info, inCart} = value.detailProduct
                        return (
                            <div className="container py-5">
                                <div className="row">
                                    <div className="col-10 mx-auto text-blue text-center text-slanted my-5">
                                        <h1>{title}</h1>

                                    </div>

                                </div>


                                <div className="row">
                                    <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                        <ImgContainer>
                                            <img src={img} className="img-container img-fluid" alt="product"/>
                                        </ImgContainer>

                                    </div>
                                    <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                        <h2>Model:{title}</h2>
                                        <h4 className="text-title text-uppercase text-muted mb-2 mt-3">
                                            Made By:<span className="text-uppercase">{company}</span>
                                        </h4>
                                        <h4 className="text-blue">
                                            <strong>
                                                price:<span>$</span>{price}
                                            </strong>
                                        </h4>
                                        <p className="text-capitalize font-weight-bold mt-3 mb-0">
                                            Some about Product
                                        </p>
                                        <p className="text-muted lead">

                                            {info}
                                        </p>
                                        <div>
                                            <Link to='/'>
                                                <ButtonContainer>
                                                    back to product
                                                </ButtonContainer>
                                            </Link>
                                            <ButtonContainer cart disabled={inCart ? true : false} onClick={() => {
                                                value.addToCart(id)
                                                value.openModal(id)
                                            }}>
                                                {inCart ? "inCart" : "ad to cart"}
                                            </ButtonContainer>
                                        </div>


                                    </div>

                                </div>


                            </div>
                        )


                    }}
            </ProductConsumer>
        );
    }
}

const ImgContainer = styled.div`
.img-container{
position:relative;
overflow: hidden;
}
.img-container:hover{
transform: scale(1.5);
transition: transform .5s ease;
cursor:pointer;
}
`

export default Details;