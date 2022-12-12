import React from 'react'
import styled from 'styled-components';
import { ButtonBig } from '../common/Buttons'
import FeaturesList from '../common/FeaturesList';

const Wrapper = styled.div`
  flex: 1;
  min-width: 330px;
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
  padding-top: 40px;
  padding-left: 24px;
  padding-right: 24px;
  padding-bottom: 24px;
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
  border-top: 2px solid ${props => props.theme.components.card.pricing.borderColor};
  border-radius: 0 0 12px 12px;
  background-color: ${props => props.theme.components.card.optPricing.lowerColor};
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