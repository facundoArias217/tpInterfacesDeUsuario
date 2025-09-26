import {Container, Row, Col, Image} from "react-bootstrap";
import {Boton} from "../components";
import {Link} from "react-router-dom";

//Arrglar las columnas y filas y tamaño de imagen y texto

const Inicio = () => {
    const propsBotonIrAlCarrito = {
        variant:'success',
        className:'w-100',
        as:Link,
        to:'/Carta',
        style:{backgroundColor:'#b79f7d', color:'black', border:'none', fontWeight:'bold'}
    };
    
    return (
        <Container className="my-4">
            <Row className="justify-content-sm-center" style={{marginBottom:'40px'}}>
                <Col xs={12} md={6} lg={6}>
                    <Image src="/logo.png" alt="logo" roundedCircle style={{width:'100%', height:'100%'}} />
                </Col>
                <Col md={12} lg={6}>
                    <section>
                        <h3>Nuestra Historia</h3>
                        <br />
                        <p style={{textAlign:"justify", marginBottom:'50px'}}>
                            Hace más de veinte años, la familia Bianchi, 
                            de raíces italianas, abrió esta cafetería con 
                            un propósito claro: compartir la tradición de 
                            la hospitalidad italiana (ospitalità) y el arte del buen café.
                            Desde entonces, seleccionamos las mejores materias 
                            primas: granos de altura de Latinoamérica y los 
                            combinamos con ingredientes mediterráneos como aceite de oliva 
                            y dulces artesanales, logrando sabores únicos y auténticos.
                            Con el paso del tiempo, nuestro espacio se convirtió 
                            en un punto de encuentro donde cada cliente es recibido como en casa.
                            Hoy seguimos siendo fieles a nuestras raíces: cada 
                            taza es tradición, hospitalidad y un abrazo cálido al alma.
                        </p>
                    </section>
                    <Row className="justify-content-sm-center">
                        <Col md={12} lg={8}>
                            <Boton {...propsBotonIrAlCarrito} texto='Ver la Carta' />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default Inicio;