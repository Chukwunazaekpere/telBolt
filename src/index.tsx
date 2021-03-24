import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter as Router } from "react-router-dom";
import AppStateContext from './context/AppContext';

ReactDOM.render(
  <React.StrictMode>
    <AppStateContext>
      <Router>
        <App />
      </Router>
    </AppStateContext>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
