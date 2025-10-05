import { Link } from "react-router-dom";
import {ProductoPedido, Boton} from "../components";
import {Container, Row, Col} from "react-bootstrap";

//arreglar distancia entre card para q esten mas juntas y centradas -> arreglado
//consultar si despues de darle al boton de confirmar pedido tiene que
//limpiarse la pagina o mostrar de otra forma el pedido
const Carrito = ({pedido, botonAgregar, botonEliminar, confirmarPedido, cantPedidosHechos, pedidosAnteriores}) => {    
    const propsBotonConfirmarPedido = {
        onClick: confirmarPedido,
        variant:'warning',
        style:{fontWeight:'bold', width:'auto'},
    };

    const cantidadTotal = pedido.reduce((total, producto) => total + producto.cantidad, 0);
    const importeTotal = pedido.reduce((total, producto) => total + producto.cantidad * producto.precio, 0);
    const renderContenido = () =>{
        if(cantidadTotal === 0 && cantPedidosHechos === 0){
            return(
                <div className="text-center">
                    <p>Parece que aun no ordenaste nada...</p>
                    <p>Ve a la seccion {<Link to='/Carta'>Carta</Link>} para realizar tu pedido.</p>
                </div>
            )
        }
        else if(cantidadTotal === 0 && cantPedidosHechos !== 0){
            return(
                <div className="text-center">
                    <h5>Pedidos anteriores</h5>
                    {pedidosAnteriores.map((pedido, index) => (
                        <Row className="justify-content-sm-center" key={index} style={{ marginBottom: '20px' }}>
                            <strong>Pedido {index + 1}:</strong>
                            <ul>
                                {pedido.map(producto => (
                            <li key={producto.id}>
                                {producto.nombre} x {producto.cantidad} - ${producto.precio * producto.cantidad}
                            </li>
                                ))}
                            </ul>
                        </Row>
                        ))
                    }
                </div>
            )
        }
        else{
            return(
                <div className="text-center">
                    <p>Cantidad total de productos: {cantidadTotal}</p>
                    <p style={{marginBottom:'40px'}}>Importe total: ${importeTotal}</p>
                    <Boton {...propsBotonConfirmarPedido} texto='Confirmar Pedido' />
                </div>
            )
        }      
    };

 
    return (
        <Container className="my-4">
            <h3 style={{marginBottom:'60px', textDecoration:'underline'}}>Tu Pedido</h3>
            <Row className="justify-content-sm-center">
                {pedido.map(p =>
                 <Col key={p.id} className="d-flex justify-content-center customStyle" xs={12} md={4} sm={6} lg={3} xl={2}>{
                    <ProductoPedido producto={p} botonAgregar={botonAgregar} botonEliminar={botonEliminar} />
                    }
                    </Col>)}
            </Row>
            <Row className="justify-content-center" style={{marginTop:'60px'}}>
                <Col className="justify-content-center customStyle" xs={12} md={4} sm={6} lg={3} xl={3}>
                    {renderContenido()}
                </Col>
            </Row>
        </Container>
    );
};

export default Carrito;