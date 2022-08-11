import React from 'react';

export const Footer: React.FC = () => {
    return (
        <footer className="footer spad">
            <div className="container">
                <div className="footer__wrapper">
                    <div className="footer__top">
                        <div className="footer__about">
                            <div className="footer__about__logo">
                                <a href="./index.html">
                                    <img src="../img/logo.png" alt="Logo" />
                                </a>
                            </div>
                            <ul>
                                <li>Address: 60-49 Road 11378 New York</li>
                                <li>Phone: +65 11.188.888</li>
                                <li>Email: hello@colorlib.com</li>
                            </ul>
                        </div>
                        <div className="footer__widget">
                            <h6>Useful Links</h6>
                            <div className="lists-wrapper">
                                <ul>
                                    <li>
                                        <a href="#s">About Us</a>
                                    </li>
                                    <li>
                                        <a href="#s">About Our Shop</a>
                                    </li>
                                    <li>
                                        <a href="#s">Secure Shopping</a>
                                    </li>
                                    <li>
                                        <a href="#s">Delivery infomation</a>
                                    </li>
                                    <li>
                                        <a href="#s">Privacy Policy</a>
                                    </li>
                                    <li>
                                        <a href="#s">Our Sitemap</a>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <a href="#s">Who We Are</a>
                                    </li>
                                    <li>
                                        <a href="#s">Our Services</a>
                                    </li>
                                    <li>
                                        <a href="#s">Projects</a>
                                    </li>
                                    <li>
                                        <a href="#s">Contact</a>
                                    </li>
                                    <li>
                                        <a href="#s">Innovation</a>
                                    </li>
                                    <li>
                                        <a href="#s">Testimonials</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="footer__widget">
                            <h6>Join Our Newsletter Now</h6>
                            <p>Get E-mail updates about our latest shop and special offers.</p>
                            <form action="#">
                                <input type="text" placeholder="Enter your mail" />
                                <button type="submit" className="site-btn">
                                    Subscribe
                                </button>
                            </form>
                            <div className="footer__widget__social">
                                <a href="#s">
                                    <i className="fa fa-facebook"></i>
                                </a>
                                <a href="#s">
                                    <i className="fa fa-instagram"></i>
                                </a>
                                <a href="#s">
                                    <i className="fa fa-twitter"></i>
                                </a>
                                <a href="#s">
                                    <i className="fa fa-pinterest"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="footer__bottom">
                        <div className="footer__copyright">
                            <div className="footer__copyright__text"></div>
                            <div className="footer__copyright__payment">
                                <img src={require('../img/payment-item.png')} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
