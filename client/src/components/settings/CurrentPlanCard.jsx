import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 512px;
`;

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Upper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
  padding: 40px 24px;
  /* border: 2px solid ${props => props.theme.components.card.pricing.borderColor}; */
  border-radius: 12px 12px 0 0;
  background-color: ${props => props.theme.components.card.optPricing.upperColor};
`

const Header = styled.span`
  font-size: 1.953rem;
  font-weight: 700;
  color: ${props => props.theme.textColor.primary};
  margin-bottom: 4px;
`

const Price = styled.span`
  font-size: 1.25rem;
  color: ${props => props.theme.textColor.subtile};
  margin-bottom: 16px;
`

const Timeframe = styled.span`
  font-size: 1rem;
  color: ${props => props.theme.textColor.subtile};
`

const Lower = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
  padding: 24px;
  border: 2px solid ${props => props.theme.components.card.pricing.borderColor};
  border-radius: 0 0 12px 12px;
`

const CurrentPlanCard = ({header="Free", price=0, }) => {
  return (
    <Wrapper>
      <Container>
        <Upper>
          <Header>
            {header}
          </Header>
        </Upper>
        <Lower>
          <Price>
            ${price}&nbsp;
            <Timeframe>
              /month
            </Timeframe>
          </Price>
        </Lower>
      </Container>
    </Wrapper>
  )
}

export default CurrentPlanCard