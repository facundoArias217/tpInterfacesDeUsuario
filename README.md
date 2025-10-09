# FrontEnd Cafeteria Luna & Granos Café

## Universidad Nacional de Hurlingham
## Trabajo Practico Nº 1 - Construccion de Interfaces de Usuario
### Segundo Cuatrimestre - Año 2025

### Docentes
- Lucas Adriel Figarola
- Ailen Pisoni

### Grupo 13
#### Integrantes:

- Ezequiel Andrés Muñoz
- Facundo Roberto Arias
- Asam Fernando
- Meza Tomás Luciano
- Javier Asato Finen

## Descripcion del Proyecto

FrontEnd de la Cafeteria Luna & Granos Café es una pagina web hecha en React, que permite a un usuario del sitio
visitar diferentes secciones con informacion y servicios brindados por el negocio, desde una breve introduccion a la
historia y valores que lo conforman, hasta una carta que permite seleccionar diferentes platos que cuentan con imagenes
y descripciones detalladas de cada uno. Cuenta ademas con una seccion Carrito donde se pueden visualizar los productos seleccionados 
hasta el momento y otra para dejar datos y/o consultas o sugerencias y realizar una reserva.
La aplicacion es una SPA (Single Page Application) caracteristica que brinda una experiencia de usuario mas fluida y cuenta
con diseño responsivo y estilo visual consistente implementados en css. 

## Caracteristicas

### Paginas

**Inicio**:

La página de Inicio busca ser una presentación atractiva de Luna & Granos Café, diseñada para captar la atención del visitante desde el primer momento. Tiene como objetivo transmitir la identidad de la cafetería  invitando al usuario a descubrir la carta y conocer más sobre la historia y los valores del local.

Funcionalidades y secciones:

. Hero principal: muestra el nombre del café, un eslogan y un botón que dirige directamente a la carta.
. Sección “Quiénes Somos”: breve descripción de la filosofía del lugar acompañada por una galería de imágenes que muestran el interior y ambiente del café.
. Nuestra Historia: relato sobre el origen familiar y la inspiración italiana detrás del emprendimiento, destacando la calidad y tradición en cada taza.
. Valores: tres pilares que resumen la propuesta del café (café de especialidad, pastelería artesanal y conexión con lo natural).
. Concenos: invitación a visitar el local con un mapa interactivo de Google Maps que facilita la ubicación.

**Carta**:

En la sección carta los usuarios pueden:

    • Ver Todos los productos con descripciones detalladas
    • Elegir los productos que quieren consumir
    • Buscar por nombre o descripcion y filtrar en tiempo real
    • Ver que productos y la cantidad añadidos al carrito

Los detalles de los productos seleccionados importe y cantidad pueden verse luego en la seccion carrito.

**Carrito**:

Carrito de compras

Esta sección corresponde al del carrito de compras, en donde los usuarios, una vez elegidos los productos en la sección de la carta, pueden:

    • Ver los productos agregados
    • Agregar más productos
    • Eliminar productos en caso de arrepentirse
    • Ver la cantidad seleccionada
    • Ver el total entre todos los productos

Una vez confirmado el pedido, se muestra en pantalla, los pedidos realizados anteriormente, con sus respectivos nombres, cantidades y precio.
Si nunca se hizo un pedido, te muestra un mensaje, con un enlace a la carta para poder elegir entre los productos.

**Contacto y Reserva**:

La página Contacto y Reserva permite a los usuarios enviar consultas, sugerencias o realizar una reserva en el café de manera sencilla y organizada. Está pensada para ofrecer una comunicación directa entre el cliente y el negocio, manteniendo la coherencia visual y funcional con el resto del sitio.

Funcionalidades y secciones:

