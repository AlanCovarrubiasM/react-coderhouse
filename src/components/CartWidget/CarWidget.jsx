import carritoIcon  from '../../assets/carritoIcon.png'
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
function CarWidget(){
    const { getQuantity } = useContext(CartContext);
    return(
        <div className='d-flex position-relative'>
            <img src={carritoIcon}></img>
            <span className='bg-primary text-white rounded-circle position-absolute d-inline-flex justify-content-center align-items-center fs-6' style={{width: "20px", height: "20px", right: "-10px", top: "-10px"}}>{getQuantity}</span>
        </div> 
        
    );
}

export default CarWidget;