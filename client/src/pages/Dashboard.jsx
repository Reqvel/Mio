import React from 'react'
import styled from 'styled-components'
import SideMenu from '../components/dashboard/SideMenu'
import Header from '../components/dashboard/Header'
import { Outlet } from 'react-router-dom'

const Container = styled.div`
    height: 100vh;
    display: flex;
    background-color: ${props => props.theme.bgSecondary};
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Main = () => {
  return (
    <Container>
        <SideMenu/>
        <Content>
          <Header header='Home' details='Take a look at the latest updates in your socials!'/>
          <Outlet/>
        </Content>
    </Container>
  )
}

export default Main