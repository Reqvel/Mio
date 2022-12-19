import React, { useEffect } from 'react'
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { setHeader } from '../redux/features/dashboardSlice';
import { setSelectedPage } from '../redux/features/dashboardSlice';
import pagesPaths from '../routes/PagesPaths';
import { ReactComponent as LightIllustration } from '../svgs/light/illustrations/Home.svg';
import { ReactComponent as DarkIllustration } from '../svgs/dark/illustrations/Home.svg';

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: ${props => props.theme.maxWidth.dashboard};
  margin-left: auto;
  margin-right: auto;
  padding-left: ${props => props.theme.padding.dashboard};
  padding-right: ${props => props.theme.padding.dashboard};
`;

const IllustrationContainer = styled.div`
  margin-bottom: 64px;
`

const Header = styled.div`
  font-size: 2.441rem;
  font-weight: 700;
  color: ${props => props.theme.textColor.primary};
  margin-bottom: 16px;
`

const Details = styled.div`
  max-width: 664px;
  text-align: center;
  color: ${props => props.theme.textColor.subtile};
`

const Home = () => {
  const { isThemeDark } = useSelector(state => state.app)
  const dispatch = useDispatch()
  const header = 'Home'
  const details = 'Take a look at the latest updates in your socials!'

  useEffect(() => {
    dispatch(setHeader({header, details}))
    dispatch(setSelectedPage(pagesPaths.home))
  }, [])

  return (
    <Container>
      <IllustrationContainer>
        {
          isThemeDark
            ? <DarkIllustration/>
            : <LightIllustration/>
        }
      </IllustrationContainer>
      <Header>
        Welcome Back!
      </Header>
      <Details>
        Get familiar with the dashboard! Check out kanban, calendar and connect your social media accounts. Oh, and don't forget to check app's settings!
      </Details>
    </Container>
  )
}

export default Home