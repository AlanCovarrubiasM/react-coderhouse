import { useState } from "react";
import Button from 'react-bootstrap/Button';

function ItemCount(){
    const[cantidad, setCantidad] = useState(0);
    return(
        <div className="d-flex align-items-center justify-content-center p-3">
            <Button className="rounded-circle m-3" style={{ width: "50px", height: "50px" }} variant="secondary" onClick={() => setCantidad(cantidad > 0 ? cantidad - 1 : 0)}>-</Button>
                <div>{cantidad}</div>
            <Button className="rounded-circle m-3" style={{ width: "50px", height: "50px" }} variant="secondary" onClick={() => setCantidad(cantidad + 1)}>+</Button>
        </div>
    );
}

export default ItemCount;