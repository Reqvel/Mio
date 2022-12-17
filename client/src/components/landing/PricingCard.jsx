import React from 'react'
import styled from 'styled-components'
import { LinkButtonBig } from '../common/Links' 
import FeaturesList from '../common/FeaturesList';
import { getCurrencySymbol } from '../../utils/GetCurrencySymbol';
import pagesPaths from '../../routes/PagesPaths'

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
  padding-top: 80px;
  padding-left: 24px;
  padding-right: 24px;
  padding-bottom: 40px;
  border: 2px solid ${props => props.theme.components.card.pricing.borderColor};
  border-radius: 12px 12px 0 0;
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
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
  padding: 24px;
  border: 2px solid ${props => props.theme.components.card.pricing.borderColor};
  border-top: none;
  border-radius: 0 0 12px 12px;
`

const PricingCard = ({header, price, features}) => {
  const currencySymbol = getCurrencySymbol(price.currency)
  const pricePerUnit = Number(price.per_unit) / 100;
  const buttonText = pricePerUnit ? 'Buy Now' : 'Try It Free'
  const linkTo = `${pagesPaths.dashboard}/${pagesPaths.settings.main}/${pagesPaths.settings.subscription}`

  return (
    <Wrapper>
      <Container>
        <Upper>
          <Header>
            {header}
          </Header>
          <Price>
            {currencySymbol}{pricePerUnit}&nbsp;
            <Timeframe>
              /{price.period}
            </Timeframe>
          </Price>
          <LinkButtonBig to={linkTo}>
            {buttonText}
          </LinkButtonBig>
        </Upper>
        <Lower>
          <FeaturesList header={header} features={features}/>
        </Lower>
      </Container>
    </Wrapper>
  )
}

export default PricingCard