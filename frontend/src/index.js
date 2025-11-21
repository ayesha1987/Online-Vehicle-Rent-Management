import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import store from './store/index'
window.store=store
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store} >
    <BrowserRouter>
    {/* <React.StrictMode> */}
      <App />
      <Toaster/>
      {/* </React.StrictMode> */}
    </BrowserRouter>
      </Provider>
);

