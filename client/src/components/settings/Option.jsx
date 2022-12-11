import React from 'react'
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const Wrapper = styled.div`
  width: 900px;
  padding: 24px 48px;
  border: 2px solid ${props => props.theme.components.card.dashboard.borderColor};
  border-radius: 12px;
  background-color: ${props => props.theme.components.card.dashboard.color};
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const Header = styled.span`
  font-size: 1.953rem;
  font-weight: 600;
  color: ${props => props.theme.textColor.primary};
  margin-bottom: 4px;
`

const Details = styled.span`
  color: ${props => props.theme.textColor.subtile};
  margin-bottom: 36px;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

const Option = () => {
  const { header, details } = useSelector(state => state.settings)

  return (
    <Wrapper>
      <Container>
        <Header>
          {header}
        </Header>
        <Details>
          {details}
        </Details>
        <Content>
          <Outlet/>
        </Content>
      </Container>
    </Wrapper>
  )
}

export default Option