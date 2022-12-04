import React from 'react'
import styled from 'styled-components'
import StatIcon from '../../svgs/icons/StatIcon.svg'
import ArrowUp from '../../svgs/icons/ArrowUp.svg'

const Wrapper = styled.li`
  min-width: 256px;
  min-height: 128px;
  padding: 24px;
  border-radius: 12px;
  background-color: ${props => props.theme.featureCardColor};
`;

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`

const Upper = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  gap: 16px;
`

const Icon = styled.img`
  height: auto;
  width: 48px;
`

const Header = styled.span`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${props => props.theme.textSecondary};
`

const Lower = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: space-between;
`

const Left = styled.div`
  display: flex;
  align-items: center;
`

const StatValue = styled.span`
  font-size: 1.563rem;
  font-weight: 700;
  color: ${props => props.theme.textSecondary};
`

const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
`

const Percentage = styled.div`
  display: flex;
  gap: 8px;
`

const PercentageIcon = styled.img`
  height: auto;
  width: 18px;
`

const PercentageValue = styled.span`
  color: ${props => props.theme.percentageColorUp};
`

const Timeframe = styled.span`
  color: ${props => props.theme.textSubtile};
`

const StatCard = () => {
  return (
    <Wrapper>
      <Container>
        <Upper>
          <Icon src={StatIcon}/>
          <Header>
            Account Reach
          </Header>
        </Upper>
        <Lower>
          <Left>
            <StatValue>
              700K
            </StatValue>
          </Left>
          <Right>
            <Percentage>
              <PercentageIcon src={ArrowUp}/>
              <PercentageValue>
                0.8 %
              </PercentageValue>
            </Percentage>
            <Timeframe>
              This week
            </Timeframe>
          </Right>
        </Lower>
      </Container>
    </Wrapper>
  )
}

export default StatCard