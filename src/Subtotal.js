import React from 'react'
import "./Subtotal.css"
import CurrencyFormat from "react-currency-format";
import { SportsBasketball } from '@material-ui/icons';
import {UseStateValue} from "./StateProvider";
import {getBasketTotal} from "./reducer";
import { useHistory } from 'react-router-dom';

function Subtotal() {
    const history=useHistory();

    const [{basket},dispatch] = UseStateValue();
    return (
        <div className="subtotal">
          <CurrencyFormat
          renderText={(value) => (
              <>
              <p>
                  Subtotal({basket.length} items):
                  <strong>{value}</strong>
              </p>
              <small className="subtotal_gift">
                  <input type="checkbox"/>
                      This order contains a gift
                  
              </small>
              
              </>
          )}  
          decimalscale={2}
          value={getBasketTotal(basket)}
          displayType={"text"}
          thousandSeparater={true}
          prefix={'\u20B9'}
          /> 
          <button onClick={e => history.push('/payment')}>Proceed to CheckOut</button>
        </div>
        
    ); 
}

export default Subtotal
