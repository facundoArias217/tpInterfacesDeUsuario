import { Container, Row, Col, Image } from "react-bootstrap";
import { Boton } from "../components";
import { Link } from "react-router-dom";
import interior1 from '../assets/interior1.jpg';
import interior2 from '../assets/interior2.jpg';
import interior3 from '../assets/interior3.jpg';
import interior4 from '../assets/interior4.jpg';

//Arrglar las columnas y filas y tamaño de imagen y texto

const Inicio = () => {
    const propsBotonInicio = {
        variant: 'success',
        className: 'w-100 fw-bold btn-inicio',
        as: Link,
        to: '/Carta',
    };

    return (
        <div>
            <section className="hero text-center py-5 hero" >
                <Container>
                    <h1 className="display-4 fw-bold titulos">Luna & Granos Café</h1>
                    <p className="lead">El aroma que acompaña tus mejores momentos</p>
                    <Boton {...propsBotonInicio} texto="Descubrí nuestra carta" />
                </Container>
            </section>

            <section className="secciones">
                <Container className="text-center py-5">
                    <h2 className="subtitulos mb-4">Quiénes Somos</h2>
                    <p className="parrafos mb-5">
                        Somos un equipo apasionado por el café, la pastelería artesanal y los encuentros que se dan alrededor de una mesa.
                        Nuestro espacio combina el diseño cálido con la esencia de los cafés de barrio,
                        donde cada detalle está pensado para hacerte sentir como en casa.
                    </p>

                    <Row className="justify-content-center g-3">
                        <Col xs={12} sm={6} md={3}>
                            <img src={interior1} alt="Interior de la cafetería" className="img-fluid rounded interior" />
                        </Col>
                        <Col xs={12} sm={6} md={3}>
                            <img src={interior2} alt="Detalle barra y café" className="img-fluid rounded interior" />
                        </Col>
                        <Col xs={12} sm={6} md={3}>
                            <img src={interior3} alt="Ambiente y decoración" className="img-fluid rounded interior" />
                        </Col>
                        <Col xs={12} sm={6} md={3}>
                            <img src={interior4} alt="Clientes disfrutando" className="img-fluid rounded interior" />
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="secciones">
                <Container className="my-4">
                    <Row >
                        <Col md={12} lg={6}>
                            <div className="img-container">
                                <Image src="/logo.png" alt="logo" className="logo mx-auto d-block" />
                            </div>
                        </Col>
                        <Col md={12} lg={6}>
                            <article>
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
                            </article>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="secciones">
                <Container className="text-center">
                    <h2 className="subtitulos">Conocenos</h2>
                    <p className="parrafos">
                        Te esperamos en nuestro local dentro del <strong>Plaza Oeste Shopping</strong>,
                        el punto de encuentro perfecto para disfrutar un café artesanal, pastelería fresca
                        y momentos únicos en un ambiente cálido y relajado.
                    </p>
                    <div className="map-container">
                        <iframe
                            title="Ubicación Plaza Oeste"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.1624000762376!2d-58.64488642425784!3d-34.65060137293751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb962f2cbbfff%3A0xa4f9293769dc3d4f!2sAlmenblu%20Point%20Castelar!5e0!3m2!1ses!2sar!4v1759969780097!5m2!1ses!2sar"
                            width="80%"
                            height="400"
                            style={{ border: 0, borderRadius: '20px' }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </Container>
            </section>
        </div>
    );
};

export default Inicio;