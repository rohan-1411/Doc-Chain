import React from 'react'

const FeatureService = () => {
    return (
        <section id="featured-services" className="featured-services">
            <div className="container">

                <div className="row gy-4">

                    <div className="col-xl-3 col-md-6 d-flex" data-aos="zoom-out">
                        <div className="service-item position-relative">
                            <div className="icon"><i className="bi bi-activity icon"></i></div>
                            <h4><a >Quicker Verification</a></h4>
                            <p>Documents are instantly verified from anywhere uisng Blockchain technology.</p>
                        </div>
                    </div>

                    <div className="col-xl-3 col-md-6 d-flex" data-aos="zoom-out" data-aos-delay="200">
                        <div className="service-item position-relative">
                            <div className="icon"><i className="bi bi-bounding-box-circles icon"></i></div>
                            <h4><a>Unforgeable Documents</a></h4>
                            <p>Document are in unforgeable format thus maximizing its credibility and no middleman invloved in verification process.</p>
                        </div>
                    </div>

                    <div className="col-xl-3 col-md-6 d-flex" data-aos="zoom-out" data-aos-delay="400">
                        <div className="service-item position-relative">
                            <div className="icon"><i className="bi bi-calendar4-week icon"></i></div>
                            <h4><a>Decentralized Protection</a></h4>
                            <p>Documents immutably secured by decentralized ledger network globally.</p>
                        </div>
                    </div>

                    <div className="col-xl-3 col-md-6 d-flex" data-aos="zoom-out" data-aos-delay="600">
                        <div className="service-item position-relative">
                            <div className="icon"><i className="bi bi-broadcast icon"></i></div>
                            <h4><a>Cryptographically Secured</a></h4>
                            <p>High end privacy as documents are stored on blockchain and protected by SHA-256 cryptographic hash.</p>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default FeatureService