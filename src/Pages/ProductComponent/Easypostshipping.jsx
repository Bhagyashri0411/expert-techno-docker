import React, { useState } from "react";
import './Product.css';


const EasyPostshipping = () => {


    return (
        <>
            <div className="product">

                <div className="mainserivices bg-white">
                    <div className="fusion-page-title imgst">
                        <div className="fusion-page-title-wrapper">
                            <div className="fusion-page-title-captions">
                                <h1 className="entry-title multi text-center mt-5 marginset">
                                    WooCommerce Easy Post Shipping
                                </h1>
                                <div className="col-md-9 justify-content-center mx-auto mt-4 mb-5 paaragraph white">WooCommerce Shipping Pro for Easy Post Plugin Provides Real-Time FedEx Shipping Rates, USPS Shipping Rates & UPS Shipping Rates, More for $39 Only. Buy Now! This WooCommerce Easy Post Shipping plugin hosted right in your WordPress Dashboard. Just Configure settings with your Easy Post API key, select the shipping methods you want to offer, and you’re done!</div>
                                <div className="col-md-10 text-center mx-auto m-auto align-items-center" style={{ justifyContent: 'center' }}>

                                    <a href="#" className="buynow ">Buy Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* --------------------------------------------------------------------------------------------------------------------------------------------- */}
                    <div className="getintouch wrapper setgrapy">
                        <div className="col-md-9 justify-content-center m-auto mx-auto py-5  mb-5">
                            <h1 className="subheadingss text-center ">About EasyPost</h1>
                            <p className="paaragraph black">EasyPost is a flexible, modern Tracking API that makes it easy to add tracking and shipping to your app. Sign up and start shipping, Now! Thousands of developers already have.</p><br></br>
                            <p className="paaragraph black">EasyPost was founded in 2012 as the first RESTful API for shipping. EasyPost has thousands of customers shipping millions of packages each month. EasyPost’s customers range in size from public companies to SMBs. EasyPost allows business to integrate tracking statuses, address verification, label purchasing, rating, and more from DHL Global Mail, FedEx, UPS, USPS, and other regional carriers into their site or application.</p><br></br>
                            <p className="paaragraph black">For USPS, all accounts receive a USPS Commercial Plus Pricing, and EasyPost charges you directly via bank account or credit card for anything you ship. For UPS and FedEx your carrier account information in minutes via EasyPost website. All billing for packages will continue through your carriers with your negotiated rates.</p>
                        </div>
                    </div>
                    {/* --------------------------------------------------------------------------------------------------------------------------------------------- */}
                    <div className="getintouch wrapper bg-white">
                        <div className="col-md-9 justify-content-center m-auto mx-auto py-5  mb-5">
                            <h1 className="subheadingss text-center ">Live Shipping Rate from UPS, USPS & FedEx</h1>
                            <div className="justify-content-center text-center mx-auto">

                            <img src="https://techspawn.com/wp-content/uploads/2020/05/mmmnnn.png" className="m-auto mx-auto"></img>
                            </div>
                            <p className="paaragraph black mt-5">Based on the product weight, box dimensions, shipping destination, etc., this plugin fetches UPS, USPS or FedEx postage rates from your EasyPost account for both domestic and international shipping services. The returned services and rates will be displayed on the Checkout page.</p><br></br>
                        </div>
                    </div>


                    {/* --------------------------------------------------------------------------------------------------------------------------------------------- */}
                   <div className="coontainer-fluid p-3" style={{background:'#F7F7F7'}}>
                    <div className="col-md-9 mx-auto mt-5 mb-5">
                        <div className="row align-items-center">
                            <h1 className="subheadings">Features of WooCommerce Shipping Pro for Easy Post :</h1>
                          
                        </div>
                        <div className="row align-items-center mx-auto m-auto">
                            <div className="col-md-6 mt-4 relative mb-auto">
                                <ul className="paaragraph">
                                    <li>Easy to install and Configure.</li>
                                    <li>Dynamic rates based on cart contents and Address.</li>
                                    <li>Real-Time FedEx shipping rate calculations.</li>
                                    <li>WooCommerce Easy Post Plugin supports all FedEx Shipping Rates, USPS Shipping Rates & UPS Shipping Rates including Domestic, International</li>
                                </ul>
                            </div>
                            <div className="col-md-6">
                                <ul className="paaragraph">
                                    <li>No Monthly Fees.</li>
                                    <li> All currencies supported by Easy Post</li>
                                    <li>Estimated delivery Date or Days displayed in the checkout.</li>
                                    <li> Displays real-time Real-Time FedEx Shipping Rates, USPS Shipping Rates & UPS Shipping Rates based on the destination address.</li>
                                   
                                </ul>
                            </div>
                        </div>
                    </div>
                    </div>

                    {/* -------------------------------------------------------------------------------------------------------------------------- */}
                    <div className="getintouch wrapper bg-white">
                        <div className="col-md-9 justify-content-center m-auto mx-auto py-5 mt-4 mb-5">


                            <h1 className=" text-center"><b>How does it work?</b>
                            </h1>

                           <p className="black mt-4"><b>Step 1:</b> Install the Plugin, input your EasyPost Account details and enable EasyPost Shipping Method for WooCommerce.</p>
                           <p className="black"><b>Step 2:</b> Customer sees USPS/UPS/FedEx shipping rates provided by EasyPost, based on items in their cart before placing an order.</p>
                           <p className="black"><b>Step 3:</b> Pay Postage, Print Label, and Generate Tracking information from within the WooCommerce order page.</p>
                        </div>
                    </div>

                    {/* -------------------------------------------------------------------------------------------------------------------------- */}

                    <div className="getintouch wrapper setgrapy">
                        <div className="col-md-9 justify-content-center m-auto mx-auto py-5 mt-4 mb-5">


                            <h1 className=" text-center mt-5"><b>Integrate WooCommerce with FedEx , USPS & UPS for following Methods</b>
                            </h1>

                            <div className="row mt-5 justify-content-center  mx-auto m-auto align-items-center">
                                <div className="col-md-4 " >
                                    <h6 className="domestics text-left" >USPS Services</h6>
                                    <ul className="mt-3">
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
                                <div className="col-md-4 relative mb-auto" >
                                    <h6 className="domestics">FedEx Services</h6>
                                    <ul className="mt-3">
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
                                <div className="col-md-4 relative mb-auto">
                                    <h6 className="domestics">UPS Services</h6>
                                    <ul className="mt-3">
                                        <li>FedEx International Economy</li>
                                        <li>FedEx International First</li>
                                        <li>FedEx Europe First International Priority</li>
                                        <li>FedEx Distance Deferred</li>


                                    </ul>
                                </div>

                              
                            </div>


                        </div>
                    </div>


                    {/* -------------------------------------------------------------------------------------------------------------------------- */}
                    <div className="col-md-9 mx-auto mt-5 mb-5">
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
                                                <a  className="lavender">FedEx WooCommerce Live Rates PRO Docs</a>

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

                        <div className="col-md-12 justify-content-center text-center mt-5">
                            <a href="#" className="buynows ">Buy Now</a>
                        </div>
                    </div>

                </div >

            </div>
        </>
    )

}
export default EasyPostshipping;