import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { MoralisProvider } from 'react-moralis';
import { ThemeProvider } from 'react-bootstrap';
import UserContextProvider from './components/UserContextProvider';
import App from './App';

const moralisUrl = process.env.REACT_APP_MORALIS_URL;
const moralisAppId = process.env.REACT_APP_MORALIS_APP_ID;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MoralisProvider serverUrl={moralisUrl} appId={moralisAppId}>
    <ThemeProvider>
      <UserContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </UserContextProvider>
    </ThemeProvider>
  </MoralisProvider>
);
