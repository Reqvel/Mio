import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import lightTheme from './themes/lightTheme';
import AppRoutes from './routes/AppRoutes';

const App = () => {
  return (
    <>
      <GlobalStyle/>
      <BrowserRouter>
        <ThemeProvider theme={lightTheme}>
          <AppRoutes/>
        </ThemeProvider>
      </BrowserRouter>
    </>
  )
};

export default App;