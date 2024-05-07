import React from 'react'
import { Link } from 'react-router-dom'

export default function AboutSection() {
    return (
        <section className="about_section layout_padding">
            <div className="container  ">

                <div className="row">
                    <div className="col-md-6 ">
                        <div className="img-box">
                            <img src={require("./../assets/images/cargando_bidon.png")} alt="" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="detail-box">
                            <div className="heading_container">
                                <h2>
                                    Somos Suyai
                                </h2>
                            </div>
                            <p>
                                Somos distribuidores autorzados de agua embotellada en la RM.<br /><br />
                                Contamos con todos los permisos correspondientes del SEREMI de Salud del Gobierno de Chile y las instituciones de salud pertinentes.<br /> <br />
                                Ofrecemos un producto de calidad, un servicio al cliente eficiente, rápido y personalizado. Con más de 5 años de experiencia somos una empresa líder del rubro en el sector sur de la capital.

                            </p>
                            <Link to="/">
                                Read More
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
