import React from 'react'
import SideMenu from '../components/dashboard/SideMenu'
import styled from 'styled-components'

const Container = styled.div`
    height: 100vh;
    display: flex;
    background-color: ${props => props.theme.bgSecondary};
`

const Home = () => {
  return (
    <Container>
        <SideMenu/>
    </Container>
  )
}

export default Home