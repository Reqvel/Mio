import React from 'react'
import styled from 'styled-components'
import ArrowUp from '../../svgs/icons/ArrowUp.svg'
import ArrowDown from '../../svgs/icons/ArrowDown.svg'

const Wrapper = styled.li`
  min-width: 256px;
  min-height: 128px;
  padding: 24px;
  border-radius: 12px;
  background-color: ${props => props.theme.components.card.topColor};
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
  min-height: auto;
  min-width: 48px;
`

const Header = styled.span`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${props => props.theme.textColor.secondary};
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
  color: ${props => props.theme.textColor.secondary};
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
  color: ${props => props.isPositive ? 
                    props.theme.components.percentage.upColor :
                    props.theme.components.percentage.downColor};
`

const Timeframe = styled.span`
  color: ${props => props.theme.textColor.subtile};
`

const TopCard = ({ icon, header, num: value, percent, timeframe }) => {
  const isPercentPositive = percent >= 0
  const arrow = isPercentPositive ? ArrowUp : ArrowDown
  
  return (
    <Wrapper>
      <Container>
        <Upper>
          <Icon src={icon}/>
          <Header>
            {header}
          </Header>
        </Upper>
        <Lower>
          <Left>
            <StatValue>
              {value}
            </StatValue>
          </Left>
          <Right>
            <Percentage>
              <PercentageIcon src={arrow}/>
              <PercentageValue isPositive={isPercentPositive}>
                { Math.abs(percent) } %
              </PercentageValue>
            </Percentage>
            <Timeframe>
              {timeframe}
            </Timeframe>
          </Right>
        </Lower>
      </Container>
    </Wrapper>
  )
}

export default TopCard