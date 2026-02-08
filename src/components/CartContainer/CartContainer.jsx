import { useContext, useState, useEffect } from "react";
import { CartContext } from "../../context/CartContext";
import { createOrder } from "../../firebase/db";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import CartItem from "../CartItem/CartItem";

function CartContainer() {
    const { cart, getQuantity, deleteAll, getSubtotal, getTotal} = useContext(CartContext);
    console.log()

    const displayMsg = (msg) => {
        toast(msg);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const phone = e.target.phone.value;
        const address = e.target.address.value;

        const user = { name, email, phone, address };
        try{
            const id = await createOrder(user, cart, getTotal());
            console.log("El id de compra es: ", id);
            deleteAll();
        
            setTimeout(() => {
                if(id != 0){
                    displayMsg("Se compro el producto correctamente");
                    displayMsg("Su id de compra es: " + id);
                }
            }, 1000);
        }
        catch{
            displayMsg("Error al comprar el producto");
        }
    };

    if (getQuantity() < 1) {
        return (
            <>
                <h2 className="position-absolute top-50 start-50 translate-middle">No hay productos en el carrito...</h2>
                <ToastContainer />
            </>
        );
    }

    return (
        <>
            <ToastContainer />
            <main className="m-4 m-sm-5 d-flex flex-wrap flex-sm-nowrap justify-content-between">
                <section className="width-avilable" style={{ width: "65%" }}>
                    {cart.map(item => (
                        <CartItem key={item.id} item={item} />
                    ))}
                    <Button variant="danger" onClick={() => deleteAll()}>
                        Eliminar Prdocutos
                    </Button>
                </section>
                <section className="ml-sm-5 width-avilable" style={{ width: "30%" }}>
                    <div className="firstColor p-3">
                        <p className="mb-4 h4">Cotización de productos</p>
                        <div className="d-flex justify-content-between">
                            <p className="h5">Subtotal:</p>
                            <p className="h5">${getSubtotal()}</p>
                        </div>
                        <div className="d-flex justify-content-between">
                            <p className="h5">Total:</p>
                            <p className="h5">${getTotal()}</p>
                        </div>
                        <p className="font-weight-light text-secondary">Estos productos se agregan con el IVA.</p>

                        <Form onSubmit={handleSubmit}>
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control required type="text" name="name" placeholder="Alan Covarrubias" />
                            <Form.Label>Correo</Form.Label>
                            <Form.Control required type="email" name="email" placeholder="aaaa@aaa.com" />
                            <Form.Label>Celular</Form.Label>
                            <Form.Control required type="text" name="phone" placeholder="3121415481" />
                            <Form.Label>Dirección</Form.Label>
                            <Form.Control required type="text" name="address" placeholder="Loma Bonita" />
                        
                            <Button variant="primary" type="submit">
                                Comprar
                            </Button>
                        </Form>
                    </div>
                </section>
            </main>
        </>
    );
}

export default CartContainer;
