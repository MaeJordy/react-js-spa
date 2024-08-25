import React from "react";
import banner from '../imagenes/0002.jpg'
import '../App.css';

function Banner(){
    return(
           <section className="banner">
               <img src={banner} alt="banner" />
           </section>
    );
}
export default Banner;