import React, { useState, useMemo } from 'react';
import {Container, Row, Col} from "react-bootstrap";
import {Producto} from "../components";

import productosData from '../platos/platos.json';
import '../estilos/estilos.css';

const Carta = ({accionBoton, pedido}) => {
    const [query, setQuery] = useState('');

    const items = useMemo(() => {
        const q = query.trim().toLowerCase();
        if (!q) return productosData;
        return productosData.filter(p => {
            const text = Object.values(p).join(' ').toLowerCase();
            return text.includes(q);
        });
    }, [query]);

    return (
        <Container className="my-4" fluid>
            <div className="search-bar">
                <input
                    id='search-carta'
                    className="search-input"
                    type="search"
                    placeholder="Qué vas a tomar hoy??"
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                    autoFocus
                />
            </div>

            <Row className="justify-content-lg-center customRowCarta">
                {items.length === 0 ? (
                    <p className="no-results">No se encontraron productos.</p>
                ) : (
                    items.map(p => <Col key={p.id} className="d-flex justify-content-center" xs={12} md={4} sm={6} lg={4} xl={2}>{<Producto producto={p} textoBoton='Añadir al Carrito' accion={accionBoton} pedido={pedido} />}</Col>)
                )}
            </Row>
        </Container>
    )
};

export default Carta;