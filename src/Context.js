import React, {Component} from 'react';
import {storeProducts, detailProduct} from "./data";

const ProductContext = React.createContext();

class ProductProvider extends Component {

    state = {
        products: [],
        detailProduct: detailProduct,
        cart:[],
        modalOpen:false,
        modalProduct:detailProduct
    }

    componentDidMount() {
        this.setProduct()
    }

    setProduct=()=>{
        let tempProduct=[]
        storeProducts.forEach(item=>{
            const singleItem={...item}
            tempProduct=[...tempProduct,singleItem]
        })
        this.setState(()=>{
            return {products:tempProduct}
        })
    }

    getItem=(id)=>{
        const product=this.state.products.find(find=>find.id===id)
        return product

    }

    handleDetail = (id) => {
        const product=this.getItem(id)
        this.setState(()=>{
            return {detailProduct:product}
        })

    };

    addToCart = id => {
        let tempProduct=[...this.state.products]
        const index=tempProduct.indexOf(this.getItem(id))
        const product=tempProduct[index]
        product.inCart=true
        product.count=1
        const total=product.price
        product.total=total
        this.setState(()=>{
            return{products:tempProduct,cart:[...this.state.cart,product]}
        },()=>{console.log(this.state)})
    };

    openModal=id=>{
        const product=this.getItem(id)
        this.setState(()=>{
            return {
                modalProduct:product,
                modalOpen:true
            }
        })
    }

    closeModal=()=>{
        this.setState(()=>{
           return{ modalOpen:false}
        })
    }



    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail: this.handleDetail,
                addToCart: this.addToCart,
                openModal:this.openModal,
                closeModal:this.closeModal
            }}>
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};