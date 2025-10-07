import {NavBar} from './components'
import {Routes, Route} from 'react-router-dom'
import {Inicio, Carta, Carrito, ContactoYReserva} from './pages'
import {useState} from 'react'

//arreglar los css puestos en los componentes usando css global o modules etc

function App() {
  const [pedido, setPedido] = useState([]);

  const [pedidosAnteriores, setPedidosAnteriores] = useState([]);

  const [cantPedidosHechos, setcantPedidosHechos] = useState(0);

  const vaciarPedido = () => setPedido([]);

  const sumarProducto = (pedidoActual, productoSumar) => {
    return pedidoActual.map(p => p.id == productoSumar.id ? {...p, cantidad: p.cantidad + 1} : p);
  };
  
  const restarProducto = (pedidoActual, productoRestar) => {
    return pedidoActual.map(p => p.id == productoRestar.id ? {...p, cantidad: p.cantidad - 1} : p);
  };

  const agregarProducto = (pedidoActual, productoAgregar) => {
    return [...pedidoActual, {...productoAgregar, cantidad: 1}];
  };

  const eliminarProducto = (pedidoActual, productoEliminar) => {
    return pedidoActual.filter(p => p.id != productoEliminar.id);
  };

  const sumarAlPedido = (producto) => {
    setPedido((prevPedido) => {
        return sumarProducto(prevPedido, producto);
    });
  };

  const restarOEliminarDelPedido = (producto) => {
    setPedido((prevPedido) => {
        return producto.cantidad > 1 ? restarProducto(prevPedido, producto) : eliminarProducto(prevPedido, producto);
    });
  };

  const agregarOSumarAlPedido = (producto) => {
    setPedido((prevPedido) => {
      const productoEncontrado = prevPedido.find(p => p.id == producto.id)
      return !productoEncontrado ? agregarProducto(prevPedido, producto) : sumarProducto(prevPedido, producto);
    });
  };

  const confirmarPedido = () => {
      if(pedido.length === 0) return;
      setPedidosAnteriores([...pedidosAnteriores, pedido])
      setPedido([])
      alert('Tu pedido ha sido confirmado, muchas gracias.')
      setcantPedidosHechos(cantPedidosHechos + 1)
    };


//agregar una ruta con * y que lleve a inicio o pagina de error para cuando se escribe cualquier cosa en la url
//y usar para alguna pagina :id como parametro
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/Inicio" element={<Inicio />} />
        <Route path="/Carta" element={<Carta accionBoton={agregarOSumarAlPedido} pedido={pedido} />} />
        <Route path="/Carrito" element={<Carrito pedido={pedido} botonAgregar={{agregar:sumarAlPedido, texto:'Agregar'}} botonEliminar={{eliminar:restarOEliminarDelPedido, texto:'Eliminar'}} vaciarPedido={vaciarPedido} confirmarPedido={confirmarPedido} cantPedidosHechos={cantPedidosHechos} pedidosAnteriores={pedidosAnteriores}/>} />
        <Route path="/Contacto Y Reservas" element={<ContactoYReserva />} />
      </Routes>
    </>
  );
};

export default App;
