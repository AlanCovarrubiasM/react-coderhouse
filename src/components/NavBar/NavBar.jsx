import Container from 'react-bootstrap/Container';
import {Link} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import CarWidget from '../CartWidget/CarWidget';
import logo  from '../../assets/logo.ico'

function NavBar(){
    return(
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
                            <Nav.Link as={Link} to='/categoria/beauty'>Belleza</Nav.Link>
                            <Nav.Link as={Link} to='/categoria/fragrances'>Fragancias</Nav.Link>
                            <Nav.Link as={Link} to='/categoria/skin-care'>Skin Care</Nav.Link>
                            <Nav.Link as={Link} to='/categoria/sunglasses'>Lentes de Sol</Nav.Link>
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