import React, { useEffect } from 'react'
import styled from 'styled-components';
import { setHeader, setSelectedOption } from '../../redux/features/settingsSlice';
import { useDispatch } from 'react-redux';
import PricingCard from './PricingCard';
import CurrentPlanCard from './CurrentPlanCard';
import pagesPaths from '../../routes/PagesPaths';
import { useGetSubscriptionOptionsQuery,
         useGetUsersSubscriptionQuery } from '../../redux/features/paymentApiSlice';
import LoadingSpinner from '../common/LoadingSpinner';

const Cards = styled.div`
  display: flex;
  gap: ${props => props.theme.gap.cards.landing};
  margin-bottom: 48px;
`;

const Current = styled.span`
  font-size: 1.563rem;
  font-weight: 600;
  color: ${props => props.theme.textColor.primary};
  margin-bottom: 12px;
`

const Subscription = () => {
  const {data: subOptions, isLoading: isOptsLoading} = useGetSubscriptionOptionsQuery()
  const {data: usersSub, isLoading: isUsersLoading} = useGetUsersSubscriptionQuery()

  const header = "Subscription"
  const details = "See your current plan or choose a new one"
  const currentUrl = window.location.href
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setHeader({header, details}))
    dispatch(setSelectedOption(pagesPaths.settings.subscription))
  }, [dispatch])
  
  return (
    (isOptsLoading || isUsersLoading)
      ? <LoadingSpinner/>  
      : <>
        <Cards>
          {subOptions?.map((card, index) => (
            <PricingCard key={index}
                          header={card.name}
                          price={card.price}
                          buttonText={card.buttonText}
                          features={card.features}
                          isCurrent={
                            card.stripe_id === usersSub?.product.stripe_id //'prod_MxRBL8v6fMqOS2'
                          }
                          productId={card.stripe_id}
                          redirectTo={currentUrl}/>
            ))}
        </Cards>
        <Current>
          Current plan
        </Current>
        {
          (usersSub !== undefined) && 
          <CurrentPlanCard usersSub={usersSub}/>
        }
      </>
  )
}

export default Subscription