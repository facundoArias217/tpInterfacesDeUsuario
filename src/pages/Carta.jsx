import {Container, Row, Col} from "react-bootstrap";
import {Producto} from "../components";
import menu from '../platos/platos.json'
//poner un hover a cada card
//ver si como acomodar las columnas del container en pantalla completa
//poder ver la cantidad de cada producto en la card si ya fue añadido

const Carta = ({accionBoton}) => {
    return (
        <Container className="my-4">
            <Row className="justify-content-lg-center">
                {menu.map(p => <Col key={p.id}>{<Producto producto={p} textoBoton='Añadir al Carrito' accion={accionBoton} />}</Col>)}
            </Row>
        </Container>
    )
};

export default Carta;