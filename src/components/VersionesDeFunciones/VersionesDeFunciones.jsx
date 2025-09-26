//Version de la funcion que modifica el estado
//separada en varias funciones App.jsx

// const agregarProducto= (pedidoActual, producto) => {
//     return [...pedidoActual, {...producto, cantidad: 1}];
//   };

//   const aumentarCantidad = (pedidoActual, producto) => {
//     return pedidoActual.map(p => p.id == producto.id ? {...p, cantidad: p.cantidad + 1} : p);
//   };

//   const productoEnPedido = (pedidoActual, producto) => {
//     return pedidoActual.find(p => p.id == producto.id);
//   };

//   const aumentarOAgregarProducto = (pedidoActual, producto) => {
//     return !productoEnPedido(pedidoActual, producto) ? agregarProducto(pedidoActual, producto) : aumentarCantidad(pedidoActual, producto);
//   };

//   const armarPedido = (producto) => {
//     setPedido((prevPedido) => {
//       return aumentarOAgregarProducto(prevPedido, producto);
//     });
//   };

//dropdown en navbar para separar en la opcion comunicate con nosotros
//la reserva y el contacto
//se puede usar para separar otras cosas pero no lo pide el tp

// const seccionesDropdown = [{id:1, nombre:'Contacto'}, {id:2, nombre:'Reservas'}];

/* <NavDropdown title="Comunicate con nosotros" id="basic-nav-dropdown">
        {seccionesDropdown.map(s => <NavDropdown.Item key={s.id} as={Link} to={`/${s.nombre}`}>{s.nombre}</NavDropdown.Item>)}
    </NavDropdown> */

// ruta en App.jsx
/* <Route path="/Contacto" element={<Contacto />} /> */
/* <Route path="/Reservas" element={<Reserva />} /> */

//usestate y funcion para mostrar con un checkbox la seccion del formulario de reserva

// const [reserva, setReserva] = useState(false);
    
    // const mostrarSeccionReserva = (evento) => {
    //     setReserva(evento.target.checked)
    // };

//props de boton eliminar de productoPedido reemplazado por sobreescribir props

    // const propsBotonEliminar = {
    //     variant:'danger',
    //     size:'sm',
    //     style:{margin:'5px'},
    //     onClick:() => botonEliminar.eliminar(producto)
    // };