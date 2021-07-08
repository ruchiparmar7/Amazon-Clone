import React from 'react';
import "./Product.css"
import { UseStateValue } from './StateProvider';

function Product({id,title,image,price,rating}) {
    const [{basket},dispatch] = UseStateValue();
    const addToBasket= () =>{
        //dispatch data to data link layer
        dispatch({
            type:"ADD_TO_BASKET",
            item:{
                id:id,
                title: title,
                image:image,
                price:price,
                rating:rating
            },
        });
    };
    return (
        <div className="product">
            <div className="product_info">
                <p>{title}</p>
                <p className="product_price">
                    <small>{'\u20B9'}</small>
                    <strong>{price}</strong>
                </p>
            <div className="product_rating">
                {Array(rating).fill().map((_,i) =>(
                    <p>❤</p>
                    ))
                }
            </div>    
            </div>
            <img src={image}></img> 
            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}

export default Product
