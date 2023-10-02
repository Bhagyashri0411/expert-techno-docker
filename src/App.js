
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Header from './MainComponents/Header';
import Homepage from './Pages/Homepage/Homepage';
import Wordplug from './Pages/SeriviceComponent/WordPressPluginDevelopment';
import Themecustom from './Pages/SeriviceComponent/Themecustomization';
import Supportmaintain from './Pages/SeriviceComponent/supportMaintaines';
import psdhtohtml from './Pages/SeriviceComponent/Psdtohtml';
import DesignBranding from './Pages/SeriviceComponent/Design';
import Corporate from './Pages/SeriviceComponent/Corporateidentity';
import Woocomm from './Pages/SeriviceComponent/Woocommerce';
import Shopify from './Pages/SeriviceComponent/Shopifydevelopment';
import Magento from './Pages/SeriviceComponent/Magentodevelopement';
import Volusion from './Pages/SeriviceComponent/Volusiondevelopement';
import Androids from './Pages/SeriviceComponent/Androidapp';
import IOSAPP from './Pages/SeriviceComponent/IOSApp';
import Ionic from './Pages/SeriviceComponent/Ionicapp';
import Flutter from './Pages/SeriviceComponent/Flutter';
import Digital from './Pages/SeriviceComponent/Digitalmarketing';
import Seoservice from './Pages/SeriviceComponent/Seoservice';
import Offshore from './Pages/SeriviceComponent/Offshoresoftware';
import Quality from './Pages/SeriviceComponent/Quality';
import DevOpes from './Pages/SeriviceComponent/DevOpsservice';
import comm from './Pages/ProductComponent/Woocommerce';
import Nodejs from './Pages/SeriviceComponent/Node';
import Pythondev from './Pages/SeriviceComponent/Pythondev';
import Webdesigning from './Pages/SeriviceComponent/Webdesigning';
import Angulardev from './Pages/SeriviceComponent/Angulardev';
import Phpdev from './Pages/SeriviceComponent/PHPdev';
import Wordpress from './Pages/SeriviceComponent/Wordpress';
import Shippingpro from './Pages/ProductComponent/Woocommerceshipping';
import Canadapost from './Pages/ProductComponent/Canadapost';
import EasyPostshipping from './Pages/ProductComponent/Easypostshipping';
import Quickbookintegration from './Pages/ProductComponent/Quickbook';
import Getway from './Pages/ProductComponent/Getwaywoocom';
import Proforups from './Pages/ProductComponent/ProforUPS';
import Proforusps from './Pages/ProductComponent/Proforusps';
import About from './Pages/AboutComponent/About';

function App() {



  return (
    <>
      <Router>

        <Header />
        <Switch>
          <div style={{paddingTop:'4em'}}>

            <Route exact path="/" component={Homepage} />
            {/* <Route path="/servicepage/:serviceName" component={ServicePage} /> */}
            <Route path="/pythondev" component={Pythondev}></Route>
            <Route path="/nodejs" component={Nodejs}></Route>
            <Route path="/webdesigning" component={Webdesigning}></Route>
            <Route path="/angulardev" component={Angulardev}></Route>
            <Route path="/phpdev" component={Phpdev}></Route>
            <Route path="/wordpress" component={Wordpress}></Route>
            <Route path="/wordpressplugin" component={Wordplug}/>
            <Route path="/themecustomization" component={Themecustom}></Route>
            <Route path="/supportmaintain" component={Supportmaintain}></Route>
            <Route path="/psdtohtml" component={psdhtohtml}></Route>
            <Route path="/design" component={DesignBranding}></Route>
            <Route path="/corporate" component={Corporate}></Route>
            <Route path="/woocomm" component={Woocomm}></Route>
            <Route path="/shopify" component={Shopify}></Route>
            <Route path="/magento" component={Magento}></Route>
            <Route path="/volusion" component={Volusion}></Route>
            <Route path="/androids" component={Androids}></Route>
            <Route path="/iosapp" component={IOSAPP}></Route>
            <Route path="/ionic" component={Ionic}></Route>
            <Route path="/flutter" component={Flutter}></Route>
            <Route path="/digital" component={Digital}></Route>
            <Route path="/seoservice" component={Seoservice}></Route>
            <Route path="/offshore" component={Offshore}></Route>
            <Route path="/quality" component={Quality}></Route>
            <Route path="/devopes" component={DevOpes}></Route>

            <Route path="/comm" component={comm}></Route>
            <Route path="/shippingpro" component={Shippingpro}></Route>
            <Route path="/canadapost" component={Canadapost}></Route>
            <Route path="/easypostshipping" component={EasyPostshipping}></Route>
            <Route path="/quickbookintegration" component={Quickbookintegration}></Route>
            <Route path="/getway" component={Getway}></Route>
            <Route path="/proforups" component={Proforups}></Route>
            <Route path="/proforusps" component={Proforusps}></Route>
            <Route path="/about" component={About}></Route>

          </div>

        </Switch>

      </Router>


    </>

  );
}

export default App;
