import React from 'react'
import "./Checkout.css"
import Checkoutproduct from './Checkoutproduct';
import { UseStateValue } from './StateProvider';
import Subtotal from './Subtotal';

function Checkout() {
    const [{basket,user},dispatch]=UseStateValue();
    return (
        <div className="checkout">
           <div className="checkout_left">
               <img className="checkout_ad" src="https://images-na.ssl-images-amazon.com/images/G/01/credit/img16/CCMP/newstorefront/YACC-desktop-nonprime-banner3.png" ></img>
                   <div>
                       <h3>Hello, {user?.email}</h3>
                        <h2 className="checkout_title">
                            Your Shopping Basket
                        </h2>
                        {basket.map(item => (
                            <Checkoutproduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                            />
                         ) )}
                    </div>
            </div>
            <div className="checkout_right">
               <Subtotal/>
            </div>
        </div>
    );
}
 
export default Checkout;