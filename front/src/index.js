import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "./fonts/fonts.css";
import axios from 'axios';
import { CookiesProvider } from 'react-cookie';
axios.defaults.withCredentials = true;

//axios.defaults.baseURL = "https://43.202.90.230/users/log-in";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CookiesProvider>
    <div  className="index-body">
      <App />
    </div>
    </CookiesProvider>
  </React.StrictMode>
);


reportWebVitals();
