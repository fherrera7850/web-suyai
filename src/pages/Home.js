import React from 'react'
import Navbar from '../components/Navbar';
import PrincipalSlider from '../components/PrincipalSlider';
import ProductsSection from '../components/Products/ProductsSection';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

export default function Home() {
    return (

        <body>
            <div className="hero_area">
                <div className="bg-box">
                    <img src={require("./../assets/images/1.png")} alt="" />
                </div>

                <Navbar />

                <PrincipalSlider />
            </div>

            <ProductsSection />

            <AboutSection />

            <ContactSection />

            <Footer />

        </body>


    )
}
