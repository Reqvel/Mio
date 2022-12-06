import React from 'react'
import styled from 'styled-components'
import SideMenu from '../components/dashboard/SideMenu'
import Header from '../components/dashboard/Header'
import { Outlet } from 'react-router-dom'

const Container = styled.div`
  height: 100vh;
  display: flex;
  background-color: ${props => props.theme.backgroundColor.secondary};
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow-x: hidden;
`;

const Wrapper = styled.div`
  padding-bottom: 32px;
`

const Dashboard = () => {
  return (
    <Container>
      <SideMenu/>
      <Content>
        <Header header='Home' details='Take a look at the latest updates in your socials!'/>
        <Wrapper>
          <Outlet/>
        </Wrapper>
      </Content>
    </Container>
  )
}

export default Dashboard;