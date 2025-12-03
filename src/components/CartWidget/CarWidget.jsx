import carritoIcon  from '../../assets/carritoIcon.png'
function CarWidget(){
    return(
        <div className='d-flex position-relative'>
            <img src={carritoIcon}></img>
            <span className='bg-primary text-white rounded-circle position-absolute d-inline-flex justify-content-center align-items-center fs-6' style={{width: "20px", height: "20px", right: "-10px", top: "-10px"}}>5</span>
        </div>
        
    );
}

export default CarWidget;