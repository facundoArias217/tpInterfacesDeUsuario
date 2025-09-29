import { Link } from "react-router-dom";
import {ProductoPedido, Boton} from "../components";
import {Container, Row, Col} from "react-bootstrap";

//arreglar distancia entre card para q esten mas juntas y centradas -> arreglado
//consultar si despues de darle al boton de confirmar pedido tiene que
//limpiarse la pagina o mostrar de otra forma el pedido
const Carrito = ({pedido, botonAgregar, botonEliminar}) => {
    const propsBotonConfirmarPedido = {
        onClick:() => alert('Tu pedido ha sido confirmado, muchas gracias.'),
        variant:'warning',
        style:{fontWeight:'bold', width:'auto'},
    };

    const cantidadTotal = pedido.reduce((total, producto) => total + producto.cantidad, 0);
    const importeTotal = pedido.reduce((total, producto) => total + producto.cantidad * producto.precio, 0);
    
    return (
        <Container className="my-4">
            <h3 style={{marginBottom:'60px', textDecoration:'underline'}}>Tu Pedido</h3>
            <Row className="justify-content-sm-center">
                {pedido.map(p => <Col key={p.id} className="d-flex justify-content-center customStyle" xs={12} md={4} sm={6} lg={3} xl={2}>{<ProductoPedido producto={p} botonAgregar={botonAgregar} botonEliminar={botonEliminar} />}</Col>)}
            </Row>
            <Row className="justify-content-center" style={{marginTop:'60px'}}>
                <Col className="justify-content-center customStyle" xs={12} md={4} sm={6} lg={3} xl={3}>
                    {cantidadTotal == 0 ?
                        <div className="text-center">
                            <p>Parece que aun no ordenaste nada...</p>
                            <p>Ve a la seccion {<Link to='/Carta'>Carta</Link>} para realizar tu pedido.</p>
                        </div>
                        :
                        <div className="text-center">
                            <p>Cantidad total de productos: {cantidadTotal}</p>
                            <p style={{marginBottom:'40px'}}>Importe total: ${importeTotal}</p>
                            <Boton {...propsBotonConfirmarPedido} texto='Confirmar Pedido' />
                        </div>
                    }
                </Col>
            </Row>
        </Container>
    );
};

export default Carrito;