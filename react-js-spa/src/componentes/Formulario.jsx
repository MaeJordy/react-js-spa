import React from "react";
import pizza from '../imagenes/003.jpg'
import '../App.css';

function Formulario(){

     

    return(
        <section className="centro">
            <div className="img-text">
                <img src={pizza} alt="pizza" />
                <h2>Pizza Americana</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat, eos quos, inventore
                     minus et accusamus rerum perspiciatis architecto deleniti corrupti cum, distinctio nemo? 
                     Eos et officia voluptates iusto nostrum a.</p>
            </div>
            <section className="formu">
                 <h2>CONTÁCTANOS PARA PODER LLEVAR UNA DELIPIZZA A TU CASA</h2>
                 <form>
                    <Form.Group>
                         <Form.Control type="text" placeholder="Nombres y Apellidos"></Form.Control>
                    </Form.Group>
                    <Form.Group>
                         <Form.Control type="email" placeholder="ejemplo@gmail.com"></Form.Control>
                    </Form.Group>
                    <Form.Group>
                         <Form.Control type="text" placeholder="Descripe tu pedido aqui"></Form.Control>
                    </Form.Group>
                    <button>Enviar</button>
                 </form>
            </section>

        </section>
    );
}
export default Formulario;