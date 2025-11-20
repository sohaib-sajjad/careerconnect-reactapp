import React from 'react';
import ReactDOM from 'react-dom/client'; // Import createRoot from react-dom/client
import App from './App';
import { BrowserRouter } from 'react-router-dom'; // Wrap in BrowserRouter

const root = ReactDOM.createRoot(document.getElementById('root')); // Create the root using createRoot
root.render(
  <BrowserRouter> {/* Wrap the app with BrowserRouter */}
    <App />
  </BrowserRouter>
);
