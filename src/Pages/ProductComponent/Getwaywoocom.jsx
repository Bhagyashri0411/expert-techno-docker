import React, { useState } from "react";
import './Product.css';


const Getway = () => {


    return (
        <>
            <div className="product">

                <div className="mainserivices bg-white">
                    <div className="fusion-page-title imagesset">
                        <div className="fusion-page-title-wrapper">
                            <div className="fusion-page-title-captions">
                                <h1 className="entry-title multi text-center mt-5 marginset">
                                    Quickbooks Payments Gateway for WooCommerce
                                </h1>
                                <div className="col-md-9 mx-auto mt-4 mb-5">

                                    <p className="paaragraph white">QuickBooks Payments For WooCommerce provides an easier, cost-effective and simple alternative for small business for accepting credit cards. Customers stay on your store during checkout instead of being redirected to an externally hosted checkout page, which has been proven to lead to higher conversion rates. This extension supports merchants using a QuickBooks Payments account for eCommerce processing.</p>
                                </div>
                                <div className="col-md-10 text-center mx-auto m-auto align-items-center" style={{ justifyContent: 'center' }}>

                                    <a href="#" className="buynow "><b>Buy Now</b></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* --------------------------------------------------------------------------------------------------------------------------------------------- */}
                    <div className="container-fluid p-5 bg-white">
                        <div className="col-md-9 mx-auto  bg-white">

                            <div className="row mx-auto  justify-content-center m-auto">
                                <div className="col-md-2 mt-5 marginset mb-5">
                                    <img src="https://techspawn.com/wp-content/uploads/2020/03/visa-1.png"></img>
                                </div>
                                <div className="col-md-2 mt-5 marginset mb-5">
                                    <img src="https://techspawn.com/wp-content/uploads/2020/03/master-card.png"></img>
                                </div>
                                <div className="col-md-2 mt-5 marginset mb-5">
                                    <img src="https://techspawn.com/wp-content/uploads/2020/03/american-express.png"></img>
                                </div>
                                <div className="col-md-2 mt-5 marginset mb-5">
                                    <img src="https://techspawn.com/wp-content/uploads/2020/03/Discover.png"></img>
                                </div>
                                <div className="col-md-2 mt-5 marginset mb-5">
                                    <img src="https://techspawn.com/wp-content/uploads/2020/03/Diners-club.png"></img>
                                </div>
                                <div className="col-md-2 mt-5 marginset mb-5">
                                    <img src="https://techspawn.com/wp-content/uploads/2020/03/JCB-1.png"></img>
                                </div>
                            </div>
                        </div></div>

                    {/* --------------------------------------------------------------------------------------------------------------------------------------------- */}
                    <div className="getintouch wrapper" style={{ background: '#E6E6E6' }}>
                        <div className="col-md-9 justify-content-center m-auto mx-auto py-5 mt-4 mb-5">


                            <h1 className="subheadingss text-center mt-5">Features of QuickBooks Payments For WooCommerce :
                            </h1>

                            <div className="row mt-5 justify-content-center  mx-auto m-auto align-items-center">
                                <div className="col-md-6 relative mb-auto">
                                    <ul className="paaragraph black">
                                        <li>Customers never leave your site – Complete transaction process will be completed within the same page so the customer never leaves your site.</li>
                                        <li>Free Help – Inspire QuickBooks Payments for WooCommerce free technical and account support to merchants, as well as access to online documentation and user guides.</li>
                                        <li>Supports e Check Payment Method. Customers with USA bank accounts can checkout using their bank account information for a checking or savings account.</li>
                                        <li>Accepts all major cards – The plugin supports major cards like master card American express, visa and many more.</li>
                                    </ul>
                                </div>
                                <div className="col-md-6">
                                    <ul className="paaragraph black">
                                        <li>Added Refund for Echeck and Card Payment Method. Process refunds for an order paid with Intuit Payments within WooCommerce</li>
                                        <li>Added Address Verification Service (AVS) check notification. AVS helps merchants avoid credit card fraud and chargebacks for transactions in which the credit card is not physically present at sale.</li>
                                        <li>Securely Save Customer Payment Methods on Intuit’s secure servers, so your responsibility for PCI compliance is significantly reduced.</li>
                                        <li>Compatible with WooCommerce Quickbooks Connector. Streamline your operations and avoid double data entry</li>
                                        <li>Compatible with WooCommerce Subscriptions and WooCommerce Pre-Orders</li>
                                    </ul>
                                </div>

                            </div>


                        </div>
                    </div>

                    {/* -------------------------------------------------------------------------------------------------------------------------- */}

                    <div className="getintouch wrapper bg-white">
                        <div className="col-md-9 justify-content-center m-auto mx-auto py-5 mt-4 mb-5">


                            <h1 className=" text-center mt-5"><b>NEW FEATURES</b>
                            </h1>

                            <div className="row mt-5 justify-content-center  text-center mx-auto m-auto align-items-center">
                                <div className="col-md-4 relative mb-auto" >
                                    <img src="https://techspawn.com/wp-content/uploads/2020/03/Bank.jpeg"></img>
                                    <h2 className="domestic mt-3">support eCheck Payment Method</h2>

                                </div>
                                <div className="col-md-4 relative mb-auto" >
                                    <img src="https://techspawn.com/wp-content/uploads/2020/03/comp.jpeg"></img>
                                    <h2 className="domestic mt-3">Easy,Integrated Checkout</h2>

                                </div>
                                <div className="col-md-4 relative mb-auto" >
                                    <img src="https://techspawn.com/wp-content/uploads/2020/03/phone.jpeg"></img>
                                    <h2 className="domestic mt-3">support for Automatic Refund and Void</h2>

                                </div>

                            </div>


                        </div>
                    </div>


                    {/* -------------------------------------------------------------------------------------------------------------------------- */}
                    <div className="container-fluid p-4" style={{background:'#f6f6f6'}}>
                    <div className="col-md-9 mx-auto mt-5 mb-5">
                        <div className="row align-items-center">
                            <h1 className="subheadings">Requirements:</h1>


                        </div>
                        <div className="row align-items-center mx-auto m-auto justify-content-center gap-5">
                            <div className="col-md-5 " >
                                <ul>
                                    <li>Intuit Payments account login ( <a href="#">sign up here</a> if you don’t have an account yet) and grab your credentials</li>
                                    <li>WooCommerce 3.0+</li>
                                    <li>An SSL certificate</li>
                                </ul>
                            </div>

                        </div>
                        <div className="col-md-12 justify-content-center text-center mt-5">
                            <a href="#" className="buynows ">Buy Now</a>
                        </div>
                    </div>
                    </div>

                </div >

            </div>
        </>
    )

}
export default Getway;