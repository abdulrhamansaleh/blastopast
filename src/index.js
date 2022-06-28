import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import EventDescription from './components/Event';
import reportWebVitals from './reportWebVitals';
import Header from './components/Header';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/> 
    <EventDescription/>
  </React.StrictMode>
);
reportWebVitals();
