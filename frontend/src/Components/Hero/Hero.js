import React from 'react';
import DocImg from '../../../src/dochain.png';

const Hero = () => {
    return (
        <section id="hero-animated" className="hero-animated d-flex align-items-center">
            <div className="container d-flex flex-column justify-content-center align-items-center text-center position-relative" data-aos="zoom-out">
                <img src={DocImg} alt="DOC-CHAIN Main Image" className="img-fluid animated" />
                <h2>Welcome to <span>DOC-CHAIN</span></h2>
                <p>A blockchain based system to instantly verify your official documents from anywhere using encrypted assets.</p>
                <div className="d-flex">
                    <a href="#about" className="btn-get-started scrollto">Lets Get Started</a>
                </div>
            </div>
        </section>
    )
}

export default Hero