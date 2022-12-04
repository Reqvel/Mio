import React from 'react'
import styled from 'styled-components';
import StatCard from './dashboard/StatCard';
import ScrollContainer from 'react-indiana-drag-scroll';

const Container = styled.div`
  max-width: ${props => props.theme.mainTheme.maxWidthDashboard};
  margin-left: auto;
  margin-right: auto;
  padding-left: ${props => props.theme.mainTheme.sidePaddingDashboard};
  padding-right: ${props => props.theme.mainTheme.sidePaddingDashboard};
`;

const StatCards = styled.ul`
  display: flex;
  gap: 24px;
  padding: 0;
  list-style: none;
`

const Home = () => {
  return (
    <Container>
      <ScrollContainer>
        <StatCards>
          <StatCard/>
          <StatCard/>
          <StatCard/>
          <StatCard/>
          <StatCard/>
          <StatCard/>
        </StatCards>
      </ScrollContainer>
    </Container>
  )
}

export default Home