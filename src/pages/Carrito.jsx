import { Link } from "react-router-dom";
import {ProductoPedido, Boton} from "../components";
import {Container, Row, Col} from "react-bootstrap";
import styles from '../components/Producto/Producto.module.css'

//arreglar distancia entre card para q esten mas juntas y centradas -> arreglado
//consultar si despues de darle al boton de confirmar pedido tiene que
//limpiarse la pagina o mostrar de otra forma el pedido
const Carrito = ({pedido, botonAgregar, botonEliminar, confirmarPedido, cantPedidosHechos, pedidosAnteriores}) => {    
    const propsBotonConfirmarPedido = {
        onClick: confirmarPedido,
        variant:'warning',
        style:{ fontWeight:'bold', width:'auto'},
    };

    const cantidadTotal = pedido.reduce((total, producto) => total + producto.cantidad, 0);
    const importeTotal = pedido.reduce((total, producto) => total + producto.cantidad * producto.precio, 0);
    const renderContenido = () =>{
        if(cantidadTotal === 0 && cantPedidosHechos === 0){
            return(
                <div style={{ width:'100%', margin: '0 auto' , backgroundColor: '#f5ede1', padding: '2rem', boxSizing:'border-box',}}>
                    <p className="parrafos">Parece que aun no ordenaste nada...</p>
                    <p className="parrafos">Ve a la seccion {<Link to='/Carta'>Carta</Link>} para realizar tu pedido.</p>
                </div>
            )
        }
        else if(cantidadTotal === 0 && cantPedidosHechos !== 0){
            return(
                <div className="text-center">
                    <section>
                        <h5 className="subtitulos">Pedidos anteriores</h5>
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
                    </section>
                    
                </div>
            )
        }
        else{
            return(
                <div style={{marginTop:'5%'}}>
                    <p>Cantidad total de productos: {cantidadTotal}</p>
                    <p style={{marginBottom:'40px'}}>Importe total: ${importeTotal}</p>
                    <Boton {...propsBotonConfirmarPedido} texto='Confirmar Pedido' />
                </div>
            )
        }      
    };

 
    return (
  <Container className="my-4" fluid>
    <h3
      className="subtitulos text-center"
      style={{ marginBottom: '60px', textDecoration: 'underline' }}
    >
      Tu Pedido
    </h3>

    <Row className="g-4 justify-content-center mt-5">
      {pedido.map(p => (
        <Col
          key={p.id}
          xs={12}
          sm={6}
          md={4}
          lg={3}
          xl={2}
          className={`d-flex justify-content-center ${styles.cardHover}`}
        >
          <ProductoPedido
            producto={p}
            botonAgregar={botonAgregar}
            botonEliminar={botonEliminar}
          />
        </Col>
      ))}
    </Row>

    <Row className="justify-content-center mt-5 mb-5">
      <Col xs={12} sm={8} md={6} lg={4}>
        {renderContenido()}
      </Col>
    </Row>
  </Container>
);

};

export default Carrito;