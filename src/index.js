import React, { StrictMode } from 'react';
// import ReactDOM from 'react-dom'; //구버전
import { createRoot } from 'react-dom/client';
import './styles/scss/reset.scss';
import './styles/scss/global.scss';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
