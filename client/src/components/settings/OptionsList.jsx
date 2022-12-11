import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 256px;
  padding-top: 24px;
  padding-bottom: 24px;
  border: 2px solid ${props => props.theme.components.card.dashboard.borderColor};
  border-radius: 12px;
  background-color: ${props => props.theme.components.card.dashboard.color};
`;

const Container = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

const OptionsList = ({children}) => {
  return (
    <Wrapper>
      <Container>
        {children}
      </Container>
    </Wrapper>
  )
}

export default OptionsList