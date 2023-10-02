import React, { useState } from "react";
import './Product.css';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import InventoryIcon from '@mui/icons-material/Inventory';
import GroupsIcon from '@mui/icons-material/Groups';
import BuildIcon from '@mui/icons-material/Build';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import AllInboxIcon from '@mui/icons-material/AllInbox';
import CachedIcon from '@mui/icons-material/Cached';

const Quickbookintegration = () => {


    return (
        <>
            <div className="product">

                <div className="mainserivices bg-white">

                    <div className="getintouch wrapper bg-white">
                        <div className="col-md-9 justify-content-center m-auto mx-auto py-5  mb-5">
                            <div className="row mx-auto justify-content-center mt-5">
                                <div className="col-md-6">
                                    <h3>Woocommerce Quickbooks Integration</h3><br></br>
                                    <p>Without Monthly Fees! </p><br></br>
                                    <p className="paaragraph black">Connect WooCommerce and QuickBooks <i>Online</i> and completely automate your accounting. Never manually enter invoices, customers or products again. Installation is simple and requires no programming skills.</p><br></br>

                                    <a href="#" className="buynows ">Buy Now</a>

                                </div>
                                <div className="col-md-6">
                                    <img src="https://techspawn.com/wp-content/uploads/2018/09/QUICKBOOK.png"></img>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* --------------------------------------------------------------------------------------------------------------------------------------------- */}
                    <div className="fusion-page-title imgstt">
                        <div className="fusion-page-title-wrapper">
                            <div className="fusion-page-title-captions">
                                <h1 className="entry-title multi text-center mt-5 marginset">
                                    No Synchronization Limits
                                </h1>
                                <div className="col-md-9 justify-content-center mx-auto mt-4 mb-5 paaragraph white text-center">Plugin supports Unlimited real-time sync of orders, customers, inventory and more</div><br></br>
                                <div className="row justify-content-center text-center mx-auto m-auto align-items-center" style={{ justifyContent: 'center' }}>
                                    <div className="col-md-3 animate">

                                        <AddShoppingCartIcon sx={{ textAlign: 'center', color: '#fff', border: '2px solid #333333', borderWidth: '0px', background: '#69b2db', boxSizing: 'content-box', height: '124px', width: '124px', lineHeight: '124px', borderRadius: '50%', fontSize: '62px' }} /><br></br>

                                        <h3 className="white mt-3"><b>Orders</b></h3>
                                    </div>
                                    <div className="col-md-3 animate">
                                        <InventoryIcon sx={{ textAlign: 'center', color: '#fff', border: '2px solid #333333', borderWidth: '0px', background: '#69b2db', boxSizing: 'content-box', height: '124px', width: '124px', lineHeight: '124px', borderRadius: '50%', fontSize: '62px' }} /><br></br>
                                        <h3 className="white mt-3"><b> Inventory</b></h3>
                                    </div>
                                    <div className="col-md-3 animate">
                                        <GroupsIcon sx={{ textAlign: 'center', color: '#fff', border: '2px solid #333333', borderWidth: '0px', background: '#69b2db', boxSizing: 'content-box', height: '124px', width: '124px', lineHeight: '124px', borderRadius: '50%', fontSize: '62px' }} /><br></br>
                                        <h3 className="white mt-3"><b>Customers</b></h3>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* --------------------------------------------------------------------------------------------------------------------------------------------- */}
                    <div className="getintouch wrapper bg-white">
                        <div className="col-md-9 justify-content-center m-auto mx-auto py-5  mb-5">
                            <h1 className="subheadingss text-center ">No Monthly Fees</h1>
                            <p className="paaragraph text-center black">No Monthly Fees to Sync Orders, Inventory, Customers, Products And More! Only buy Once without any hidden charges.</p>
                            <div className="row mx-auto mt-5 mb-4 justify-content-center text-center align-items-center">
                                <div className="col-md-4 relative mb-auto">
                                    <BuildIcon className="mt-3 mb-3 iconset" sx={{ display: 'block', float: 'none', margin: '0 auto', height: '64px', width: '64px', lineHeight: '64px', fontSize: '24px', color: '#fff' }} />
                                    <h3 className="subheading">Unbeatable Pricing</h3>
                                    <p className="paaragraph black">Now Only $75 (soon to be $99 one time charge)</p>
                                </div>
                                <div className="col-md-4">
                                    <NotificationsIcon className="mt-3 mb-3 iconset" sx={{ display: 'block', float: 'none', margin: '0 auto', height: '64px', width: '64px', lineHeight: '64px', fontSize: '24px', color: '#fff' }} />
                                    <h3 className="subheading">Lifetime Free Updates</h3>
                                    <p className="paaragraph black">No need to Pay again for latest WooCommece QuickBooks onine plugin</p>
                                </div>
                                <div className="col-md-4 relative mb-auto">
                                    <PowerSettingsNewIcon className="mt-3 mb-3 iconset" sx={{ display: 'block', float: 'none', margin: '0 auto', height: '64px', width: '64px', lineHeight: '64px', fontSize: '24px', color: '#fff' }} />
                                    <h3 className="subheading">Winthout Limits</h3>
                                    <p className="paaragraph black">NUnlimited Transactions irrespective of number of orders</p>
                                </div>
                            </div><br></br><br></br>
                            <div className="row mx-auto justify-content-center text-center align-items-center">
                                <div className="col-md-4">
                                    <ToggleOnIcon className="mt-3 mb-3 iconset" sx={{ display: 'block', float: 'none', margin: '0 auto', height: '64px', width: '64px', lineHeight: '64px', fontSize: '24px', color: '#fff' }} />
                                    <h3 className="subheading">100% Money Back Guarantee.</h3>
                                    <p className="paaragraph black">Within 7 days of your purchase, if you encounter technical problems we can’t fix, we will refund your money.</p>
                                </div>
                                <div className="col-md-4 relative mb-auto">
                                    <AllInboxIcon className="mt-3 mb-3 iconset" sx={{ display: 'block', float: 'none', margin: '0 auto', height: '64px', width: '64px', lineHeight: '64px', fontSize: '24px', color: '#fff' }} />
                                    <h3 className="subheading">Data Privacy Guarantied</h3>
                                    <p className="paaragraph black">Data isn’t passing through a 3rd party. It flows through secure and direct connection.</p>
                                </div>
                                <div className="col-md-4 relative mb-auto">
                                    <CachedIcon className="mt-3 mb-3 iconset" sx={{ display: 'block', float: 'none', margin: '0 auto', height: '64px', width: '64px', lineHeight: '64px', fontSize: '24px', color: '#fff' }} />
                                    <h3 className="subheading">Top-notch Support</h3>
                                    <p className="paaragraph black">Personalized support via skype for WooCommmerce quickboks online plugin configuration.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* --------------------------------------------------------------------------------------------------------------------------------------------- */}
                    <div className="container-fluid p-5" style={{ background: '#35baf2' }}>
                        <div className="col-md-9 mx-auto">
                            <div className="row mx-auto justify-content-center text-center">
                                <div className="col-md-8 mt-5 mb-5">
                                    <h3 className="white">Save your time & money with<i>Woocommerce Quickbooks Integration</i></h3>
                                </div>
                                <div className="col-md-4 mt-5 mb-5">
                                    <a href="#" className="buynows ">Buy Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}
export default Quickbookintegration;