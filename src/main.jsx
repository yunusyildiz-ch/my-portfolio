import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/index.css';
import './css/sidebar.css';
import './css/footer.css';
import './css/content.css';
import './css/home.css';
import './css/about.css';
import './css/contact.css';
import './css/projects.css';
import App from './App';
import "./i18n"; // Import i18n configuration

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);