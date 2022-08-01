import React from "react";

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="footer-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="footer-info">
                <h3>DCO-CHAIN</h3>
                <p>
                Azad Nagar,Andheri(W),Mumbai,Maharashtra
                  <br />
                  <br />
                  <strong>Phone:</strong> +91 9144332211
                  <br />
                  <strong>Email:</strong> DocChain@gmail.com
                  <br />
                </p>
              </div>
            </div>
           </div>
        </div>
      </div>
      <div className="footer-legal text-center">
      <div className="container d-flex flex-column flex-lg-row justify-content-center justify-content-lg-between align-items-center">

        <div className="d-flex flex-column align-items-center align-items-lg-start">
          <div className="copyright">
            &copy; Copyright <strong><span>DOC-CHAIN</span></strong>. All Rights Reserved
          </div>
          <div className="credits">
            Designed by <a href={process.env.REACT_APP_FRONTEND_DOMAIN}>DOC-CHAIN TEAM</a>
          </div>
        </div>

        <div className="social-links order-first order-lg-last mb-3 mb-lg-0">
          <a  className="twitter"><i className="bi bi-twitter"></i></a>
          <a  className="facebook"><i className="bi bi-facebook"></i></a>
          <a  className="linkedin"><i className="bi bi-linkedin"></i></a>
        </div>

      </div>
    </div>
    </footer>
  );
};

export default Footer;
