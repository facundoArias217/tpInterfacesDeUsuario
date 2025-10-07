import {Container, Nav, Navbar} from 'react-bootstrap'
import {NavLink} from 'react-router-dom';

//react al hacer un map pide pasar como prop key=s.id al primer componente que recibe el map
//y en los Nav hago s.nombre para mostrarlo
const NavBar = () => {
    const secciones = [
        {id:1, nombre:'Inicio', to: '/'},
        {id:2, nombre:'Carta', to: '/Carta'},
        {id:3, nombre:'Carrito', to: '/Carrito'},
        {id:4, nombre:'Contacto Y Reservas', to: '/ContactoYReserva'},
    ];

    return (
        <Navbar sticky='top' expand="lg" className="bg-body-tertiary navbar-custom">
            <Container fluid>
                <Navbar.Brand as={NavLink} to="/" className="brand">Luna & Granos Café</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto nav-items">
                        {secciones.map(s => (
                            <Nav.Link
                                key={s.id}
                                as={NavLink}
                                to={s.to}
                                end
                                className={({ isActive }) => isActive ? 'nav-link-custom active' : 'nav-link-custom'}
                            >
                                {s.nombre}
                            </Nav.Link>
                        ))}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
};

export default NavBar;