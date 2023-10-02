import React, { useState } from "react";
import "./MainComponents.css"
import { Link } from "react-router-dom";

const Header = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleDropdownToggle = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };




    const handleDropdownToggles = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };



    return (
        <>
            <header className="header">
                <div className="row">
                    <div className="col-md-7">

                        <div className="logo">
                            <span>

                                Logo
                            </span>
                        </div>
                    </div>
                    <div className="col-md-5">
                        {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="mynavbar"> */}

                            <nav className="nav-links" >
                                <Link to="/">Home</Link>
                                <div
                                    className="dropdown-new"
                                    onMouseEnter={handleDropdownToggle}
                                    onMouseLeave={handleDropdownToggle}
                                >
                                    <span className="ms-3" style={{ cursor: 'pointer' }}>Services</span>
                                    {isDropdownOpen && (
                                        <div className="dropdown-content">

                                            <ServiceSection />

                                        </div>
                                    )}
                                </div>
                                <div
                                    className="dropdown-new"
                                    onMouseEnter={handleDropdownToggles}
                                    onMouseLeave={handleDropdownToggles}
                                >
                                    <span className="ms-3" style={{ cursor: 'pointer' }}>Products</span>
                                    {isDropdownOpen && (
                                        <div className="dropdown-content">

                                            <ProductSection />

                                        </div>
                                    )}
                                </div>

                                <a href="/about">About Us</a>
                                <a href="/contact">Contact Us</a>
                            </nav>
                        {/* </div> */}
                    </div>
                </div>

            </header>
        </>
    )
}
const ProductSection = () => {

    return (
        <>
            <div className="col-md-12">


                <div className="row">
                    <div className="col-md-6">
                        <ul>


                            <Link to="quickbookintegration">

                                <li className="hover">
                                    WooCommerce QuickBooks Integration
                                </li>
                            </Link>
                            <Link to="getway">

                                <li className="hover">
                                    QuickBook Payments Geteway for WooCommerce
                                </li>
                            </Link>
                            <Link to="proforups">

                                <li className="hover">
                                    WooCommerce Shipping Pro for UPS
                                </li>
                            </Link>
                            <Link to="proforusps">

                                <li className="hover">
                                    WooCommerce Shipping Pro for USPS
                                </li>
                            </Link>



                        </ul>

                    </div>
                    <div className="col-md-6">
                        <ul>

                            <Link to="comm">

                                <li className="hover">
                                    WooCommerce Multi Locations Inventory Management
                                </li>
                            </Link>

                            <Link to="shippingpro">

                                <li className="hover">
                                    WooCommerce Shipping Pro for FedEx
                                </li>
                            </Link>
                            <Link to="canadapost">

                                <li className="hover">
                                    WooCommerce Shipping Pro for Canada Post
                                </li>
                            </Link>
                            <Link to="easypostshipping">

                                <li className="hover">
                                    WooCommerce Easy Post Shipping
                                </li>
                            </Link>


                        </ul>

                    </div>

                </div>
            </div>
        </>
    )
}

const ServiceSection = () => {


    return (
        <>
            <div className="col-md-12">

                <div className="row border-bottom">
                    <div className="col-md-4">
                        <h3 className="topheading">
                            Web & Graphics Design
                        </h3>
                    </div>
                    <div className="col-md-4">
                        <h3 className="topheading">
                            Web Development
                        </h3>
                    </div>
                    <div className="col-md-4">
                        <h3 className="topheading">
                            WordPress Services
                        </h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <ul>

                            <Link to="webdesigning">

                                <li>Web Designing</li>

                            </Link>

                            <Link to="psdtohtml">

                                <li>
                                    PSD to HTML/CSS
                                </li>
                            </Link>
                            <Link to="design">

                                <li>
                                    Design & Branding
                                </li>
                            </Link>
                            <Link to="corporate">

                                <li>
                                    Corporate Identity
                                </li>
                            </Link>


                        </ul>

                    </div>
                    <div className="col-md-4">
                        <ul>

                            <Link to="pythondev">

                                <li>
                                    Python Developement
                                </li>
                            </Link>

                            <Link to="nodejs">

                                <li>
                                    Node.JS Development
                                </li>
                            </Link>
                            <Link to="angulardev">

                                <li>Angular Developement</li>

                            </Link>
                            <Link to="phpdev">

                                <li>PHP Developement</li>

                            </Link>

                        </ul>

                    </div>
                    <div className="col-md-4">
                        <ul>

                            <Link to="wordpress">

                                <li>WordPress Developement</li>

                            </Link>
                            <Link to="wordpressplugin">

                                <li>Plugin Development</li>

                            </Link>
                            <Link to="themecustomization">

                                <li>
                                    Theme customization
                                </li>
                            </Link>

                            <Link to="supportmaintain">

                                <li>
                                    Support Maintain
                                </li>
                            </Link>

                        </ul>

                    </div>
                </div>



                <div className="row border-bottom">
                    <div className="col-md-4">
                        <h3 className="topheading">
                            E-commerce Service
                        </h3>
                    </div>
                    <div className="col-md-4">
                        <h3 className="topheading">
                            Mobile Development
                        </h3>
                    </div>
                    <div className="col-md-4">
                        <h3 className="topheading">
                            Other Services
                        </h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <ul>


                            <Link to="woocomm">

                                <li>
                                    WooCommerce Developement
                                </li>
                            </Link>
                            <Link to="shopify">

                                <li>
                                    Shopify Developement
                                </li>
                            </Link>
                            <Link to="magento">

                                <li>
                                    Magento Developement
                                </li>
                            </Link>  <Link to="volusion">

                                <li>
                                    Volusion Developement
                                </li>
                            </Link>





                        </ul>

                    </div>
                    <div className="col-md-4">
                        <ul>


                            <Link to="androids">

                                <li>
                                    Androidapp Developement
                                </li>
                            </Link>
                            <Link to="iosapp">

                                <li>
                                    IOS App Developement
                                </li>
                            </Link>
                            <Link to="ionic">

                                <li>
                                    IONIC App Developement
                                </li>
                            </Link>
                            <Link to="flutter">

                                <li>
                                    FLUTTER  Developement
                                </li>
                            </Link>


                        </ul>

                    </div>
                    <div className="col-md-4">
                        <ul>
                            <Link to="digital">

                                <li>Digital Developement</li>

                            </Link>
                            <Link to="seoservice">

                                <li>SEO Service Developement</li>

                            </Link>
                            <Link to="offshore">

                                <li>
                                    Offshore Software developement
                                </li>
                            </Link>

                            <Link to="quality">

                                <li>
                                    Software Testing
                                </li>
                            </Link>
                            <Link to="devopes">

                                <li>
                                    DevOps Service
                                </li>
                            </Link>

                        </ul>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;