. Formulario principal: contiene campos para nombre y apellido, correo electrónico, teléfono, tipo de consulta o reserva y un mensaje adicional.
. Validaciones en tiempo real: mediante las librerías Formik y Yup se controlan los campos requeridos, el formato del correo electrónico y la longitud de los textos antes de permitir el envío.
. Mensajes de error: cada campo muestra de forma clara los errores específicos cuando el usuario introduce datos inválidos o deja campos vacíos.
. Diseño responsivo: la estructura del formulario se adapta a distintos tamaños de pantalla para una buena experiencia tanto en computadoras como en dispositivos móviles.
. Reinicio del formulario: una vez completado y enviado correctamente, el formulario se limpia automáticamente para permitir nuevos envíos.


**NavBar**:

La NavBar cumple la función de guía principal dentro del sitio, permitiendo al usuario desplazarse fácilmente entre las distintas secciones de la página. Se mantiene fija en la parte superior para garantizar un acceso rápido en todo momento y conservar la coherencia visual del sitio.

Funcionalidades y secciones:

. Navegación dinámica: utiliza componentes de React Router DOM que permiten cambiar de página sin recargar el sitio, manteniendo la experiencia fluida propia de una SPA.
. Diseño responsivo: se adapta automáticamente a distintos tamaños de pantalla, desplegando un menú colapsable en dispositivos móviles.
. Enlace de marca: el logotipo “Luna & Granos Café” funciona como acceso directo a la página de inicio.
. Indicador activo: el enlace de la sección actual se resalta visualmente para orientar al usuario.
. Estilo personalizado: implementa clases CSS propias que mantienen la identidad visual y la armonía cromática del resto del sitio.

### Features
- Buscador por nombre de producto en tiempo real


## Tecnologias

**Cliente:** React, Bootsrap, Vite

**Servidor:** Node

## 📦 Dependencias

#### ⚙️ Dependencias de produccion que utiliza el proyecto

```json
  "dependencies": {
    "bootstrap": "^5.3.8",
    "formik": "^2.4.6",
    "react": "^19.1.1",
    "react-bootstrap": "^2.10.10",
    "react-dom": "^19.1.1",
    "react-router-dom": "^7.9.1",
    "yup": "^1.7.1"
  }
```
#### 🧰 Dependencias de desarrollo que utiliza el proyecto

```json
  "devDependencies": {
    "@eslint/js": "^9.35.0",
    "@types/react": "^19.1.13",
    "@types/react-dom": "^19.1.9",
    "@vitejs/plugin-react": "^5.0.2",
    "eslint": "^9.35.0",
    "eslint-plugin-react-hooks": "^5.2.0",
    "eslint-plugin-react-refresh": "^0.4.20",
    "globals": "^16.4.0",
    "vite": "^7.1.6"
  }
```
    
## Correr el Proyecto

#### Clonar el proyecto

```bash
  git clone https://github.com/facundoArias217/tpInterfacesDeUsuario
```

#### Ir a la carpeta del proyecto

```bash
  cd tpInterfacesDeUsuario
```

#### Abrir con Vs Code

```bash
  code .
```

#### Instalar dependencias

```bash
  npm install
```

#### Correr el proyecto

```bash
  npm run dev
```
#### Seguir el enlace que aparece en la terminal para abrir el sitio en el navegador

![Imagen](./src/assets/LinkPagina.jpg)

## Estructura del Proyecto

```
📁 src
├── 📁 assets
├── 📁 components
│   ├── 📁 Boton
│   │   └── Boton.jsx
│   ├── 📁 FormInput
│   │   └── FormInput.jsx
│   ├── 📁 Footer
│   │   └── Footer.jsx
│   ├── 📁 NavBar
│   │   └── NavBar.jsx
│   ├── 📁 Producto
│   │   ├── Producto.jsx
│   │   └── Producto.module.css
│   ├── 📁 ProductoPedido
│   │   └── ProductoPedido.jsx
│   └── index.js
├── 📁 estilos
│   └── estilos.css
├── 📁 pages
│   ├── Carrito.jsx
│   ├── Carta.jsx
│   ├── ContactoYReserva.jsx
│   ├── Inicio.jsx
│   └── index.js
├── 📁 platos
│   └── platos.json
├── 📁 schemas
│   └── Form.schema.jsx
├── App.jsx
└── main.jsx
```
