import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import ItemCount from "../ItemCount/ItemCount";

function ItemDetailContainer(){
    const {id} = useParams();
    const[data, setData] = useState(null);

    useEffect(() => {
        const fetchProduct  = async () =>{
            try {
                const response = await fetch(`https://dummyjson.com/products/${id}`);
                if (!response.ok) 
                    throw new Error("Error en la petición");
                const result = await response.json();
                console.log(result);
                setData(result);
            } catch (error) {
                console.log(error);
            }
        }
        fetchProduct();
    },[id]);
    
    if (!data) {
        return <p className="p-5">Cargando producto...</p>;
    }

    return (
        <div className="d-flex justify-content-center align-items-center p-5">
            <Card style={{ width: '40%' }} className="h-100">
                <Carousel interval={3000} pause="hover">
                    {data.images.map((img, index) => (
                        <Carousel.Item key={index}>
                            <img
                                className="d-block w-100"
                                src={img}
                                alt={`Imagen ${index + 1}`}
                            />
                        </Carousel.Item>
                    ))}
                </Carousel>
                <Card.Body className="d-flex flex-column">
                    <Card.Title>{data.title}</Card.Title>
                    <Card.Subtitle>${data.price}</Card.Subtitle>
                    <Card.Text className="flex-grow-1">
                    {data.description}
                    </Card.Text>
                        <ItemCount/>
                    <Button variant="primary" className="mt-auto">
                    Agregar al producto
                    </Button>
                </Card.Body>
            </Card>
        </div>
        
    );
}

export default ItemDetailContainer;

