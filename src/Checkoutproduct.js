import React from 'react'
import './Checkoutproduct.css'
import {UseStateValue} from "./StateProvider";

function Checkoutproduct({id,image,title,price,rating,hideButton}) {
    const [{basket},dispatch]=UseStateValue();
    const removeFromBasket=()=>{
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
        

    
}
    return (
        <div className="checkoutproduct">
           <img className='checkoutproduct_img' src={image}></img> 
           <div className='checkoutproduct_info'>
               <p className='checkoutproduct_title'>{title}</p>
               <p className='checkoutproduct_price'>
                    <small>{'\u20B9'}</small>
                    <strong>{price}</strong>
               </p>
            <div className="checkoutproduct_rating">
                {Array(rating)
                .fill()
                .map((_,i)=>
                (<p>❤</p>
                )
                )
                }

            </div>
            {!hideButton && (<button onClick={removeFromBasket}>Remove from Basket</button>)}
            
           </div>
        </div>
    )
}

export default Checkoutproduct 
