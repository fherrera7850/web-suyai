import React from 'react';
import { Link } from 'react-router-dom';

function ProductGrid() {

    const products =[
        {
            id: 1,
            category: "dbasicos",
            image: "20lts_v1.png",
            title: "Delicious Pizza",
            description: "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
            price: "$20"
        },
        {
            id: 2,
            category: "bidones",
            image: "20lts_v1.png",
            title: "Delicious Burger",
            description: "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
            price: "$15"
        },
        {
            id: 3,
            category: "dbasicos",
            image: "20lts_v1.png",
            title: "Delicious Pizza",
            description: "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
            price: "$17"
        },
        {
            id: 4,
            category: "dpremium",
            image: "20lts_v1.png",
            title: "Delicious Pasta",
            description: "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
            price: "$18"
        },
        {
            id: 5,
            category: "accesorios",
            image: "20lts_v1.png",
            title: "French Fries",
            description: "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
            price: "$10"
        },
        {
            id: 6,
            category: "dbasicos",
            image: "20lts_v1.png",
            title: "Delicious Pizza",
            description: "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
            price: "$15"
        },
        {
            id: 7,
            category: "bidones",
            image: "20lts_v1.png",
            title: "Tasty Burger",
            description: "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
            price: "$12"
        },
        {
            id: 8,
            category: "bidones",
            image: "20lts_v1.png",
            title: "Tasty Burger",
            description: "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
            price: "$14"
        },
        {
            id: 9,
            category: "dpremium",
            image: "20lts_v1.png",
            title: "Delicious Pasta",
            description: "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
            price: "$10"
        }
    ]
    

    return (
        <div className="row grid">
            {products.map(product => (
                <div key={product.id} className={`col-sm-6 col-lg-4 all ${product.category}`}>
                    <div className="box">
                        <div>
                            <div className="img-box">
                                <img src={require("./../../assets/images/productsImages/" + product.image)} alt={product.title} />
                            </div>
                            <div className="detail-box">
                                <h5>{product.title}</h5>
                                <p>{product.description}</p>
                                <div className="options">
                                    <h6>{product.price}</h6>
                                    <Link to="/">
                                        <img src={require('./../../assets/images/add_to_cart.png')} alt="Add to Cart" width={20} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ProductGrid;
