import { useState } from "react";
import Button from 'react-bootstrap/Button';

function ItemCount({quantity, onChange}){
    const incrementar = () =>{
        const nueva = quantity + 1;
        onChange(nueva);
    }

    const decrementar = () =>{
        const nueva = quantity > 1 ? quantity - 1 : 1
        if (typeof onChange === "function")
            onChange(nueva);

    }

    return(
        <div className="d-flex align-items-center justify-content-center p-3">
            <Button className="rounded-circle m-3" style={{ width: "50px", height: "50px" }} variant="secondary" onClick={decrementar}>-</Button>
                <div>{quantity}</div>
            <Button className="rounded-circle m-3" style={{ width: "50px", height: "50px" }} variant="secondary" onClick={incrementar}>+</Button>
        </div>
    );
}

export default ItemCount;