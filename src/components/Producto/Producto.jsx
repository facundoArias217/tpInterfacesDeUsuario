import {Card, ListGroup} from 'react-bootstrap'
import {Boton} from '../../components';

//poner un hover a card
//mostrar la cantidad del producto en el catalogo y en el pedido
//

const Producto = ({producto, accion, textoBoton}) => {
    const propsBotonAgregarAlCarrito = {
        variant:'success',
        onClick:() => accion(producto),
    };
    
    return (
        <Card className='text-center' style={{ width: '18rem' }}>
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