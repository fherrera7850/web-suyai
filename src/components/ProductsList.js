import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductsList() {
    return (
        <section className="food_section layout_padding-bottom">
            <div className="container">
                <div style={{ marginTop: '50px' }} className="heading_container heading_center">
                    <h2>
                        Nuestros Productos
                    </h2>
                </div>

                <ul className="filters_menu">
                    <li className="active" data-filter="*">Todos</li>
                    <li data-filter=".bidones">Bidones</li>
                    <li data-filter=".dbasicos">Dispensadores Básicos</li>
                    <li data-filter=".dpremium">Dispensadores Premium</li>
                    <li data-filter=".accesorios">Accesorios</li>
                </ul>

                <div className="filters-content">
                    <div className="row grid">
                        <div className="col-sm-6 col-lg-4 all dbasicos">
                            <div className="box">
                                <div>
                                    <div className="img-box">
                                        <img src={require("./../assets/images/20lts_v1.png")} alt="" />
                                    </div>
                                    <div className="detail-box">
                                        <h5>
                                            Delicious Pizza
                                        </h5>
                                        <p>
                                            Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque
                                        </p>
                                        <div className="options">
                                            <h6>
                                                $20
                                            </h6>
                                            <Link to="/">
                                                <img src={require("./../assets/images/add_to_cart.png")} alt="" width={20} />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4 all bidones">
                            <div className="box">
                                <div>
                                    <div className="img-box">
                                        <img src={require("./../assets/images/20lts_v1.png")} alt="" />
                                    </div>
                                    <div className="detail-box">
                                        <h5>
                                            Delicious Burger
                                        </h5>
                                        <p>
                                            Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque
                                        </p>
                                        <div className="options">
                                            <h6>
                                                $15
                                            </h6>
                                            <Link to="/">
                                                <img src={require("./../assets/images/add_to_cart.png")} alt="" width={20} />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4 all dbasicos">
                            <div className="box">
                                <div>
                                    <div className="img-box">
                                        <img src={require("./../assets/images/20lts_v1.png")} alt="" />
                                    </div>
                                    <div className="detail-box">
                                        <h5>
                                            Delicious Pizza
                                        </h5>
                                        <p>
                                            Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque
                                        </p>
                                        <div className="options">
                                            <h6>
                                                $17
                                            </h6>
                                            <Link to="/">
                                                <img src={require("./../assets/images/add_to_cart.png")} alt="" width={20} />
                                            </  Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4 all dpremium">
                            <div className="box">
                                <div>
                                    <div className="img-box">
                                        <img src={require("./../assets/images/20lts_v1.png")} alt="" />
                                    </div>
                                    <div className="detail-box">
                                        <h5>
                                            Delicious Pasta
                                        </h5>
                                        <p>
                                            Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque
                                        </p>
                                        <div className="options">
                                            <h6>
                                                $18
                                            </h6>
                                            <Link to="/">
                                                <img src={require("./../assets/images/add_to_cart.png")} alt="" width={20} />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4 all accesorios">
                            <div className="box">
                                <div>
                                    <div className="img-box">
                                        <img src={require("./../assets/images/20lts_v1.png")} alt="" />
                                    </div>
                                    <div className="detail-box">
                                        <h5>
                                            French Fries
                                        </h5>
                                        <p>
                                            Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque
                                        </p>
                                        <div className="options">
                                            <h6>
                                                $10
                                            </h6>
                                            <Link to="/">
                                                <img src={require("./../assets/images/add_to_cart.png")} alt="" width={20} />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4 all dbasicos">
                            <div className="box">
                                <div>
                                    <div className="img-box">
                                        <img src={require("./../assets/images/20lts_v1.png")} alt="" />
                                    </div>
                                    <div className="detail-box">
                                        <h5>
                                            Delicious Pizza
                                        </h5>
                                        <p>
                                            Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque
                                        </p>
                                        <div className="options">
                                            <h6>
                                                $15
                                            </h6>
                                            <Link to="/">
                                                <img src={require("./../assets/images/add_to_cart.png")} alt="" width={20} />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4 all bidones">
                            <div className="box">
                                <div>
                                    <div className="img-box">
                                        <img src={require("./../assets/images/20lts_v1.png")} alt="" />
                                    </div>
                                    <div className="detail-box">
                                        <h5>
                                            Tasty Burger
                                        </h5>
                                        <p>
                                            Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque
                                        </p>
                                        <div className="options">
                                            <h6>
                                                $12
                                            </h6>
                                            <Link to="/">
                                                <img src={require("./../assets/images/add_to_cart.png")} alt="" width={20} />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4 all bidones">
                            <div className="box">
                                <div>
                                    <div className="img-box">
                                        <img src={require("./../assets/images/20lts_v1.png")} alt="" />
                                    </div>
                                    <div className="detail-box">
                                        <h5>
                                            Tasty Burger
                                        </h5>
                                        <p>
                                            Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque
                                        </p>
                                        <div className="options">
                                            <h6>
                                                $14
                                            </h6>
                                            <Link to="/">
                                                <img src={require("./../assets/images/add_to_cart.png")} alt="" width={20} />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4 all dpremium">
                            <div className="box">
                                <div>
                                    <div className="img-box">
                                        <img src={require("./../assets/images/20lts_v1.png")} alt="" />
                                    </div>
                                    <div className="detail-box">
                                        <h5>
                                            Delicious Pasta
                                        </h5>
                                        <p>
                                            Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque
                                        </p>
                                        <div className="options">
                                            <h6>
                                                $10
                                            </h6>
                                            <Link to="/">
                                                <img src={require("./../assets/images/add_to_cart.png")} alt="" width={20} />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="btn-box">
                    <Link to="/">
                        Ir a la tienda
                    </Link>
                </div>
            </div>
        </section>
    )
}
