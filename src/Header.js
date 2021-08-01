import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {Link} from "react-router-dom";
import {UseStateValue} from "./StateProvider";
import { auth } from './firebase';

function header() {

    const [{basket,user},dispatch] = UseStateValue(); 
    
    const handleAuthentication =() =>{
        if(user){
            auth.signOut();
        }
    }

    const linkStyle={textDecoration:'none'}
    return (
        
        <div class='header'>
            <Link to="/">
                <img className="header_logo" src={"https://silverhillsbakery.ca/wp-content/uploads/2021/03/Amazon-logo-white.png"}/>
            </Link>
            <div className="header_search">
                <input className="header_serachinput" type="text"></input>
                <SearchIcon className="header_searchicon"></SearchIcon>

            </div>
            <div className="header__nav" >
                <Link to={!user && '/login'} style={linkStyle}>
                    <div onClick={handleAuthentication} className="header__option">                   
                        <span className="header__optionOne">Hello {!user ? 'Guest':user.email}</span>
                        <span className="header__optionTwo">{user?"Sign Out":"Sign In"}</span>
                    </div>
                </Link>

                <Link to = '/orders' style={linkStyle}>
                    <div className="header__option">
                    <span className="header__optionOne">Returns</span>
                    <span className="header__optionTwo">& orders</span>
                    </div>
                </Link>

                
                <div className="header__option">
                <span className="header__optionOne">Your</span>
                <span className="header__optionTwo">Prime</span>
                    </div>
                <Link to="/checkout">
                    <div className="header_optionbasket">
                        <ShoppingBasketIcon/>
                        <span className="header_optionTwo header_basketcount">{basket?.length}</span>
                    </div>
                </Link>
                   
            </div>
        </div>
    ); 
}

export default header
