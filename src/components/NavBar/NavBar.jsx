import { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import { Link, useLocation } from 'react-router-dom'; // Usamos `useLocation` para obtener la URL actual
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CarWidget from '../CartWidget/CarWidget';
import logo from '../../assets/logo.ico';
import { getCategorys } from '../../firebase/db';

function NavBar() {
    const [category, setCategory] = useState([]);
    const { pathname } = useLocation();  // Obtenemos la ruta actual de la URL

    useEffect(() => {
        const fetchCategory = async () => {
            try {
                const result = await getCategorys();
                setCategory(result);
            } catch (error) {
                console.log(error);
            }
        };
        fetchCategory();
    }, []);

    const getCategoryClass = (catName) => {
        // Verificamos si la categoría es la misma que la ruta actual
        return pathname.includes(catName) ? 'active-category' : '';
    };

    return (
        <header>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container className='mr-0'>
                    <Navbar.Brand>
                        <Link to='/' className='text-decoration-none text-dark'>
                            <img src={logo} alt='Logo'></img>
                            SailorDental
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto w-100">
                            {category.map(cat => (
                                <Nav.Link
                                    as={Link}
                                    key={cat.id}
                                    to={`/categoria/${cat.data.category}`}
                                    className={`nav-link ${getCategoryClass(cat.data.category)}`}  // Aplicamos la clase activa
                                    style={{
                                        backgroundColor: pathname.includes(cat.data.category) ? '#007bff' : 'transparent',
                                        color: pathname.includes(cat.data.category) ? 'white' : 'black',
                                        fontWeight: pathname.includes(cat.data.category) ? 'bold' : 'normal',
                                        borderRadius: '4px',
                                        padding: '10px 20px'
                                    }}
                                >
                                    {cat.data.name}
                                </Nav.Link>
                            ))}
                            <Nav.Link as={Link} to={`/carrito`} className='ms-auto'>
                                <CarWidget />
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}

export default NavBar;
