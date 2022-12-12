import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import lightTheme from './themes/LightTheme';
import darkTheme from './themes/DarkTheme';
import AppRoutes from './routes/AppRoutes';
import { useSelector, useDispatch } from 'react-redux';
import { isThemeDarkKey } from './redux/features/appSlice';
import { setIsThemeDark } from './redux/features/appSlice';

const App = () => {
  const [theme, setTheme] = useState(darkTheme)
  const { isThemeDark } = useSelector(state => state.app)
  const dispatch = useDispatch()

  useEffect(() => {
    if (isThemeDarkKey in localStorage) {
      const val = (localStorage.getItem(isThemeDarkKey) === 'true')
      dispatch(setIsThemeDark(val))
    }
  }, [])

  useEffect(() => {
    if (isThemeDark) {
      setTheme(darkTheme)
    } else {
      setTheme(lightTheme)
    }
  }, [isThemeDark])

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle/>
        <BrowserRouter>
          <AppRoutes/>
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
};

export default App;