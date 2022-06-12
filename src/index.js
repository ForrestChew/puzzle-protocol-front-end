import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { MoralisProvider } from 'react-moralis';
import { ThemeProvider } from 'react-bootstrap';
import App from './App';

const moralisUrl = process.env.REACT_APP_MORALIS_URL;
const moralisAppId = process.env.REACT_APP_MORALIS_APP_ID;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MoralisProvider serverUrl={moralisUrl} appId={moralisAppId}>
    <ThemeProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </MoralisProvider>
);
