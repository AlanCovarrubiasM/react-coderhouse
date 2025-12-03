import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import CarWidget from '../CartWidget/CarWidget';
import logo  from '../../assets/logo.ico'

function NavBar(){
    return(
        <header>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container className='mr-0'>
                    <Navbar.Brand href="#home">
                        <img src={logo} alt='Logo'></img>
                        SailorDental
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto w-100">
                            <Nav.Link href="#ropa">Ropa</Nav.Link>
                            <Nav.Link href="#calzado">Herramientas</Nav.Link>
                            <Nav.Link href="#accesosrios">Material</Nav.Link>
                            <Nav.Link href="#infnatil">Equipos</Nav.Link>
                            <Nav.Link href="#carritoCompras" className='ms-auto'>
                                <CarWidget></CarWidget>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
        
    )
}

export default NavBar