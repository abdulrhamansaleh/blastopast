import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import EventDescription from './components/Event';
import reportWebVitals from './reportWebVitals';
import Header from './components/Header';
import SelectionSegment from './components/SelectionSegment';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/> 
    <div><SelectionSegment/></div>
  </React.StrictMode>
);
reportWebVitals();
