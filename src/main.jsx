import React from 'react';
import ReactDOM from 'react-dom/client';
import { IconContext } from 'react-icons';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Semua ikon dekoratif → disembunyikan dari screen reader */}
    <IconContext.Provider value={{ attr: { 'aria-hidden': 'true' } }}>
      <App />
    </IconContext.Provider>
  </React.StrictMode>
);
