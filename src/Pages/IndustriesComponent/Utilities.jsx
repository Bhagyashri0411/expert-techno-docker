import React, { useState } from "react";
import './IndustriesComponent.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';


const Utilities = () => {


    return (
        <>
            <div className="industries">
                <div style={{ marginTop: '2rem' }}></div>
                <div className="container-fluid" style={{ marginBottom: '130px' }}>
                    <div className="e-conn-full sisteenimgcontent" >
                        <div className="container">
                            <div className="listul">
                                <ul className="d-flex">
                                    <li>Home  </li>
                                    <li>  about us</li>
                                </ul>
                                <h3 className="h3">THE DIGITAL UTILITY:</h3>
                                <div className="d-md-flex justify-content-between align-items-end">
                                    <h1>Driving Innovation, Growth And Greater Efficiency</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ----------------------------------------------------------------------------------------------------------- */}

                <div className="container" style={{ marginBottom: '150px', marginTop: '5%' }}>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="elementor-widget-containerheading" style={{ fontSize: '3em' }}>
                                <p className="blacks">Increasing reliance on new energy sources, along with a growing need for more efficiency, requires unprecedented operational agility—and investments in digital for traditional operators and new entrants alike.Join our Awesome Team</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ------------------------------------------------------------------------------------------------------------------ */}

                <div className="container" style={{ marginBottom: '130px' }}>
                    <div className="e-con-fulls">
                        <div>
                            <h3 className="fs-1 mb-3 fw-bold">Join our Awesome Team</h3>
                            <p className="mb-4 black">We’re always looking for strong candidates to join our growing team in Mountain View and around the world and We’re looking for strong, passionate candidates to join our team</p>
                            <button className=" elementor-button bg-white w-auto">
                                <span> Send us your CV</span>
                            </button>
                        </div>
                        <div className="d-flex">
                            <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="224px" viewBox="0 0 24 24" width="224px" fill="#fff">
                                <rect fill="none" height="24" width="24"></rect>
                                <g>
                                    <path d="M4,13c1.1,0,2-0.9,2-2c0-1.1-0.9-2-2-2s-2,0.9-2,2C2,12.1,2.9,13,4,13z M5.13,14.1C4.76,14.04,4.39,14,4,14 c-0.99,0-1.93,0.21-2.78,0.58C0.48,14.9,0,15.62,0,16.43V18l4.5,0v-1.61C4.5,15.56,4.73,14.78,5.13,14.1z M20,13c1.1,0,2-0.9,2-2 c0-1.1-0.9-2-2-2s-2,0.9-2,2C18,12.1,18.9,13,20,13z M24,16.43c0-0.81-0.48-1.53-1.22-1.85C21.93,14.21,20.99,14,20,14 c-0.39,0-0.76,0.04-1.13,0.1c0.4,0.68,0.63,1.46,0.63,2.29V18l4.5,0V16.43z M16.24,13.65c-1.17-0.52-2.61-0.9-4.24-0.9 c-1.63,0-3.07,0.39-4.24,0.9C6.68,14.13,6,15.21,6,16.39V18h12v-1.61C18,15.21,17.32,14.13,16.24,13.65z M8.07,16 c0.09-0.23,0.13-0.39,0.91-0.69c0.97-0.38,1.99-0.56,3.02-0.56s2.05,0.18,3.02,0.56c0.77,0.3,0.81,0.46,0.91,0.69H8.07z M12,8 c0.55,0,1,0.45,1,1s-0.45,1-1,1s-1-0.45-1-1S11.45,8,12,8 M12,6c-1.66,0-3,1.34-3,3c0,1.66,1.34,3,3,3s3-1.34,3-3 C15,7.34,13.66,6,12,6L12,6z">
                                    </path>
                                </g>
                            </svg>
                        </div>
                    </div>
                </div>

                {/* -------------------------------------------------------------------------------------------------------------------- */}

                <div className="container" style={{ marginBottom: '130px' }}>
                    <div className="row">
                        <div className="mx-auto col-md-8">
                            <div className="smallheading text-center mb-5">
                                <p>DEPTH OF EXPERTISE</p>
                                <h3>The utilities segments we serve</h3>
                            </div>
                        </div>
                        <div className="grid-boxes">
                            <div className="e-con-boxed">
                                <div className="e-con-inner">
                                    <div className="elementor-widget-containerheading">
                                        <h5>Electricity</h5>
                                        <p>Expert Digital Web electric utilities services leverage digital to improve efficiency, reduce costs and increase customer satisfaction.</p>
                                    </div>
                                    <div className="mb-4 mt-5">
                                        <button href="/" className="elementor-buttons">Learn More</button>
                                    </div>
                                </div>
                            </div>
                            <div className="e-con-boxed">
                                <div className="e-con-inner">
                                    <div className="elementor-widget-containerheading">
                                        <h5>Gas</h5>
                                        <p>We help gas companies find new growth by enhancing the customer experience, improving reliability and optimizing assets.</p>
                                    </div>
                                    <div className="mb-4 mt-5">
                                        <button href="/" className="elementor-buttons">Learn More</button>
                                    </div>
                                </div>
                            </div>
                            <div className="e-con-boxed">
                                <div className="e-con-inner">
                                    <div className="elementor-widget-containerheading">
                                        <h5>Water</h5>
                                        <p>Our utilities practice has the industry and digital experience that water utilities need to create new business value.</p>
                                    </div>
                                    <div className="mb-4 mt-5">
                                        <button href="/" className="elementor-buttons">Learn More</button>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>

                {/* --------------------------------------------------------------------------------------------------------------------- */}

              
                <div className="container" style={{ marginBottom: '130px' }}>
                    <div className="e-con-fullwhite">
                        <div className="col-md-7 mx-auto"><div>
                            <h4>Newsletter Updates</h4>
                            <p className="black">Enter your email address below to subscribe to our tasty newsletter</p>
                        </div>
                            <div className="d-flex align-items-center gap-4">
                                <input type="text" className="news" placeholder="Your email address" />
                                <a href="/" className="elementor-buttons" role="button"><span> Subscribe</span></a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* -------------------------------------------------------------------------------------------------------------------------- */}

                <div class="container" style={{ marginBottom: '100px' }}>
                    <div class="row">
                        <div class="mx-auto col-md-8">
                            <div class="smallheading text-center mb-5">
                                <h3>Latest from Blog</h3>
                                <p>The more you know, the better your customer experience. So we gathered the most valuable ideas, materials, and tools to benefit your business, all in one place.</p>
                            </div>
                        </div>
                        <div class="e-con-inner">
                            <div class="entries">
                                <article>
                                    <a href="/">
                                        <img width="768" height="276" src="https://expertdigitalweb.com/static/media/blog.d7fc1e246f39ce3c0d57.jpg" alt="Firing on All Cylinders: Frontline Performance with VOC" />
                                    </a>
                                    <div class="entry-meta">
                                        <ul className="mb-2">
                                            <li>
                                                <a href="/" rel="tag" class="ct-term-2">agency</a>
                                                <a href="/" rel="tag" class="ct-term-3">news</a>
                                            </li>
                                        </ul>
                                        <h2 className="lineheight">
                                            <a href="/" rel="bookmark" className="proces">Firing on All Cylinders: Frontline Performance with VOC</a>
                                        </h2>
                                        <p>Accurate insights are vital to VOC program success. Learn how to keep the integrity of your frontline customer experience survey intact.</p>
                                    </div>
                                </article>
                            </div>
                            <div class="entries">
                                <article>
                                    <a href="/">
                                        <img width="768" height="276" src="https://expertdigitalweb.com/static/media/blog.d7fc1e246f39ce3c0d57.jpg" alt="How the Metaverse Future Can Fuel Your CX Present and AI" />
                                    </a>
                                    <div class="entry-meta">
                                        <ul className="mb-2">
                                            <li>
                                                <a href="/" rel="tag" class="ct-term-2">agency</a>
                                                <a href="/" rel="tag" class="ct-term-3">news</a>
                                            </li>
                                        </ul>
                                        <h2 className="lineheight">
                                            <a href="/" rel="bookmark" className="proces">How the Metaverse Future Can Fuel Your CX Present and AI</a>
                                        </h2>
                                        <p>Discover how immersive, web3, and generative AI technologies can help create experiences that deliver business value today world......</p>
                                    </div>
                                </article>
                            </div>
                            <div class="entries">
                                <article>
                                    <a href="/">
                                        <img width="768" height="276" src="https://expertdigitalweb.com/static/media/blog.d7fc1e246f39ce3c0d57.jpg" alt="Process Optimization with AI" />
                                    </a>
                                    <div class="entry-meta">
                                        <ul>
                                            <li>
                                                <a href="/" rel="tag" class="ct-term-2">agency</a>
                                                <a href="/" rel="tag" class="ct-term-3">news</a>
                                            </li>
                                        </ul>
                                        <h2>
                                            <a href="/" rel="bookmark" className="proces">Process Optimization with AI</a>
                                        </h2>
                                        <p>Find out how to impact your overall customer experience as well as performance and efficiency with AI powered process optimization technique</p>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ----------------------------------------------------------------------------------------------------------------------- */}


                <div class="container">
                    <footer class=" text-center text-white">
                        <div class="container p-3 pb-0">
                            <h3 style={{ color: 'black' }}>Follow Us</h3>
                            <section class="mb-4 mt-4">
                                <a class="btn text-white btn-floating m-1 bgiconset" href="#!" role="button" >
                                    {/* <i class="fa-brands fa-facebook-f fa"></i> */}
                                    <FacebookIcon className="fa" />

                                </a>
                                <a class="btn text-white btn-floating m-1 bgiconset" href="#!" role="button" >
                                    {/* <i class="fa fa-twitter"></i> */}
                                    <TwitterIcon />
                                </a>
                                <a class="btn text-white btn-floating m-1 bgiconset" href="#!" role="button" >
                                    {/* <i class="fa fa-google"></i> */}
                                    <GoogleIcon />
                                </a>
                                <a class="btn text-white btn-floating m-1 bgiconset" href="#!" role="button" >
                                    {/* <i class="fa fa-instagram"></i> */}
                                    <InstagramIcon />
                                </a>
                                <a class="btn text-white btn-floating m-1 bgiconset" href="#!" role="button" >
                                    {/* <i class="fa fa-linkedin"></i> */}
                                    <LinkedInIcon />
                                </a>
                                <a class="btn text-white btn-floating m-1 bgiconset" href="#!" role="button">
                                    {/* <i class="fa fa-github"></i> */}
                                    <GitHubIcon />
                                </a>
                            </section>
                        </div>
                    </footer>
                </div>

                {/* ------------------------------------------------------------------------------------------------------------------ */}


               
                    <div class="container-fluid">
                        <footer class="footerConatiner">
                            <div class="footer-top">
                                <div class="container">
                                    <div class="row mx-auto" style={{ marginleft: '15%', justifyContent: 'center',position: 'relative',left: '97px' }}>
                                        <div class="col-md-4 footer-contact">
                                            <h4>Industries</h4>
                                            <ul>
                                                <li>
                                                    <a href="/">Automotive</a>
                                                </li>
                                                <li>
                                                    <a href="/">Banking</a>
                                                </li>
                                                <li>
                                                    <a href="/">Capital Markets</a>
                                                </li>
                                                <li>
                                                    <a href="/">Communication,Media &amp; Technology</a>
                                                </li>
                                                <li>
                                                    <a href="/">Consumer Goods</a>
                                                </li>
                                                <li>
                                                    <a href="/">Education</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="col-md-3 footer-contact">
                                            <ul>
                                                <li style={{ marginTop: '20%' }}>
                                                    <a href="/">Healthcare</a>
                                                </li>
                                                <li>
                                                    <a href="/">Information Services</a>
                                                </li>
                                                <li>
                                                    <a href="/">Insurance</a>
                                                </li>
                                                <li>
                                                    <a href="/">Lifesciences</a>
                                                </li>
                                                <li>
                                                    <a href="/">Manufactuing</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="col-md-4 footer-contact">
                                            <ul>
                                                <li style={{ marginTop: '15%' }}>
                                                    <a href="/">Oil&amp;Gas</a>
                                                </li>
                                                <li>
                                                    <a href="/">Retail</a>
                                                </li>
                                                <li>
                                                    <a href="/">Transportation &amp; Logistics</a>
                                                </li>
                                                <li>
                                                    <a href="/">Travel &amp; Hospitality</a>
                                                </li>
                                                <li>
                                                    <a href="/">Utilities</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="col-md-4 footer-contact">
                                            <h4>Services</h4>
                                            <ul>
                                                <li>
                                                    <a href="/">Application Services &amp; Modernization</a>
                                                </li>
                                                <li>
                                                    <a href="/">Artifical Intelligence</a>
                                                </li>
                                                <li>
                                                    <a href="/">Business Process Services</a>
                                                </li>
                                                <li>
                                                    <a href="/">Cloud Solutions</a>
                                                </li>
                                                <li>
                                                    <a href="/">Core Modernization</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="col-md-3 footer-contact">
                                            <ul>
                                                <li style={{ marginTop: '20%' }}>
                                                    <a href="/">Digital Experience</a>
                                                </li>
                                                <li>
                                                    <a href="/">Digital Strategy</a>
                                                </li>
                                                <li>
                                                    <a href="/">Enterprise Application Services</a>
                                                </li>
                                                <li>
                                                    <a href="/">Infrastructure Services</a>
                                                </li>
                                                <li>
                                                    <a href="/">Intelligent Process Automation</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="col-md-4 footer-contact">
                                            <ul>
                                                <li style={{ marginTop: '15%' }}>
                                                    <a href="/">Internet of Things</a>
                                                </li>
                                                <li>
                                                    <a href="/">Quality Engineering &amp; Assurance</a>
                                                </li>
                                                <li>
                                                    <a href="/">Security</a>
                                                </li>
                                                <li>
                                                    <a href="/">Software Product Enginerring</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="col-md-4 footer-contact" style={{ marginTop: '2%', marginRight: '59%', position: 'relative' }}>
                                            <h4>What We Do</h4>
                                            <ul>
                                                <li>
                                                    <a href="/">About Us</a>
                                                </li>
                                                <li>
                                                    <a href="/">Blogs</a>
                                                </li>
                                                <li>
                                                    <a href="/">Terms &amp; Conditions</a>
                                                </li>
                                                <li>
                                                    <a href="/">Privacy Policy</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="copyright text-center border-top py-3">Copyright © 2023 - Expert Digital Web. <a>All Rights Reserved</a></div>
                        </footer>
                    </div>
              




            </div>
        </>
    )

}
export default Utilities;