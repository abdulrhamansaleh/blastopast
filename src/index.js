import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import reportWebVitals from './reportWebVitals';
import Header from './components/Header';
import SelectionSegment from './components/SelectionSegment';
import Main from './components/Main';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Main/>
  </React.StrictMode>
);
reportWebVitals();
