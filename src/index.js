import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { myProvider } from './context/context';

ReactDOM.render(
  <React.StrictMode>
    <myProvider>
    <App />
    </myProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


