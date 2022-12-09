import React from 'react'
import styled from 'styled-components'
import SideMenu from '../components/dashboard/SideMenu'
import Header from '../components/dashboard/Header'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import useAppearAnimation from '../hooks/useAppearAnimation'

const Container = styled.div`
  height: 100vh;
  display: flex;
  background-color: ${props => props.theme.backgroundColor.secondary};
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow-x: hidden;
`;

const Wrapper = styled.div`
  flex: 1;
  padding-bottom: 32px;
`

const Dashboard = () => {
  const containerRef = useAppearAnimation(0.3)
  const { header, details } = useSelector(state => state.dashboard)
  const wrapperRef = useAppearAnimation(0.4, [header, details])

  return (
    <Container ref={containerRef}>
      <SideMenu/>
      <Content>
        <Header/>
        <Wrapper ref={wrapperRef}>
          <Outlet/>
        </Wrapper>
      </Content>
    </Container>
  )
}

export default Dashboard;