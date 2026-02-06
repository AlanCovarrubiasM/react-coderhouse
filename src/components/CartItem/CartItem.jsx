import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

function CartItem({item}){
    const { deleteToCart } = useContext(CartContext);
    
    return(
        <div id={item.id} className="media mb-5">
                        <div className="media-body d-flex justify-content-between">
                            <div className="d-flex align-items-center">
                            <img
                                src={item.data.img}
                                alt={item.data.description}
                                className="mr-3"
                                style={{
                                width: '150px',       
                                height: '150px',      
                                objectFit: 'contain', 
                                flexShrink: 0      
                                }}
                            />
                            <div className="">
                                <p className="m-0 font-size-movil font-weight-bold h5">
                                {item.data.name}
                                </p>
                                <p className="mt-1">Categoria: {item.data.category}</p>
                                <p className="mb-0">Cantidad: {item.quantity}</p>
                                <p>${item.data.price}</p>
                            </div>
                            </div>

                            <div className="d-flex flex-column">
                            <button type="button" className="btn btn-link d-flex justify-content-end" onClick={() => deleteToCart(item.id)}>
                                <img
                                className="size-icon-carrito-close"
                                src="https://static.thenounproject.com/png/53235-200.png"
                                width="30"
                                alt="Eliminar"
                                />
                            </button>

                            <p className="font-size-movil d-flex justify-content-end h5">
                                Total producto
                            </p>
                            <p className="font-size-movil d-flex justify-content-end h5">
                                ${item.data.price * item.quantity}
                            </p>
                            </div>
                        </div>
                    </div>
    )
}

export default CartItem;