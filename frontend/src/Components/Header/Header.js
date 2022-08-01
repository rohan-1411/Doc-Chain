import React from 'react'

const Header = () => {
    return (
        <header id="header" className="header" data-scrollto-offset="0">
            <div className="container-fluid d-flex align-items-center justify-content-between">

                <a href={process.env.REACT_APP_FRONTEND_DOMAIN} className="logo d-flex align-items-center scrollto me-auto me-lg-0">
                    <img src="assets/img/logo.png" alt="" />
                    <h1>DOC-CHAIN</h1>
                </a>

                <nav id="navbar" className="navbar">
                    <ul>
                        <li className="nav-link"><a href={process.env.REACT_APP_FRONTEND_DOMAIN}><span>Home</span></a></li>
                        <li><a className="nav-link scrollto" href="../#about">About</a></li>
                        <li><a className="nav-link scrollto" href="../#featured-services">Features</a></li>
                        <li className="dropdown"><a href="#"><span>Login/Signup</span> <i className="bi bi-chevron-down dropdown-indicator"></i></a>
                            
                            <ul>
                                <li className="dropdown"><a href="#">Sign In
                                <i className="bi bi-chevron-down dropdown-indicator"></i></a>
                                <ul>
                                    <li className="dropdown"><a href="/signin">Student Login</a></li>
                                    <li className="dropdown"><a href="/ASignIn">Institute Login</a></li>
                                    <li className="dropdown"><a href="/companySignIn">Company Login</a></li>
                                </ul>
                
                                </li>
                                <li className="dropdown"><a href="#">Sign Up</a>
                                <ul>
                                    <li className="dropdown"><a href="/Signup">Register your Institute</a></li>
                                    <li className="dropdown"><a href="/companySignup">Register your Company</a></li>
                                </ul>
                                
                                </li>
                            </ul>
                        </li>
                        <li><a className="nav-link scrollto" href="../#contact">Contact</a></li>
                    </ul>
                    <i className="bi bi-list mobile-nav-toggle d-none"></i>
                </nav>

                


            </div>
        </header>
    )
}

export default Header