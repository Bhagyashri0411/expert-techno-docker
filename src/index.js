import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Index from './Index.css';
import { BrowserRouter } from 'react-router-dom';
// import "aos/dist/aos.css";
// import "remixicon/fonts/remixicon.css";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
