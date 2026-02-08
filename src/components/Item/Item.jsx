import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
function Item({product}){
    return (
        <Card style={{ width: '18rem' }} className="h-100">
            <Card.Img variant="top" src={product.data.img} />
            <Card.Body className="d-flex flex-column">
                <Card.Title>{product.data.name}</Card.Title>

                <Card.Text className="flex-grow-1">
                {product.data.description}
                </Card.Text>

                <Button as={Link} to={`/producto/${product.id}`} variant="primary" className="mt-auto">
                Ver producto
                </Button>
            </Card.Body>
        </Card> 
    )
}

export default Item;