import React, { useEffect } from 'react'
import styled from 'styled-components';
import { setHeader } from '../../redux/features/settingsSlice';
import { useDispatch } from 'react-redux';
import PricingCard from './PricingCard';
import CurrentPlanCard from './CurrentPlanCard';

const Cards = styled.div`
  display: flex;
  width: 100%;
  gap: ${props => props.theme.gap.cards.landing};
  margin-bottom: 36px;
`;

const Current = styled.span`
  font-size: 1.563rem;
  font-weight: 600;
  color: ${props => props.theme.textColor.primary};
  margin-bottom: 24px;
`

const Subscription = () => {
  const data = [
    {
      header: 'Free',
      price: 0,
      buttonText: 'Try It Free',
      features: [
        'features1',
        'features2',
        'features3',
        'features4',
      ]
    },
    {
      header: 'Premium',
      price: 4.99,
      buttonText: 'Buy Now',
      features: [
        'features1',
        'features2',
        'features3',
        'features4',
        'features5',
        'features6',
        'features7',
        'features8',
      ]
    },
  ]

  const header = "Subscription"
  const details = "See your current plan or choose a new one"
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setHeader({header, details}))
  }, [])

  return (
    <>
      <Cards>
        {data.map((card, index) => (
          <PricingCard key={index}
                        header={card.header}
                        price={card.price}
                        buttonText={card.buttonText}
                        features={card.features}/>
        ))}
      </Cards>
      <Current>
        Current plan
      </Current>
      <CurrentPlanCard/>
    </>
  )
}

export default Subscription