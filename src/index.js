import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';

import App from './App';
import theme from './configs/theme';

ReactDOM.render(
  <React.StrictMode>
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </React.StrictMode>
  </React.StrictMode>,
  document.getElementById('root')
);
