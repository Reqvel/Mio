import React from 'react'
import styled from 'styled-components';
import TopCard from './dashboard/TopCard';
import ScrollContainer from 'react-indiana-drag-scroll';

const Container = styled.div`
  max-width: ${props => props.theme.maxWidth.dashboard};
  margin-left: auto;
  margin-right: auto;
  padding-left: ${props => props.theme.padding.dashboard};
  padding-right: ${props => props.theme.padding.dashboard};
`;

const SummaryCards = styled.ul`
  display: flex;
  gap: ${props => props.theme.gap.cards.top};
  padding: 0;
  list-style: none;
`

const Home = () => {
  return (
    <Container>
      <ScrollContainer>
        <SummaryCards>
          <TopCard/>
          <TopCard/>
          <TopCard/>
          <TopCard/>
          <TopCard/>
          <TopCard/>
        </SummaryCards>
      </ScrollContainer>
    </Container>
  )
}

export default Home