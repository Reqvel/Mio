import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding-left: ${props => props.theme.mainTheme.sidePaddingDashboard};
  padding-right: ${props => props.theme.mainTheme.sidePaddingDashboard};
`;

const Home = () => {
  return (
    <Container>
        Hello
    </Container>
  )
}

export default Home