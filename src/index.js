import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Importa jQuery y asigna a global
import $ from 'jquery';

import 'bootstrap/dist/css/bootstrap.min.css'; // Importa CSS de Bootstrap
import '@fortawesome/fontawesome-free/css/all.min.css'; // Importa Font Awesome
import 'owl.carousel/dist/assets/owl.carousel.css'; // Importa estilos de Owl Carousel
import 'jquery-nice-select/css/nice-select.css'; // Importa estilos de Nice Select
import './css/style.css'; // Asegúrate de que la ruta es correcta
import './css/responsive.css'; // Asegúrate de que la ruta es correcta

window.jQuery = $;
window.$ = $;

// Requiere los plugins de jQuery
require('owl.carousel');
require('jquery-nice-select');


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
