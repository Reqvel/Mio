import React from 'react'
import styled from 'styled-components'
import pagesPaths from '../../routes/PagesPaths';
import { getCurrencySymbol } from '../../utils/GetCurrencySymbol';
import { LinkButtonOutlined } from '../common/Links'

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
  margin-bottom: 8px;
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

const Description = styled.span`
  color: ${props => props.theme.textColor.primary};
`

const Bottom = styled.div`
  display: flex;
  justify-content: end;
  margin-top: 24px;
`

const CurrentPlanCard = ({usersSub}) => {
  const currencySymbol = getCurrencySymbol(usersSub.price.currency)
  const pricePerUnit = Number(usersSub.price.per_unit) / 100;
  const isCancelable = pricePerUnit !== 0

  return (
    <Wrapper>
      <Container>
        <Upper>
          <Header>
            {usersSub.product.name}
          </Header>
        </Upper>
        <Lower>
          <Price>
            {currencySymbol}{pricePerUnit}&nbsp;
            <Timeframe>
              /{usersSub.price.period}
            </Timeframe>
          </Price>
          <Description>
            {usersSub.product.description}
          </Description>
          {
            isCancelable && 
            <Bottom>
              <LinkButtonOutlined to={pagesPaths.cancelSubscription}>
                Cancel
              </LinkButtonOutlined>
            </Bottom>
          }
        </Lower>
      </Container>
    </Wrapper>
  )
}

export default CurrentPlanCard