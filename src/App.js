import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router,Switch,Route}
from "react-router-dom";
import Checkout from "./Checkout";
import Login from './Login';
import { useEffect} from 'react';
import { auth } from './firebase';
import { UseStateValue } from './StateProvider';
import Payment from './Payment';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import Orders from './Orders';
const stripePromise = loadStripe('pk_test_51J9OqqSJ5VCPWl2rYaEuzdne2K4PDv7TrHrn7ohTFdRjIqSk1C8TPvn0NdmfvXcsaG0a42Ii0MsVH6gLlLfnY49a006A9vBEtw');


function App() {
const  [{},dispatch] = UseStateValue();
useEffect(()=>{
//It will run only once app component load

auth.onAuthStateChanged(authUser => {
  console.log("THE USER IS >> ",authUser);
  if(authUser){
    //user just login in /user logged in

    dispatch({
      type: 'SET_USER',
      user: authUser
    })
  }else{
    //user is logged out
    dispatch({
      type: 'SET_USER',
      user: null
    })
  }
})
},[])
  return (
    <Router>
    <div className="app">
    <Switch>

      <Route path="/orders">
        <Header/>
        <Orders/>
      </Route>

      <Route path="/login">
        <Header/>
        <Login/>
      </Route>

      <Route path="/checkout">
        <Header/>
        <Checkout />
      </Route>

      <Route path="/payment">
        <Header/>
        <Elements stripe={stripePromise}>
            <Payment/>
        </Elements>
        </Route>

      <Route path="/">
        <Header/>    
        <Home/>
      </Route>
     
     </Switch>
    
    </div>
    </Router>
  );
}

export default App;
