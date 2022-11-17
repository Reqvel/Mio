import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import mainTheme from './themes/mainTheme';
import AppRoutes from './routes/AppRoutes';

const App = () => {
  return (
    <>
      <GlobalStyle/>
      <BrowserRouter>
        <ThemeProvider theme={mainTheme}>
          <AppRoutes/>
        </ThemeProvider>
      </BrowserRouter>
    </>
  )
};

export default App;