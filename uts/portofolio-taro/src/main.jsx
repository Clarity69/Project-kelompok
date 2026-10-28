import React from 'react';
import ReactDOM from 'react-dom/client';
// CSS global dimuat lebih dulu, supaya CSS module tiap section bisa menimpanya
import './index.css';
import App from './App.jsx';
import ThemeProvider from './context/ThemeProvider.jsx';

// ThemeProvider membungkus App → semua komponen bisa memakai useTheme()
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
