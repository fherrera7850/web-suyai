import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import CategoriesFilter from './CategoriesFilter';
import ProductsCards from './ProductsCards';

const ProductsList = () => {

    return (
        <section className="food_section layout_padding-bottom">
            <div className="container">
                <div style={{ marginTop: '50px' }} className="heading_container heading_center">
                    <h2>
                        Nuestros Productos
                    </h2>
                </div>

                <CategoriesFilter />

                <div className="filters-content">
                    <ProductsCards/>
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

export default ProductsList;