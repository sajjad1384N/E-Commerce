import React from "react";
import './newsletter.css'
const NewsLetter =()=>{
    return(
        <div className="newsletter">
            <h1>
                Get Exclusive Offer On Your Email
            </h1>
            <p>
                Subscribe to our newwletter and stay updated
            </p>
            <div>
                <input type="email" placeholder=" your email id"/>
                <button> Subscribe</button>
            </div>


        </div>
    )
}
export default NewsLetter;