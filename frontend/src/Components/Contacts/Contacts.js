import React from 'react'

const Contacts = () => {
    return (
        <section id="contact" className="contact">
            <div className="container">

                <div className="section-header">
                    <h2>Contact Us</h2>
                    <p>Sardar Patel Institute of Technology</p>
                </div>

            </div>


            <div className="container">

                <div className="row gy-5 gx-lg-5">

                    <div className="col-lg-4">

                        <div className="info">
                            <h3>Get in touch</h3>
                            <p>DocChain||Sardar Patel Institute of Technology</p>

                            <div className="info-item d-flex">
                                <i className="bi bi-geo-alt flex-shrink-0"></i>
                                <div>
                                    <h4>Location:</h4>
                                    <p>Azad Nagar,Andheri(W),Mumbai,Maharashtra</p>
                                </div>
                            </div>

                            <div className="info-item d-flex">
                                <i className="bi bi-envelope flex-shrink-0"></i>
                                <div>
                                    <h4>Email:</h4>
                                    <p>DocChain@gmail.com</p>
                                </div>
                            </div>

                            <div className="info-item d-flex">
                                <i className="bi bi-phone flex-shrink-0"></i>
                                <div>
                                    <h4>Call:</h4>
                                    <p>+91 9144332211</p>
                                </div>
                            </div>

                        </div>

                    </div>

                    <div className="col-lg-8">
                        <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                            <div className="row">
                                <div className="col-md-6 form-group">
                                    <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                                </div>
                                <div className="col-md-6 form-group mt-3 mt-md-0">
                                    <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                                </div>
                            </div>
                            <div className="form-group mt-3">
                                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
                            </div>
                            <div className="form-group mt-3">
                                <textarea className="form-control" name="message" placeholder="Message" required></textarea>
                            </div>
                            <div className="my-3">
                                <div className="loading">Loading</div>
                                <div className="error-message"></div>
                                <div className="sent-message">Your message has been sent. Thank you!</div>
                            </div>
                            <div className="text-center"><button type="submit">Send Message</button></div>
                        </form>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default Contacts