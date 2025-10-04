import { Container, Row, Col, Image } from "react-bootstrap";
import { Boton } from "../components";
import { Link } from "react-router-dom";

//Arrglar las columnas y filas y tamaño de imagen y texto

const Inicio = () => {
    const propsBotonIrAlCarrito = {
        variant: 'success',
        className: 'w-100',
        as: Link,
        to: '/Carta',
        style: { backgroundColor: '#b79f7d', color: 'black', border: 'none', fontWeight: 'bold' }
    };

    return (
        <div>
            <h1 className="titulos">Luna & granos café</h1>
            <section className="secciones">
                <Container className="my-4">
                    <Row >
                        <Col md={12} lg={6}>
                            <div className="img-container">
                            <Image src="/logo.png" alt="logo" className="imgs-grandes mx-auto d-block" />
                            </div>
                        </Col>
                        <Col md={12} lg={6}>
                            <section>
                                <h2 className="subtitulos">Nuestra Historia</h2>
                                <br />
                                <p className="parrafos">
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
            </section>
        </div>
    );
};

export default Inicio;