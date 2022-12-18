import React from 'react'
import styled from 'styled-components'
import PricingCard from './PricingCard';
import { useGetSubscriptionOptionsQuery } from '../../redux/features/paymentApiSlice';
import LoadingSpinner from '../common/LoadingSpinner';

const Wrapper = styled.section`
  padding-top: 64px;
  padding-bottom: 64px;
  background-color: ${props => props.theme.backgroundColor.primary};
`;

const Container = styled.div`
  max-width: ${props => props.theme.maxWidth.landing};
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  padding-left: ${props => props.theme.padding.landing};
  padding-right: ${props => props.theme.padding.landing};
`;

const Header = styled.h3`
  font-size: 2.441rem;
  font-weight: 700;
  margin: 0 0 24px 0;
  color: ${props => props.theme.textColor.primary};
`

const Details = styled.span`
  color: ${props => props.theme.textColor.subtile};
  margin-bottom: 48px;
`

const Cards = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    gap: ${props => props.theme.gap.cards.landing};
`;

const Pricing = () => {
  const {data, isLoading} = useGetSubscriptionOptionsQuery()

  return (
    <Wrapper id='pricing'>
        <Container>
            <Header>
                Pricing
            </Header>
            <Details>
                The wise man therefore always holds in these matters to this principle of selection.
            </Details>
            {
              isLoading 
                ? <LoadingSpinner/>
                : <Cards>
                    {
                      data?.map((card, index) => (
                        <PricingCard key={index}
                                      header={card.name}
                                      price={card.price}
                                      features={card.features}/>
                      ))
                    }
                  </Cards>
            }
        </Container>
    </Wrapper>
  )
}

export default Pricing