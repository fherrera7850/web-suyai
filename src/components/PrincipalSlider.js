import React from 'react'
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function PrincipalSlider() {
    return (
        <div style={{ width: '70%', justifyContent: 'center', marginLeft: 150, marginTop: 250 }}>
            {/* <div style={{ backgroundColor: 'red', height: '200px', width: '400px' }}>hola</div> */}
            <Carousel controls={false} indicators={false} interval={7000}>
                <Carousel.Item>
                    <div className="container ">
                        <div className="row">
                            <div className="col-md-7 col-lg-6 ">
                                <div className="detail-box">
                                    <h1 style={{ color: 'white' }}>
                                        Agua Purificada Suyai 1
                                    </h1>
                                    <p>
                                        Refresca tu día con agua pura y limpia. Entrega rápida y segura directamente a tu puerta. ¡Hidrátate Suyai!
                                    </p>
                                    <Link className="order_online" to="/">
                                        Pide Online
                                    </Link>
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
                                        Agua Purificada Suyai 2
                                    </h1>
                                    <p>
                                        Refresca tu día con agua pura y limpia. Entrega rápida y segura directamente a tu puerta. ¡Hidrátate Suyai!
                                    </p>
                                    <div className="btn-box">
                                        <Link to="/" className="btn1">
                                            Haz tu pedido ahora
                                        </Link>
                                    </div>
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
                                        Agua Purificada Suyai 3
                                    </h1>
                                    <p>
                                        Refresca tu día con agua pura y limpia. Entrega rápida y segura directamente a tu puerta. ¡Hidrátate Suyai!
                                    </p>
                                    <div className="btn-box">
                                        <Link to="/" className="btn1">
                                            Haz tu pedido ahora
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </Carousel.Item>
            </Carousel>
        </div>
    )
}
