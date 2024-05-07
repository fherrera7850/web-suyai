import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import $ from 'jquery';

import 'bootstrap/dist/css/bootstrap.min.css'; 
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'owl.carousel/dist/assets/owl.carousel.css'; 
import 'jquery-nice-select/css/nice-select.css'; 
import './css/style.css'; 
import './css/responsive.css';

window.jQuery = $;
window.$ = $;

require('owl.carousel');
require('jquery-nice-select');


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
