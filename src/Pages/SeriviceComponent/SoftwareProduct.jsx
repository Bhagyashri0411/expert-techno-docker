import React, { useState } from "react";
import './../IndustriesComponent/IndustriesComponent.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';


const SoftwareProduct = () => {


    return (
        <>
            <div className="industries">
                <div style={{ marginTop: '2rem' }}></div>
                <div className="container-fluid" style={{ marginBottom: '130px' }}>
                    <div className="e-conn-full software" >
                        <div className="container">
                            <div className="listul">
                                <ul className="d-flex">
                                    <li>Home  </li>
                                    <li>Services</li>
                                </ul>

                                <div className="col-md-12 d-md-flex justify-content-between align-items-end">
                                    <h1>Engineering Software That Delivers Outcomes</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ----------------------------------------------------------------------------------------------------------- */}

                <div class="container" style={{ marginBottom: '130px' }}>
                    <div class="align-items-center row">
                        <div class="col-md-12">
                            <h2 style={{ fontWeight: 'bold', fontSize: '3em' }}>Jump the s-curve</h2>
                            <br />
                            <div style={{ fontSize: '1.4em' }}>
                                <p className="black">Software engineering is at the frontier of digital business. When business outcomes become the common language of design and engineering teams, organizations get ahead and stay ahead.</p>
                                <br />
                                <p className="black">Software engineering is more than software development. It goes beyond features and backlogs and emphasizes a broader look at exceptional user experiences and outcomes.</p>
                                <br />
                                <p className="black">At Expert Digital Web, we bring together top digital engineering, design and product development talent to build software that powers and engineers modern business.</p>
                                <br />
                              
                            </div>
                        </div>
                    </div>
                </div>

                {/* ------------------------------------------------------------------------------------------------------------------ */}

              
                <div class="border-top border-bottom p-5 container" style={{ marginBottom: '130px' }}>
                    <div class="e-con-inner justify-content-evenly">
                        <div class="elementor-widget-container">
                            <span>80</span>
                            <span>+</span>
                            <h5>Trusted Companies</h5>
                        </div>
                        <div class="elementor-widget-container" style={{ width: '20%' }}>
                            <img decoding="async" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAABCFBMVEX///8AAAAvtnw2xfHssi3gHlpJSUn09PRMTEw0NDQ4ODigoKC0tLQYsnTsryCLi4vY8vgewvHcAEn79eW24c7H6Njw0pDqrQ/99fffD1TmeJSq4fXS0tLw8PDq6up1dXXrtDn14LSC1fNTyu/d3d0oKChXV1drxp7Ly8un28PmjaVhYWG9vb1/f3+tra0cHByZmZlcXFxpaWk2NjYPDw8hISG/6faX3fTy+/c1uYNx0+7T7uLi8utXwZJezvHn9/vP7/aZ1rp+yqVGu4qDzqvzz9rqo7fxvszpmK7y1p335sTfMWTgRW/txW/hU3rtr8D68NvjaYjvzILrvEr35OjuwWD4687wx3XWiGHdAAAJnklEQVR4nO2cfV/TSBCAUygU6JsteKXaF7UvFktLwQLl5KjeKXrqcb77/b/JtWmTzMzO7Kb8yp148/znNptsnmw2s7OLnqcoiqIoiqIoiqIoiqIoiqIoiqIoiqIoiqIoiqIoiqIoiqIoiqIoiqIo/zNOHjVWG6djWDTa++3s7PHef9WiH5Zxo7A6oVA4jcp2stmVCdmVnRu4YKqXj+jcwAV40uCq6Wue486q72qq69egbM9X5eu6AVupBOC6zV6cdXDV9WueYzWicH9W9Cx0NbF1vrTWBvwAsjaud4r7BWhr5Jf9tgJ4vMT2zri9shqrUNbJtOg8C2VlR8ts8ZTbK6uAZPlj/F0s69kyWzzl1soaIVmrj6ZlO1jW3aU22bvFsjyVtQAXKis+JwWVFZ9GQWXFZqw9awHGF4VwwqOynDw/vWjM8OMslbUAKmsBVNYCqKwFUFkR4zscIKksyzp/dh43B5GqNiuVZjXF/RRHVmpSvcbVdl5UqrW4rNHpaoGncT84RpL14iybza787s4GpvbrW0GzDjby+1Xys0tWLd2e/7rVm6ed9zMR+66Ltrr9mnmALCvVz0CCylEO2aTQGNtknZ/NirOuTHOtnqCs9+HTdsjqbKC6B/4RW6CkxVy0ckQvmYkv6xBXPZqVjmVVPiNZ1giUWG31DFU++ZiyahtG1WEF3+mWcc2mWWlSjegSZeVxveC3hkPWr7IsmGq2JE+bvKop/TiyMmzVtF2W8HwS6+hllGT1caWg3z53uFotjCVZcA1jJftCclWRXYXd2yZLuu1MG/yDyKq15EvC4U2QRZscDLCnDlfz5R1O1gtU9ofgytKvEtGbKMsyR7sAKGRrgWsOXLJqpEIz+OHCKUucSD9eQWWCrANrw4OXQpSVl2pikCxrX0a2eFmkW0Zd8aZl2W+2HRwmydqP5wrJoh3DJBwqWVltfDBozSOnLD/r8AzLOjdlnbGuqqSZQ/zP8KEJsmj1WLIs41VAxSKLjJE9cOYT5wB/xz8OyVrxDFnZl6ysNLjswTSyS9Wa/Xr4aobHCbJItBNLljzIRRzLssiHsO1BXD2rMTvsJVy+f8HI4oN4EOzAh1+ZPb4o0OJldeK6Aid3DVgzepIscsmn+HYcXWvesbzRmfHGQVlS5ACuW0E/pAYJ8JkRZBlxZT3TqXT6TN+JZG2SXw7TkyoZUmWjKcii4x2ZleGdDYark+Cw85V538qejQxZ2d95V1XLdb38JnDHyaIRQPR6GnFqKIv0jF44pwKvVyvc00Rlpci3O3qaAXcawjy6ULgAiYfRy6xPODg9zgacSZMdeLvWxAsrCw+168g26SqhLNwZYW9OBT/1ozIqi3RldqPY+OQ+x8kYHza6u7d3N5rW7OzN2JF3PqBePRAPE2Shx0wzKANWFrrgkOQZukYriCzyBPrevwu6+HBgdus5nCz8FhpVUAQXyELfMuNqrUQdDwZYFvx0J9A8/9+BxjzHwh5ITha6caYaN92BsYZ5s02qD8pqk+/o4fXv+ppws+D1tNnBOFnwpeD2MMIBJpAF39wYzYOyWjhgNpM+N44wpW0NyHDCyYLTDiNt57H5LDhk1WM0D54CcyCmr19dPpkTFu2+fvPk8hU+bPvhLxx/vrU0R4zBD1Hcxck6BkVMSpiTBZ8N59d2Cgx3wSmv3xXLAUHZm/K0rPge6Nr+q1TKsZSSf4rNsczuDsFgy8mCRa47ncuCUVaFqxNXllT5TXEtYl52NS8rF/8ODvuQyyVFSn+J7bHllqJR2yGLS7FzsmCSQuobsWQJn+3X0NVc1sdyWFCc961t2ZRv65PYoNqx1CLwqjhkHXMndsgSw5Q4snjVu2trhqxXwF/53ey4T5Z+5dv6IDdpIDYp7O6cLPh14oZbx2sY5+80Fhzg/y6askDHCrrWqGR3lczJXWs6a5Z619AiCy51cWOI42tomzBwpyAhIRes3CubslBR2f9CfnPJSibtzarktxIcfVkWXPbjomlGFjwNO85ZTtEmc/Aj8/ArU9Yu6mzle9Oyh05ZJXfTOgOSsZ2wKctCby/zVnBB6VNQFuM9xNMdkgLvGYd/jCfr7TJkTWmmycw+JcpCT9oMMdGcOZAF73fTqJJvk3GbTKTJszQm0k+grPKVJOuDU9bneLI8upZfEWWhsoSxmwG91oEsJJh2jemPedRFaYqGDK20b8Iv31r5UpLlPXC4yslxqQmcMe6LssiDxraqT9GP4UwOleKRroPPzsmiQSENP+CgNQvgWVmuQSsnLd+vM/EObJNFFsmHwlunqdJQFh532qAfhb8MI+1GWpkuvZH07u5aaGsegLKyvO9WWyVpfjh5nHUjoQyTIfJrSLrJhPn0u5Y2Vm5DWSnyQ685r4KOlpfCSExIP6lfJlND30p5HqzzsrxPJTEuzeXEubT/KtVJ74JjfM0iy4xmh+0utzsGJFTMVd31btuQK67uzNKpRmnE5ftisfjuya5nleV9+5orsTz4ZVtyFbxwm/lO2L8qKG72LLKMriUCsk9D99Hh0M0tspLg1PwM737ZBf8QZE3i+G0WyZSHh/LWRm8wyB/hL07eKivu6j2UFWexMfhOcrLoaph9JiDLWhg6gpjUrLJiL0nDvKZlKkqPZvc6UNvWxNgSZZElAJPgEYu7aCwpC/b2p7gW8KNJMr+LhrbalhlboizXPYbNFmW5t8SYsjy6mRQzjL7OwmY2atuSGlueLOcmmPArKW9mE5OHbW5uOEfaLegfCmIvaZskmfQP5f3k7EQ6+WDG14cL6bJvz3LtdfCp8luIjtmJdAC/D3UKmgNJsuhYKy/1WLMOuZIcU3FU5QFkHTwv625lrp9sOHYrV/lPwzGe7om7lelenO5CskBAWlqsc6XSdGPLrNnoI2PfB29u0+6TOzUzDF7FjF6PaR5B/u9VyDYtcXnaJStZskVWHM30IYmhuySJkDrYDGkxewwqaMV1dsBhVGWT/VuSZh4+pmHdTHDBU5DO02ttQugO+gCnrJy8liNT7WTy9aNut3uU78dZpTKo9HuT6vUB/UsWK7X9Qd2/ZibO+sU1cMpKlpb+36vcWmLI+vZft/GHIYashT6IPzfM6g7OwWvPikArPsXX06JtLEvHrBC08FqclX0F7+G1voY/Le/BXofLWRFc3lk4zvqp+RLm5YvhNDpasdDhHfPlar5l601U9jY5TcLnSg90dKe8unf1/uPlLip7+P3z5+/arRRFURRFURRFURRFURRFURRFURRFURRFURRFURRFURRFURRFURRFURTlJ+MfpSPsri2nSlsAAAAASUVORK5CYII=" alt="Not found this image" />
                        </div>
                        <div class="elementor-widget-container" style={{ width: '20%' }}>
                            <img decoding="async" src="https://expertdigitalweb.com/static/media/dropbox.ecc6ad26b0f10ef86fdd.jpg" alt="Not found this image" />
                        </div>
                        <div class="elementor-widget-container" style={{ width: '20%' }}>
                            <img decoding="async" src="https://expertdigitalweb.com/static/media/shopify.858d0e88127e5a8c7085.png" alt="Not found this image" />
                        </div>
                        <div class="elementor-widget-container" style={{ width: '20%' }}>
                            <img decoding="async" src="data:image/png;base64,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" alt="Not found this image" />
                        </div>
                    </div>
                </div>

                {/* --------------------------------------------------------------------------------------------------------------------- */}


                <div className="container" style={{ marginBottom: '130px' }}>
                    <div className="e-con-fullwhite">
                        <div className="col-md-7 mx-auto"><div>
                            <h4>Newsletter Updates</h4>
                            <p>Enter your email address below to subscribe to our tasty newsletter</p>
                        </div>
                            <div className="d-flex align-items-center gap-4">
                                <input type="text" className="news" placeholder="Your email address" />
                                <a href="/" className="elementor-buttons" role="button"><span> Subscribe</span></a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* -------------------------------------------------------------------------------------------------------------------------- */}



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
                    <footer class="footerConatiner ">
                        <div class="footer-top ">
                            <div class="container">
                                <div class="row mx-auto" style={{ marginleft: '15%', justifyContent: 'center', position: 'relative', left: '97px' }}>
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
export default SoftwareProduct;