import {Container, Nav, Navbar} from 'react-bootstrap'
import {Link} from 'react-router-dom';

//react al hacer un map pide pasar como prop key=s.id al primer componente que recibe el map
//y en los Nav hago s.nombre para mostrarlo
const NavBar = () => {
    const secciones = [{id:1, nombre:'Inicio'}, {id:2, nombre:'Carta'}, {id:3, nombre:'Carrito'}, {id:4, nombre:'Contacto Y Reservas'}];

    return (
        <Navbar sticky='top' expand="lg" className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Brand as={Link} to="/">Luna & Granos Café</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {secciones.map(s => <Nav.Link key={s.id} as={Link} to={`/${s.nombre}`}>{s.nombre}</Nav.Link>)}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
};

export default NavBar;