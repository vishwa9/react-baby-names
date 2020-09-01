import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize-css';
import App from './App';
import NamesProvider from './provider/names';
import './css/styles.css';

ReactDOM.render(
  <React.StrictMode>
    <NamesProvider>
      <App />
    </NamesProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

