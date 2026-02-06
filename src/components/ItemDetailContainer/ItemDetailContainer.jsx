import { useEffect, useState, useContext} from "react";
import { useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import ItemCount from "../ItemCount/ItemCount";
import { getProductId } from "../../firebase/db";
import { CartContext } from "../../context/CartContext";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ItemDetailContainer() {
  const { id } = useParams();
  const { addToCart, cart } = useContext(CartContext);

  const [data, setData] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const displayMsg = (msg) => {
    toast(msg);
  };

  useEffect(() => {
    const fetchProduct = async () => {
      const result = await getProductId(id);
      setData(result);
    };
    fetchProduct();
  }, [id]);

  useEffect(() => {
    if (!data) return;

    const existingProduct = cart.find(item => item.id === data.id);
    if (existingProduct) {
      setQuantity(existingProduct.quantity);
    }
  }, [cart, data]);

  if (!data) return <p className="p-5">Cargando producto...</p>;

  return (
    <>
      <ToastContainer />
      <div className="d-flex justify-content-center align-items-center p-5">
        <Card style={{ width: "40%" }} className="h-100">
          <Carousel pause="hover">
            <Carousel.Item key={data.id}>
              <img
                className="d-block w-100"
                src={data.data.img}
                alt={data.data.description}
              />
            </Carousel.Item>
          </Carousel>

          <Card.Body className="d-flex flex-column">
            <Card.Title>{data.data.name}</Card.Title>
            <Card.Subtitle>${data.data.price}</Card.Subtitle>
            <Card.Text className="flex-grow-1">
              {data.data.description}
            </Card.Text>

            <ItemCount quantity={quantity} onChange={setQuantity} />

            <Button
              variant="primary"
              className="mt-auto"
              onClick={() => {
                addToCart(data, quantity);
                displayMsg("Se agregó el producto al carrito");
              }}
            >
              Agregar al producto
            </Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default ItemDetailContainer;
