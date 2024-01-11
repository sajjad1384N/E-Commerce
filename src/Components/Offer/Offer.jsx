import React from "react";
import './offer.css'
import exlusive_image from '../Assets/exclusive_image.png'
const Offer=()=>{
    return(
        <div className="offers">
            <div className="offers-left">
                <h1> Exclusive</h1>
                <h1> Offers for you</h1>
                <p> ONLY ON BEST SELLES PRODUCT</p>
                <button> Check Nouw</button>

            </div>
            <div className="offers-right">
                <img src={exlusive_image} alt=""/>

            </div>
        </div>
    )
}
export default Offer;