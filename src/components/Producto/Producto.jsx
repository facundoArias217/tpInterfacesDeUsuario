import {Card, ListGroup, Badge} from 'react-bootstrap'
import {Boton} from '../../components';

//poner un hover a card
//mostrar la cantidad del producto en el catalogo y en el pedido
//

const Producto = ({producto, pedido, accion, textoBoton}) => {
    const propsBotonAgregarAlCarrito = {
        variant:'success',
        onClick:() => accion(producto),
    };

    const productoEnPedido = () => {
        const estaEnPedido = pedido.find(p => p.id == producto.id);
        return estaEnPedido ? {mostrar:'block', cantidad:estaEnPedido.cantidad} : {mostrar:'none', cantidad:0};
    };
    
    return (
        <Card className='text-center' style={{ width: '18rem' }}>
            <Badge style={{display: productoEnPedido().mostrar}} className="position-absolute top-0 end-0 rounded-pill bg-danger customBadge" bg="secondary">{productoEnPedido().cantidad}</Badge>
            <Card.Img variant="top" src={`${producto.imagen}`} height={200} width={300} />
            <Card.Body>
                <ListGroup variant='flush'>
                <Card.Title>{producto.nombre}</Card.Title>
                    <ListGroup.Item>
                        {producto.descripcion}
                    </ListGroup.Item>
                    <ListGroup.Item>
                        {`precio $${producto.precio}`}
                    </ListGroup.Item>
                </ListGroup>
                <Boton {...propsBotonAgregarAlCarrito} texto={textoBoton} />
            </Card.Body>
        </Card>
    );
};

export default Producto;