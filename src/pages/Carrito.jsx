import { Link } from "react-router-dom";
import {ProductoPedido, Boton} from "../components";
import {Container, Row, Col} from "react-bootstrap";

//arreglar distancia entre card para q esten mas juntas
//consultar si despues de darle al boton de confirmar pedido tiene que
//limpiarse la pagina o mostrar de otra forma el pedido
const Carrito = ({pedido, botonAgregar, botonEliminar}) => {
    const propsBotonConfirmarPedido = {
        onClick:() => alert('Tu pedido ha sido confirmado, muchas gracias.'),
        variant:'warning',
        style:{fontWeight:'bold', width:'200px'}
    };

    const cantidadTotal = pedido.reduce((total, producto) => total + producto.cantidad, 0);
    const importeTotal = pedido.reduce((total, producto) => total + producto.cantidad * producto.precio, 0);
    
    return (
        <Container className="my-4">
            <h3 style={{marginBottom:'60px', textDecoration:'underline'}}>Tu Pedido</h3>
            <Row className="justify-content-sm-center">
                {pedido.map(p => <Col key={p.id}>{<ProductoPedido producto={p} botonAgregar={botonAgregar} botonEliminar={botonEliminar} />}</Col>)}
            </Row>
            <Row className="justify-content-sm-center" style={{marginTop:'60px'}}>
                {cantidadTotal == 0 ?
                    <>
                        <p className="text-center">Parece que aun no ordenaste nada...</p>
                        <p className="text-center">Ve a la seccion {<Link to='/Carta'>Carta</Link>} para realizar tu pedido.</p>
                    </>
                    :
                    <>
                        <p className="text-center" >Cantidad total de productos: {cantidadTotal}</p>
                        <p className="text-center" style={{marginBottom:'40px'}}>Importe total: ${importeTotal}</p>
                        <Boton {...propsBotonConfirmarPedido} texto='Confirmar Pedido' />
                    </>
                }
            </Row>
        </Container>
    );
};

export default Carrito;