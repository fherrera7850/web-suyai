import React from 'react'
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function PrincipalSlider() {
    return (
        <div style={{ width: '70%', justifyContent: 'center', marginLeft: 150, marginTop: 250 }}>
            {/* <div style={{ backgroundColor: 'red', height: '200px', width: '400px' }}>hola</div> */}
            <Carousel controls={false} indicators={false} interval={7000}>
                <Carousel.Item>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-7 col-lg-6 ">
                                <div>
                                    <h1 style={{ color: 'white' }}>
                                        Agua Purificada de calidad Premium
                                    </h1>
                                    <p style={{ color: 'white' }}>
                                        Refresca tu día con agua pura y limpia. <br /><br />
                                        Nos preocupamos por tu salud y te llevamos un producto seguro y de calidad, cumpliendo todos los esatándares dictados por los organismos sanitarios de Chile.
                                    </p>
                                    <button className='btnCarrousel'>
                                        Haz tu pedido ahora
                                    </button>
                                </div>

                            </div>

                        </div>
                    </div>

                </Carousel.Item>
                <Carousel.Item>
                    <div className="container ">
                        <div className="row">
                            <div className="col-md-7 col-lg-6 ">
                                <div className="detail-box">
                                    <h1 style={{ color: 'white' }}>
                                        Área de Reparto
                                    </h1>
                                    <p style={{ color: 'white' }}>
                                        San Bernardo<br />El Bosque<br />La Cisterna<br />Lo Espejo<br />Pedro Aguirre Cerda<br />San Miguel<br /><br />
                                        Si eres de estas comunas, no dudes en contactarnos!
                                    </p>
                                    <button className='btnCarrousel'>
                                        Haz tu pedido ahora
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </Carousel.Item>
                <Carousel.Item>
                    <div className="container ">
                        <div className="row">
                            <div className="col-md-7 col-lg-6 ">
                                <div className="detail-box">
                                    <h1 style={{ color: 'white' }}>
                                        Despacho Express
                                    </h1>
                                    <p style={{ color: 'white' }}>
                                        Atendemos de Lunes a Sábado, haz tu pedido antes de las 12:00 y recibe tu pedido el mismo día.<br />
                                        Trasladamos tus productos de manera rápida y segura.
                                    </p>
                                    <button className='btnCarrousel'>
                                        Haz tu pedido ahora
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </Carousel.Item>
            </Carousel>
        </div>
    )
}
