import React from 'react'
import styled from 'styled-components';
import TopCard from './dashboard/TopCard';
import ScrollContainer from 'react-indiana-drag-scroll';
import FollowersIcon from '../svgs/icons/Followers.svg'
import LikesIcon from '../svgs/icons/Likes.svg'
import VideosIcon from '../svgs/icons/Videos.svg'
import OverallEngagementIcon from '../svgs/icons/OverallEngagement.svg'
import EngagementLikesIcon from '../svgs/icons/EngagementLikes.svg'
import EngagementCommentsIcon from '../svgs/icons/EngagementComments.svg'
import EngagementSharesIcon from '../svgs/icons/EngagementShares.svg'
import { numFormatter } from '../utils/Formatters';
import ChartCard from './dashboard/ChartCard';
import LineChart from './dashboard/LineChart';
import BarChart from './dashboard/BarChart';
import PieChart from './dashboard/PieChart';

const Container = styled.div`
  max-width: ${props => props.theme.maxWidth.dashboard};
  margin-left: auto;
  margin-right: auto;
  padding-left: ${props => props.theme.padding.dashboard};
  padding-right: ${props => props.theme.padding.dashboard};
`;

const TopCards = styled.ul`
  display: flex;
  gap: ${props => props.theme.gap.cards.top};
  padding: 0;
  list-style: none;
  margin-top: 0;
  margin-bottom: 24px;
`

const Cards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${props => props.theme.gap.cards.dashboard};
`

const TikTok = () => {
  return (
    <Container>
      <ScrollContainer>
        <TopCards>
          <TopCard icon={FollowersIcon}
                       header='Followers'
                       num={numFormatter(700000)}
                       percent={10.2}
                       timeframe='This week'/>
          <TopCard icon={LikesIcon}
                       header='Likes'
                       num={numFormatter(2534675)}
                       percent={-24.5}
                       timeframe='This week'/>
          <TopCard icon={VideosIcon}
                       header='Videos'
                       num={numFormatter(1123)}
                       percent={0.2}
                       timeframe='This week'/>
          <TopCard icon={OverallEngagementIcon}
                       header='Overall Engagement'
                       num={'10.65%'}
                       percent={0.55}
                       timeframe='This week'/>
          <TopCard icon={EngagementLikesIcon}
                       header='Engagement - Likes'
                       num={'10.39%'}
                       percent={0.12}
                       timeframe='This week'/>
          <TopCard icon={EngagementCommentsIcon}
                       header='Engagement - Comments'
                       num={'0.23%'}
                       percent={-0.04}
                       timeframe='This week'/>
          <TopCard icon={EngagementSharesIcon}
                       header='Engagement - Shares'
                       num={'0.03%'}
                       percent={0.01}
                       timeframe='This week'/>
        </TopCards>
      </ScrollContainer>
        <Cards>
          <ChartCard>
            <LineChart/>
          </ChartCard>
          <ChartCard>
            <BarChart/>
          </ChartCard>
          <ChartCard>
            <PieChart/>
          </ChartCard>
        </Cards>
    </Container>
  )
}

export default TikTok