import React, { useState } from "react";
import './../ServicePage/ServicePage.css';
import LockIcon from '@mui/icons-material/Lock';
import UpdateIcon from '@mui/icons-material/Update';
import BackupIcon from '@mui/icons-material/Backup';

const Supportmaintain = () => {

  return (

    <div className="mainserivices bg-white">
      <div className="fusion-page-title-bar">
        <div className="fusion-page-title-wrapper">
          <div className="fusion-page-title-captions">
            <h1 className="entry-title">
              WordPress Support & Maintenance
            </h1>
          </div>
        </div>
      </div>


      <div className="col-md-9 mx-auto mt-5">
        <div className="row align-items-center">

          <h1 className="subheading text-center mt-4 mb-5">We take care of your WordPress sites Support & Maintenance with our experts hands</h1>
          <div className="col-md-12">
            <p className="paaragraph"><blue style={{ color: '#0079A5', fontSize: '25px' }}>Y</blue>ou have to keep the WordPress Core, theme and plugins up to date, taking timely backups and monitoring the site for any irregular activities. That means, you will be spending a few hours every month dealing with the technical side of your site. The alternative is to hire a WordPress developer or better go with the Managed WordPress hosting. We take care of WordPress sites for backups, security and upgrades to shoot your all troubles.</p>
            <p className="paaragraph">We offer a <b>monthly plan</b> that will make you <b>save time and money</b> and make you never worry again about WordPress. We take care of everything for you, and by everything I mean that:</p>
            <ul className="paaragraph">
              <li>
                <b>We update</b> your theme, plugins and WordPress core.
              </li>
              <li>
                We do <b>daily full backups</b> in the cloud with full restore system.
              </li>
              <li>
                We <b>monitor your site 24/7</b> for downtime successes.
              </li>
              <li>
                We do a <b>malware scan</b> every week.
              </li>
              <li>
                We give you a <b>free ssl certificate</b> valid for 1 year.
              </li>
              <li>
                We deliver a monthly full report with all the above.
              </li>

            </ul>
            <p className="paaragraph">Depending on your support plan we also include site migrations and small jobs like configuring slider, do css changes, or any job that take less than 1 hour.</p>
          </div>
        </div>
      </div>

      {/* -------------------------------------------------------------------------------------------------------------------------- */}

      <div className="col-md-9 mx-auto ">
        <div className="row align-items-center">
          <div className="col-md-12 mb-2 text-center">
            <img className="mt-5" src="https://techspawn.com/wp-content/uploads/2014/11/techspawn-wordpress-support-maintenance.jpg"></img>
          </div>
          <div className="row mt-5 text-center">
            <div className="col-md-4">
              <div class="icon"><LockIcon sx={{ border: '4px solid black', borderWidth: '1px', background: '#1879a5', boxSizing: 'content-box', height: '42px', width: '42px', lineHeight: '42px', borderRadius: '50%', fontSize: '21px', color: '#fff' }} /></div>
              <h2 class="content-box-heading " style={{ fontSize: '18px', lineHeight: '23px' }}>Security</h2>
              <div class="content-container paaragraph"> Hackers are everywhere and they love causing trouble. Your WordPress site will be safe and secure from malware with 24/7 monitoring and cleanup.</div>
            </div>
            <div className="col-md-4">
              <div class="icon"><UpdateIcon sx={{ border: '4px solid black', borderWidth: '1px', background: '#1879a5', boxSizing: 'content-box', height: '42px', width: '42px', lineHeight: '42px', borderRadius: '50%', fontSize: '21px', color: '#fff' }} /></div>
              <h2 class="content-box-heading " style={{ fontSize: '18px', lineHeight: '23px' }}>Security</h2>
              <div class="content-container paaragraph">Never worry about updates again. A Maintainn team member will personally update everything for you on a weekly basis.</div>
            </div>
            <div className="col-md-4">
              <div class="icon"><BackupIcon sx={{ border: '4px solid black', borderWidth: '1px', background: '#1879a5', boxSizing: 'content-box', height: '42px', width: '42px', lineHeight: '42px', borderRadius: '50%', fontSize: '21px', color: '#fff' }} /></div>
              <h2 class="content-box-heading " style={{ fontSize: '18px', lineHeight: '23px' }}>Security</h2>
              <div class="content-container paaragraph">We perform scheduled backup to off-site cloud based storage on monthly, weekly or daily bases. No need to fear loosing your valuable work.</div>
            </div>
          </div>
        </div>
      </div>

      {/* -------------------------------------------------firstcontent----------------------------------------------------       */}


      <section className="wrapper" style={{ position: 'relative' }}>
        <div className="col-md-9 mx-auto">
          <div className="row">
            <h1 className="subheading text-uppercase">
              Affordable WordPress Support & Maintenance Services includes:
            </h1>
          </div>
          <div className="row mx-auto m-auto">

            <div className="col-md-6">
              <ul>
                <li className="paaragraph">
                  Security Audit and Recommendations
                </li>
                <li className="paaragraph">
                  Daily Full-site and Database Backups to Amazon S3
                </li>
                <li className="paaragraph">
                  Twice-weekly WordPress and Plugin Updates
                </li>
                <li className="paaragraph">
                  Uptime Monitoring
                </li>
                <li className="paaragraph">
                  Database Optimization
                </li>
                <li className="paaragraph">
                  Spam Comment Cleanup
                </li>
                <li className="paaragraph">
                  Discounted Add-on Hours
                </li>
                <li className="paaragraph">
                  24/7 Security Monitoring
                </li>

              </ul>

            </div>
            <div className="col-md-6">
              <ul>
                <li className="paaragraph">
                Direct Access to our  developers for consultation
                </li>
                <li className="paaragraph">
                Weekly Personal Site Check
                </li>
                <li className="paaragraph">
                Monthly Report
                </li>
                <li className="paaragraph">
                Plugin or Theme Installs
                </li>
                <li className="paaragraph">
                1 Hour Support Ticket

                </li>
                <li className="paaragraph">
                Clone or Migrate Site
                </li>
                <li className="paaragraph">
                Premium Plugin and Theme Updates
                </li>
                <li className="paaragraph">
                Site Performance Check and Recommendations
                </li>
               
              </ul>
            </div>
          </div>

        </div>
      </section>
      {/* -------------------------------------------------------------------------------------------------------------------------------------------- */}

      <div className="col-md-12 mx-auto m-auto p-3 " style={{ background: '#1facc1' }}>
        <div className="mt-2">
          <h2 style={{ textAlign: 'center', color: '#ffffff', fontWeight: 'bolder' }}>Hire our experts</h2>
        </div><br></br>
        <div className="text-center mt-5 mb-3">
          <a className="contactus">HIRE US NOW</a>
        </div>
      </div>

      {/* -------------------------------------------------------------------------------------------------------------------------------------------- */}




      <section className="bg-pink wrapper">
        <div className="col-md-9 mx-auto">
          <div className="row">
            <h1 className="heading mb-2">
              Searching for Expert to HIRE?
            </h1>

            <p className="subparagraphs">
              We have multiple and flexible hiring models to ensure that you can find and hire the right  in your budget.
            </p>
          </div>

          <div className="row my-5">
            <div className="col-md-4">
              <div className="searchCard">
                <div class="imageframe-align-center"><span class=" fusion-imageframe imageframe-none imageframe-14 hover-type-none"><img decoding="async" width="77" height="77" title="Hourly" src="https://techspawn.com/wp-content/uploads/2023/03/Hourly.png" data-orig-src="https://techspawn.com/wp-content/uploads/2023/03/Hourly.png" alt="" class="img-responsive wp-image-52096 ls-is-cached lazyloaded" /></span></div>
                <div class="fusion-title title fusion-title-30 fusion-sep-none fusion-title-center fusion-title-text fusion-title-size-two" style={{ color: '#001f33', marginTop: '10px', marginBottom: '10px', fontSize: '21px' }}><h2 class="fusion-title-heading title-heading-center" style={{ margin: 0, fontSize: '1em' }}>Hourly</h2></div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="searchCard">
                <div class="imageframe-align-center"><span class=" fusion-imageframe imageframe-none imageframe-14 hover-type-none"><img decoding="async" width="77" height="77" title="Hourly" src="https://techspawn.com/wp-content/uploads/2023/03/budget.png" data-orig-src="https://techspawn.com/wp-content/uploads/2023/03/Hourly.png" alt="" class="img-responsive wp-image-52096 ls-is-cached lazyloaded" /></span></div>
                <div class="fusion-title title fusion-title-30 fusion-sep-none fusion-title-center fusion-title-text fusion-title-size-two" style={{ color: '#001f33', marginTop: '10px', marginBottom: '10px', fontSize: '21px' }}><h2 class="fusion-title-heading title-heading-center" style={{ margin: 0, fontSize: '1em' }}>Fixed Budget</h2></div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="searchCard">
                <div class="imageframe-align-center"><span class=" fusion-imageframe imageframe-none imageframe-14 hover-type-none"><img decoding="async" width="77" height="77" title="Hourly" src="https://techspawn.com/wp-content/uploads/2023/03/Team.png" data-orig-src="https://techspawn.com/wp-content/uploads/2023/03/Hourly.png" alt="" class="img-responsive wp-image-52096 ls-is-cached lazyloaded" /></span></div>
                <div class="fusion-title title fusion-title-30 fusion-sep-none fusion-title-center fusion-title-text fusion-title-size-two" style={{ color: '#001f33', marginTop: '10px', marginBottom: '10px', fontSize: '21px' }}><h2 class="fusion-title-heading title-heading-center" style={{ margin: 0, fontSize: '1em' }}>Dedicated Team/Developer</h2></div>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            <button className="freequote">
              Hire
            </button>
          </div>
        </div>

      </section>


    </div >
  )

}
export default Supportmaintain;