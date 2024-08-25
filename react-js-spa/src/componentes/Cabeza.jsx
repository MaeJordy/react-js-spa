import React from "react";
import logo from '../imagenes/0001.jpg'
import '../App.css';

function Cabeza(){
    return(
           <header className="Cabeza">
               <div className="logo">
                   <img src= {logo} alt="logo" />
               </div>
               
           </header>
    );
}
export default Cabeza;