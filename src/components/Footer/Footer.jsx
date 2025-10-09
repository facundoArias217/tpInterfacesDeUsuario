import { Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const secciones = [
    { id: 1, nombre: "Inicio", to: "/" },
    { id: 2, nombre: "Carta", to: "/Carta" },
    { id: 3, nombre: "Carrito", to: "/Carrito" },
    { id: 4, nombre: "Contacto y Reservas", to: "/ContactoYReserva" },
  ];

  return (
    <footer className="footer py-4 mt-5">
      <Container className="text-center">
        <h5 className="fw-bold mb-3 brand">Luna & Granos Café</h5>

        <Nav className="justify-content-center mb-3">
          {secciones.map((s) => (
            <Nav.Link
              key={s.id}
              as={NavLink}
              to={s.to}
              end
              className={({ isActive }) =>
                isActive
                  ? "footer-link text-decoration-none active"
                  : "footer-link text-decoration-none"
              }
            >
              {s.nombre}
            </Nav.Link>
          ))}
        </Nav>

        <div className="social-icons mb-3">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light mx-2"
          >
            <i className="bi bi-instagram"></i>
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light mx-2"
          >
            <i className="bi bi-facebook"></i>
          </a>
          <a
            href="https://wa.me/5491122334455"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light mx-2"
          >
            <i className="bi bi-whatsapp"></i>
          </a>
        </div>

        <small className="text-muted d-block">
          &copy; {new Date().getFullYear()} Luna & Granos Café. Todos los derechos reservados.
        </small>
      </Container>
    </footer>
  );
};

export default Footer;
