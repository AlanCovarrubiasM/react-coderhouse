import { useContext, useState, useEffect } from "react";
import { CartContext } from "../../context/CartContext";
import { createOrder } from "../../firebase/db";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import CartItem from "../CartItem/CartItem";

function CartContainer(){
    const { cart, getQuantity } = useContext(CartContext);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const totalCalc = cart.reduce((acc, item) => {
            return acc + item.data.price * item.quantity;
        }, 0);

        setTotal(totalCalc);
    }, [cart]); 

    const handleSubmit = (e) =>{
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const phone = e.target.phone.value;
        const address = e.target.address.value;

        const user = {name, email, phone, address}
        createOrder(user, cart, total)
    }

    if(getQuantity < 1){
        return(
            <h2 className="position-absolute top-50 start-50 translate-middle" >No hay productos en el carrito...</h2>
        );
    }

    return(
        <main className="m-4 m-sm-5 d-flex flex-wrap flex-sm-nowrap justify-content-between">
            <section className="width-avilable" style={{ width: "65%" }}>
                {cart.map(item =>(
                    <CartItem item={item} />
                ))}
            </section>
            <section className="ml-sm-5 width-avilable" style={{ width: "30%" }}>
                <div className="firstColor p-3">
                    <p className="mb-4 h4">Contizacion de productos</p>
                    <div className="d-flex justify-content-between">
                        <p className="h5">Subtotal:</p>
                        <p className="h5">${total}</p>
                    </div>
                    <div className="d-flex justify-content-between">
                        <p className="h5">Total:</p>
                        <p className="h5">${total + (total*.16)}</p>
                    </div>
                    <p className="font-weight-light text-secondary">Estos productos se agrega el IVA.</p>

                    <Form onSubmit={handleSubmit}>
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control required type="text" name="name" placeholder="Alan Covarrubias" />
                            <Form.Label>Correo</Form.Label>
                            <Form.Control required type="email" name="email" placeholder="aaaa@aaa.com" />
                            <Form.Label>Celular</Form.Label>
                            <Form.Control required type="number" name="phone" placeholder="3121415481" />
                            <Form.Label>Direccion</Form.Label>
                            <Form.Control required type="text" name="address" placeholder="Loma Bonita" />
                      
                        <Button variant="primary" type="submit">
                            Comprar
                        </Button>
                    </Form>
                </div>
            </section>
        </main>
    );
}

export default CartContainer;