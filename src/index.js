import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import EventDescription from './components/Event';
import reportWebVitals from './reportWebVitals';
import Header from './components/Header';
import SearchImage from './components/SearchImage';
import InputForm from './components/InputForm';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/> 
    <div><SearchImage/></div>
  </React.StrictMode>
);
reportWebVitals();
