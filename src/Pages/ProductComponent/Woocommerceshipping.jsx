import React, { useState } from "react";
import './Product.css';


const Shippingpro = () => {


    return (
        <>
            <div className="product">

                <div className="mainserivices bg-white">
                    <div className="fusion-page-title">
                        <div className="fusion-page-title-wrapper">
                            <div className="fusion-page-title-captions">
                                <h1 className="entry-title multi text-center mt-5">
                                    WooCommerce Shipping Pro for FedEx
                                </h1>
                                <div className="col-md-10 text-center mx-auto m-auto align-items-center" style={{ justifyContent: 'center' }}>
                                    <p className="paaragraph comwo mt-4">International delivery at reasonable prices.</p>
                                    <p className="paaragraph comwo">Designed to save money or deliver really fast.</p>
                                    <p className="paaragraph comwo ">Enable FedEx live rates for WooCommerce.</p><br></br>
                                    <a href="#" className="buynow ">Buy Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* --------------------------------------------------------------------------------------------------------------------------------------------- */}
                    <div className="getintouch wrapper bg-white">
                        <div className="col-md-9 justify-content-center m-auto mx-auto py-5 mt-4 mb-5">


                            <h1 className="subheadingss text-center mt-5">Key benefits of FedEx WooCommerce
                            </h1>
                            <p className="text-center paaragraph">This WooCommerce FedEx Shipping plugin hosted right in your WordPress Dashboard. Just Configure settings with your FedEx API key, select the shipping methods you want to offer, and you’re done!</p>
                            <div className="row mt-5 justify-content-center  text-center mx-auto m-auto align-items-center">
                                <div className="col-md-4">
                                    <img decoding="async" width="128" height="128" alt="credit card" title="credit card" src="https://cdn1.iconfinder.com/data/icons/finance-technology-fintech-vol-3/256/cvv-512.png" data-orig-src="https://techspawn.com/wp-content/uploads/2021/04/credit-card.png" class="img-responsive wp-image-41059 lazyloaded m-auto" /><br></br>
                                    Real-Time and accurate shipping rates
                                </div>
                                <div className="col-md-4">
                                    <img decoding="async" width="128" height="128" alt="credit card" title="credit card" src="https://cdn1.iconfinder.com/data/icons/finance-technology-fintech-vol-3/256/cvv-512.png" data-orig-src="https://techspawn.com/wp-content/uploads/2021/04/credit-card.png" class="img-responsive wp-image-41059 lazyloaded m-auto" /><br></br>
                                    Ability to adjust shipping rates
                                </div>
                                <div className="col-md-4">
                                    <img decoding="async" width="128" height="128" alt="credit card" title="credit card" src="https://cdn1.iconfinder.com/data/icons/finance-technology-fintech-vol-3/256/cvv-512.png" data-orig-src="https://techspawn.com/wp-content/uploads/2021/04/credit-card.png" class="img-responsive wp-image-41059 lazyloaded m-auto" /><br></br>
                                    Packing Methods
                                </div>

                            </div>
                            <div className="row mt-5 justify-content-center text-center mx-auto m-auto align-items-center">
                                <div className="col-md-4">
                                    <img decoding="async" width="128" height="128" alt="credit card" title="credit card" src="https://cdn1.iconfinder.com/data/icons/finance-technology-fintech-vol-3/256/cvv-512.png" data-orig-src="https://techspawn.com/wp-content/uploads/2021/04/credit-card.png" class="img-responsive wp-image-41059 lazyloaded m-auto" /><br></br>
                                    Print Shipping Labels
                                </div>
                                <div className="col-md-4">
                                    <img decoding="async" width="128" height="128" alt="credit card" title="credit card" src="https://cdn1.iconfinder.com/data/icons/finance-technology-fintech-vol-3/256/cvv-512.png" data-orig-src="https://techspawn.com/wp-content/uploads/2021/04/credit-card.png" class="img-responsive wp-image-41059 lazyloaded m-auto" /><br></br>
                                    Shipping Tracking
                                </div>
                                <div className="col-md-4">
                                    <img decoding="async" width="128" height="128" alt="credit card" title="credit card" src="https://cdn1.iconfinder.com/data/icons/finance-technology-fintech-vol-3/256/cvv-512.png" data-orig-src="https://techspawn.com/wp-content/uploads/2021/04/credit-card.png" class="img-responsive wp-image-41059 lazyloaded m-auto" /><br></br>
                                    Handling fees/discounts
                                </div>
                            </div>


                        </div>
                    </div>
                    {/* --------------------------------------------------------------------------------------------------------------------------------------------- */}
                    <div className="container-fluid p-4" style={{ background: '#e6e6e6' }}>
                        <div className="col-md-9 mx-auto mt-5 mb-5 " >
                            <div className="row align-items-center">
                                <h1 className="subheadings">All FedEx WooCommerce Features</h1>
                                <p className="text-center mb-5">Features of WooCommerce Shipping Pro for FedEx :</p>

                            </div>
                            <div className="row align-items-center mx-auto m-auto">
                                <div className="col-md-6 mt-4">
                                    <ul className="paaragraph">
                                        <li> Easy to install and Configure.</li>
                                        <li>Dynamic rates based on cart contents and Address.</li>
                                        <li>Real-Time FedEx shipping rate calculations.</li>
                                        <li>Automatically generate and Print Shipping Label for orders.</li>
                                        <li>Displays real-time FedEx shipping rates based on the destination address.</li>
                                        <li>WooCommerce FedEx Plugin supports all FedEx Shipping Services including Domestic, International, Freight, SmartPost, FedEx One Rate, etc.</li>
                                    </ul>
                                </div>
                                <div className="col-md-6">
                                    <ul className="paaragraph">
                                        <li>All currencies supported by FedEx.</li>
                                        <li>Shipment Tracking for customers and shop owners.</li>
                                        <li>Add buffer to estimated delivery date based on order preparing time</li>
                                        <li>Estimated delivery Date or Days displayed in the checkout.</li>
                                        <li>Selected FedEx Shipping methods will be automatically displayed on checkout.</li>
                                        <li>Add Fees or Discounts on FedEx rates based on percent or fixed value.</li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* -------------------------------------------------------------------------------------------------------------------------- */}

                    <div className="getintouch wrapper bg-white">
                        <div className="col-md-9 justify-content-center m-auto mx-auto py-5 mt-4 mb-5">


                            <h1 className=" text-center mt-5"><b>Integrate WooCommerce with FedEx Shipping for following Methods</b>
                            </h1>

                            <div className="row mt-5 justify-content-center   mx-auto m-auto align-items-center">
                                <div className="col-md-3 " >
                                    <h6 className="domestic" >DOMESTIC SHIPPING SERVICES</h6>
                                    <ul>
                                        <li>FedEx First Overnight</li>
                                        <li>FedEx Priority Overnight</li>
                                        <li>FedEx Standard Overnight</li>
                                        <li>FedEx 2 Day</li>
                                        <li>FedEx 2 Day A.M.</li>
                                        <li>FedEx Ground</li>
                                        <li>FedEx Home Delivery</li>
                                        <li>FedEx Next Day Early Morning</li>
                                        <li>FedEx Next Day Mid Morning</li>
                                        <li>FedEx Next Day Afternoon</li>
                                        <li>FedEx Next Day End of the Day</li>
                                        <li>FedEx Express Saver</li>
                                        <li>FedEx Same Day City</li>
                                        <li>FedEx Same Day</li>

                                    </ul>
                                </div>
                                <div className="col-md-3 relative mb-auto" >
                                    <h6 className="domestic">FREIGHT SHIPPING SERVICES</h6>
                                    <ul>
                                        <li>FedEx 1-Day Freight</li>
                                        <li>FedEx 2-Day Freight</li>
                                        <li>FedEx 3-Day Freight</li>
                                        <li>FedEx International Economy Freight</li>
                                        <li>FedEx International Priority Freight</li>
                                        <li>FedEx First Freight</li>
                                        <li>FedEx Freight Economy</li>
                                        <li>FedEx Freight Priority</li>
                                        <li>FedEx Next-Day Freight</li>


                                    </ul>
                                </div>
                                <div className="col-md-3 relative mb-auto">
                                    <h6 className="domestic">INTERNATIONAL SHIPPING SERVICES</h6>
                                    <ul>
                                        <li>FedEx International Economy</li>
                                        <li>FedEx International First</li>
                                        <li>FedEx Europe First International Priority</li>
                                        <li>FedEx Distance Deferred</li>


                                    </ul>
                                </div>

                                <div className="col-md-3 relative mb-auto">
                                    <h6 className="domestic">SMARTPOST SHIPPING SERVICES</h6>
                                    <ul>
                                        <li>FedEx SmartPost</li>
                                    </ul>
                                </div>
                            </div>


                        </div>
                    </div>


                    {/* -------------------------------------------------------------------------------------------------------------------------- */}
                    <div className="container-fluid" style={{background:'#F7F7F7'}}>
                    <div className="col-md-9 mx-auto mt-5 mb-5 p-5 " >
                        <div className="row align-items-center">
                            <h1 className="subheadings">FAQ & Plugin Details</h1>


                        </div>
                        <div className="row mx-auto">
                            <div className="col-md-6">
                                <div id="accordion">
                                    <div class="card">
                                        <div class="card-header">
                                            <a class="btn lavender" data-bs-toggle="collapse" href="#collapseOne">
                                                Where can i find the documentation
                                            </a>
                                        </div>
                                        <div id="collapseOne" class="collapse show " data-bs-parent="#accordion">
                                            <div class="card-body">
                                                We wrote a fine piece of docs, just follow this link:
                                                <a className="lavender">FedEx WooCommerce Live Rates PRO Docs</a>

                                            </div>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <div class="card-header">
                                            <a class="collapsed btn lavender" data-bs-toggle="collapse" href="#collapseTwo">
                                                How do our plugins subscriptions work?
                                            </a>
                                        </div>
                                        <div id="collapseTwo" class="collapse" data-bs-parent="#accordion">
                                            <div class="card-body">
                                                <p className="paaragraph black">All the plugins we offer can be purchased in a yearly subscription model and are paid annually. An active subscription entitles you to 1 year of updates and our support.</p>
                                                <p className="paaragraph black">Renewing the subscription after 12 months is optional, not required, and you can cancel it at any time. The renewal cost is the same as the initial price. You may renew the subscription if you like or not if don’t need to.</p>
                                                <p className="paaragraph black">Please mind that an active subscription grants you the possibility to download the plugins’ newer versions and updates, get our tech support if you encounter any problems and move and activate the API keys between the sites/domains.</p>
                                                <p className="paaragraph black">If you decide to cancel the subscription or if it expires, you can keep using our plugins. They will work the same as before but you won’t be able to do the updates, get our support and transfer the plugin files between sites and activate them in the new environment.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card" style={{ color: '#333333' }}>
                                        <div class="card-header">
                                            <a class="collapsed btn lavender" data-bs-toggle="collapse" href="#collapseThree">
                                                Do you have the plugin demo or trial
                                            </a>
                                        </div>
                                        <div id="collapseThree" class="collapse" data-bs-parent="#accordion">
                                            <div class="card-body">
                                                <p className="paaragraph black">You can set up your own full featured demo here: Codecanyon.<a className="lavender">Codecanyon</a></p>
                                                <p className="paaragraph black">We also offer 30 day money back guarantee, so you can test the plugin risk free in your WooCommerce store.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 ">
                                <div id="accordion">
                                    <div class="card">
                                        <div class="card-header">
                                            <a class="btn lavender" data-bs-toggle="collapse" href="#collapseOne">
                                                Do you have money back gurentee?
                                            </a>
                                        </div>
                                        <div id="collapseOne" class="collapse show" data-bs-parent="#accordion">
                                            <div class="card-body">
                                                We wrote a fine piece of docs, just follow this link:
                                                FedEx WooCommerce Live Rates PRO Docs

                                            </div>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <div class="card-header">
                                            <a class="collapsed btn lavender" data-bs-toggle="collapse" href="#collapseTwo">
                                                What payment methods do you accepts?
                                            </a>
                                        </div>
                                        <div id="collapseTwo" class="collapse" data-bs-parent="#accordion">
                                            <div class="card-body">
                                                <p className="paaragraph black">We accept Stripe payments including the most popular credit cards.</p>
                                                <p className="paaragraph black">All payments are handled by Stripe secure payments and SSL checkout. We do not store your credit card details.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card" style={{ color: '#333333' }}>
                                        <div class="card-header">
                                            <a class="collapsed btn lavender" data-bs-toggle="collapse" href="#collapseThree">
                                                I have more questions!
                                            </a>
                                        </div>
                                        <div id="collapseThree" class="collapse" data-bs-parent="#accordion">
                                            <div class="card-body">
                                                <p className="paaragraph black">We will be happy to help, just drop us a line and we will try to answer in 24 hours:</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-12 justify-content-center text-center mt-5 mb-5">
                            <a href="#" className="buynows mb-5">Buy Now</a><br></br>
                        </div>
                    </div>
                    </div>
                </div >

            </div>
        </>
    )

}
export default Shippingpro;