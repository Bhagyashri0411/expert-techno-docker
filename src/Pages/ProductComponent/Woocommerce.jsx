import React, { useState } from "react";
import './Product.css';


const comm = () => {


    return (
        <>
            <div className="product">

                <div className="mainserivices bg-white">
                    <div className="fusion-page-title-bar">
                        <div className="fusion-page-title-wrapper">
                            <div className="fusion-page-title-captions">
                                <h1 className="entry-title multi">
                                    WooCommerce Multi Locations Inventory Management
                                </h1>
                                <div className="col-md-10 text-center mx-auto m-auto align-items-center" style={{ justifyContent: 'center' }}>
                                    <p className="paaragraph comwo mt-4">WooCommerce Multi Locations Inventory Management Plugin provides option to manage Product Stock from Multiple Locations for your WooCommerce Store.</p>
                                    <p className="paaragraph comwo ">Our plugin is designed to help WooCommerce based eCommerce store that ships products to its customers around the globe from multiple warehouses or a company that sells products from its stores in different locations. The plugin automatically detects the nearest Product Location. It also shows Availability and Pricing of Product based on the location of a product.</p><br></br>
                                    <a href="#" className="buynow ">Buy Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* --------------------------------------------------------------------------------------------------------------------------------------------- */}
                    <div className="col-md-9 mx-auto mt-5 mb-5 bg-white">
                        <div className="row align-items-center">
                            <h1 className="subheadings">Features of Multi Locations for WooCommerce</h1>

                        </div>
                        <div className="row align-items-center mx-auto m-auto">
                            <div className="col-md-6 mt-4">
                                <ul className="paaragraph">
                                    <li> Manage Products stock across multiple locations, Warehouses, or Stores.</li>
                                    <li>Allow visitors to choose preferred location on Product page</li>
                                    <li>Allow visitors to choose preferred location globally using shortcode</li>
                                    <li>Option to Automatically choose nearest product location based on users address. (Requires Google Map API key )</li>
                                    <li>Displays product Quantity or Availability based on the location.</li>
                                    <li>Visitors can see selected warehouse / location on checkout and cart page.</li>
                                    <li><b>Easy to install and Configure.</b></li>
                                </ul>
                            </div>
                            <div className="col-md-6">
                                <ul className="paaragraph">
                                    <li>Option to add <b>Location-wise Price</b></li>
                                    <li>Automatically detect user’s geolocation from browser and allocate Woocommerce Location based on geolocation.</li>
                                    <li>Option to <b>Restrict/Assign customer to specific locations</b> from WordPress backend</li>
                                    <li><b>Orders emails to Locations email ID</b> and WooCommerce locations Managers when an order is assigned to them</li>
                                    <li><b>REST API </b>to get and update product stock for locations</li>
                                    <li>Compatible with <b>WP All Import</b> for Import/ Export of Stock.</li>
                                    <li><b>Add Unlimited Warehouse or Stock Locations for WooCommerce easily without any extra cost </b></li>
                                    <li><b>No Monthly / Yearly Fees.</b></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* --------------------------------------------------------------------------------------------------------------------------------------------- */}

                    <div className="fusion-page-title-ba">
                        <div className="fusion-page-title-wrapper">
                            <div className="fusion-page-title-captions ">
                                <h1 className="new">
                                    What’s New !!
                                </h1>

                            </div>
                        </div>
                        <div class="container mt-5 mb-3">
                            <div class="row">
                                <div class="col-md-4 ">
                                    <div class="card locate p-4 mb-2">
                                        <div class="justify-content-between text-center">
                                            <h4>Assign Specific</h4>
                                            Assign Specific <b>Payment Methods</b> to locations
                                        </div>

                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="card locate p-4 mb-2 text-center">
                                        <h4>Assign Specific</h4>
                                        Option to assign Shop Managers  to locations locations
                                    </div>
                                </div>

                                <div class="col-md-4">
                                    <div class="card locate p-4 mb-2 text-center">
                                        <h4>Assign Specific</h4>
                                        Show Distance to Selected Location in  Kilometre or Miles
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=" mx-auto m-auto relative mb-4">
                            <div className="row gap-3 mx-auto m-auto text-center justify-content-center">
                                <div className="col-md-3 locate mb-5 mt-4">
                                    <b>Multi-Location Shipping Support.</b> Compatible with WooCommerce Shipping Pro for UPS & WooCommerce Shipping Pro for FedEx and supported 100+ carriers with WooCommerce Shipping Pro for EasyPost
                                </div>
                                <div className="col-md-3 locate mb-5 mt-4">
                                    <b>SubLocation</b> for more granular level inventory control. Sublocations can be rack, bin number, shelf number, sub-area of a warehouse, floor, building etc.
                                </div>
                            </div><br></br>
                        </div>

                    </div>

                    {/* -------------------------------------------------------------------------------------------------------------------------- */}


                    <div className="getintouch wrapper">
                        <div className="col-md-9 justify-content-center m-auto mx-auto py-5 mt-4 mb-5">


                            <h1 className="subheadingss text-center mt-5">Benefits of WooCommerce Multi Locations Inventory Plugin
                            </h1>
                            <div className="row mt-5 justify-content-center text-center mx-auto m-auto align-items-center">
                                <div className="col-md-3">
                                    <img decoding="async" width="128" height="128" alt="credit card" title="credit card" src="https://cdn1.iconfinder.com/data/icons/finance-technology-fintech-vol-3/256/cvv-512.png" data-orig-src="https://techspawn.com/wp-content/uploads/2021/04/credit-card.png" class="img-responsive wp-image-41059 lazyloaded m-auto" /><br></br>
                                    Collect payments for each location using separate Payment Method</div>
                                <div className="col-md-3">
                                    <img className="mb-4" decoding="async" width="100" height="100" alt="credit card" title="credit card" src="https://cdn3.iconfinder.com/data/icons/map-and-gps-3/30/map-GPS-1040-512.png"></img><br></br>
                                    Easy to manage multiple locations, both for product and orders</div>
                                <div className="col-md-3">
                                <img decoding="async" width="128" height="128" alt="credit card" title="credit card" src="https://cdn-icons-png.flaticon.com/512/1792/1792671.png" class="img-responsive wp-image-41059 lazyloaded m-auto"/><br></br>
                                    Assign a Delivery area for Location with Shipping Zone</div>
                                <div className="col-md-3">
                                <img decoding="async" width="128" height="128" alt="credit card" title="credit card" src="https://cdn-icons-png.flaticon.com/512/1792/1792671.png" class="img-responsive wp-image-41059 lazyloaded m-auto"/><br></br>
                                    Delegate Locations Management to Shop Managers</div>
                            </div>
                            <div className="row mt-5 gap-5 justify-content-center text-center mx-auto m-auto align-items-center">
                                <div className="col-md-3">
                                    <img decoding="async" width="128" height="128" alt="credit card" title="credit card" src="https://cdn1.iconfinder.com/data/icons/finance-technology-fintech-vol-3/256/cvv-512.png" data-orig-src="https://techspawn.com/wp-content/uploads/2021/04/credit-card.png" class="img-responsive wp-image-41059 lazyloaded m-auto" /><br></br>
                                    Collect payments for each location using separate Payment Method</div>
                                <div className="col-md-3">
                                    <img className="mb-4" decoding="async" width="100" height="100" alt="credit card" title="credit card" src="https://cdn3.iconfinder.com/data/icons/map-and-gps-3/30/map-GPS-1040-512.png"></img><br></br>
                                    Easy to manage multiple locations, both for product and orders</div>
                                <div className="col-md-3">
                                <img decoding="async" width="128" height="128" alt="credit card" title="credit card" src="https://cdn-icons-png.flaticon.com/512/1792/1792671.png" class="img-responsive wp-image-41059 lazyloaded m-auto"/><br></br>
                                    Assign a Delivery area for Location with Shipping Zone</div>
                               
                            </div>


                        </div>
                    </div>

                    {/* -------------------------------------------------------------------------------------------------------------------------- */}

                    <section className="wrapper">
                        <div className="col-md-9 mx-auto">
                            <div className="row justify-content-center">
                                <h5 className="text-center">
                                    <b>Feel free to ask our <a href="#">Support</a> if you looking for any additional features Or</b></h5>
                                    <h5 className="text-center mb-5">
                                        <b>have Pre-Sale Question for Woccomerce Multi Warehouse Plugin</b>
                                    </h5>
                              
                               <div className="col-md-2 text-center">
                               <a href="#" className="buynows ">Buy Now</a>
                               </div>
                            </div>
                        </div>
                    </section>
                    {/* -------------------------------------------------------------------------------------------------------------------------- */}

                   


                </div >

            </div>
        </>
    )

}
export default comm;