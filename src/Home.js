import {React} from 'react';
import "./Home.css";
import pic from "./images/sd.svg";
import Product from "./Product.js";

function Home() {
    return (
        <div className="home">
        <div className="home_container">
            <img className="home_img"  src={"https://images-na.ssl-images-amazon.com/images/G/01/AmazonMusic/2020/ACQ/Gateway/HolidayNonPromo/DV5/US-EN_100120_HOLNonPromo_ACQ_GW_Hero_D_3000x1200_CV4_2._CB415751492_.jpg"}/>
            <div className="home_row">
                <Product id="1234523" title='The Vivek startup' price={29.99} image="https://m.media-amazon.com/images/I/515CfVuCtSL.jpg" rating={5} />
                <Product id="23456812" title='Elon musk book' price={19.99} image="https://images-na.ssl-images-amazon.com/images/I/5112YFsXIJL.jpg" rating={4}/>

                
            </div>
            <div className="home_row">
                <Product id="23115674" title='MacBook Pro' price={219.99} image="data:image/jpeg;base64,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" rating={5}/>
                <Product id="23145667" title='iphone11' price={109.99} image="https://images-na.ssl-images-amazon.com/images/I/71i2XhHU3pL._SX679_.jpg" rating={3}/> 
                <Product  id="7896313" title='iwatch 6' price={129.99} image="https://images-na.ssl-images-amazon.com/images/I/81WqPA2ealL._SX466_.jpg" rating={3}/>
            </div>
            <div className="home_row">
            <Product id="2356890" title='Avengers book' price={19.99} image="https://images-na.ssl-images-amazon.com/images/I/51pBSERX4dL._SX331_BO1,204,203,200_.jpg" rating={4} />
                
            </div>
        </div>
        </div>
        
    );
}

export default Home
