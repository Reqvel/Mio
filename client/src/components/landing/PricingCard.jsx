import React from 'react'
import styled from 'styled-components'
import { ButtonBig } from '../common/Buttons';
import FeaturesList from '../common/FeaturesList';

const Wrapper = styled.div`
  width: 512px;
  background-color: transparent;
  border: 2px solid ${props => props.theme.components.card.pricing.borderColor};
  border-radius: 12px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Upper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
  padding-top: 80px;
  padding-left: 24px;
  padding-right: 24px;
  padding-bottom: 40px;
  border-bottom: 2px solid ${props => props.theme.components.card.pricing.borderColor};
`

const Header = styled.span`
  font-size: 2.441rem;
  font-weight: 700;
  color: ${props => props.theme.textColor.primary};
  margin-bottom: 4px;
`

const Price = styled.span`
  font-size: 1.25rem;
  color: ${props => props.theme.textColor.subtile};
  margin-bottom: 24px;
`

const Timeframe = styled.span`
  font-size: 1rem;
  color: ${props => props.theme.textColor.subtile};
`

const Lower = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
  padding: 24px;
`

const PricingCard = ({header, price, buttonText, features=[]}) => {
  return (
    <Wrapper>
      <Container>
        <Upper>
          <Header>
            {header}
          </Header>
          <Price>
            ${price}&nbsp;
            <Timeframe>
                /month
            </Timeframe>
          </Price>
          <ButtonBig>
            {buttonText}
          </ButtonBig>
        </Upper>
        <Lower>
          <FeaturesList header={header} features={features}/>
        </Lower>
      </Container>
    </Wrapper>
  )
}

export default PricingCard