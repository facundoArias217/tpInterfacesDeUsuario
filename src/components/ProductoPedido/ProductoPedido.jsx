import {Card, ListGroup} from 'react-bootstrap'
import {Boton} from '../../components';

//poner un hover a card
//mostrar tambien la cantidad del producto en el catalogo
//ver si poner el importe total en cada card

const ProductoPedido = ({producto, botonAgregar, botonEliminar}) => {
    const propsBotonAgregar = {
        variant:'success',
        size:'sm',
        style:{margin:'5px'},
        onClick:() => botonAgregar.agregar(producto)
    };

    return (
        <Card className='text-center' style={{ width: '15rem' }}>
            <Card.Img variant="top" src={`${producto.imagen}`} height={150} width={300} />
            <Card.Body>
                <ListGroup variant='flush'>
                    <ListGroup.Item style={{fontWeight:'bold', padding:'5px'}}>
                        {producto.nombre}
                    </ListGroup.Item>
                    <ListGroup.Item>
                        {`Cantidad: ${producto.cantidad}`}
                    </ListGroup.Item>
                    {/* <ListGroup.Item>ver si pongo el importe total aca
                        {`precio $${precio}`}
                    </ListGroup.Item> */}
                </ListGroup>
                <Boton {...propsBotonAgregar} texto={botonAgregar.texto} />
                <Boton {...propsBotonAgregar} variant='danger' onClick={() => botonEliminar.eliminar(producto)} texto={botonEliminar.texto} />
            </Card.Body>
        </Card>
    );
};

export default ProductoPedido;