import {Container, Row, Col} from "react-bootstrap";
import {Producto} from "../components";

import menu from '../platos/platos.json';

const Carta = ({accionBoton, pedido}) => {
    return (
        <Container className="my-4" fluid>
            <Row className="justify-content-lg-center customRowCarta">
                {menu.map(p => <Col key={p.id} className="d-flex justify-content-center" xs={12} md={4} sm={6} lg={4} xl={2}>{<Producto producto={p} textoBoton='Añadir al Carrito' accion={accionBoton} pedido={pedido} />}</Col>)}
            </Row>
        </Container>
    )
};

export default Carta;