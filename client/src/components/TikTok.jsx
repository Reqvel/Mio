import React, { useEffect } from 'react'
import styled from 'styled-components';
import TopCard from './dashboard/TopCard';
import ScrollContainer from 'react-indiana-drag-scroll';
import LightFollowersIcon from '../svgs/light/icons/Followers.svg'
import LightLikesIcon from '../svgs/light/icons/Likes.svg'
import LightVideosIcon from '../svgs/light/icons/Videos.svg'
import LightOverallEngagementIcon from '../svgs/light/icons/OverallEngagement.svg'
import LightEngagementLikesIcon from '../svgs/light/icons/EngagementLikes.svg'
import LightEngagementCommentsIcon from '../svgs/light/icons/EngagementComments.svg'
import LightEngagementSharesIcon from '../svgs/light/icons/EngagementShares.svg'
import DarkFollowersIcon from '../svgs/dark/icons/Followers.svg'
import DarkLikesIcon from '../svgs/dark/icons/Likes.svg'
import DarkVideosIcon from '../svgs/dark/icons/Videos.svg'
import DarkOverallEngagementIcon from '../svgs/dark/icons/OverallEngagement.svg'
import DarkEngagementLikesIcon from '../svgs/dark/icons/EngagementLikes.svg'
import DarkEngagementCommentsIcon from '../svgs/dark/icons/EngagementComments.svg'
import DarkEngagementSharesIcon from '../svgs/dark/icons/EngagementShares.svg'
import { numFormatter } from '../utils/Formatters';
import ChartCard from './dashboard/ChartCard';
import LineChart from './dashboard/LineChart';
import BarChart from './dashboard/BarChart';
import PieChart from './dashboard/PieChart';
import ChartLabelList from './dashboard/ChartLabelList';
import { useDispatch } from 'react-redux';
import { setHeader } from '../redux/features/dashboardSlice';
import { useSelector } from 'react-redux';

const Container = styled.div`
  height: 100%;
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
  grid-template-columns: repeat(4, 1fr);
  gap: ${props => props.theme.gap.cards.dashboard};
`

const TikTok = () => {
  const { isThemeDark } = useSelector(state => state.app)
  const dispatch = useDispatch()
  const header = 'TikTok'
  const details = "Don't forget to set the details for the TikTok!"

  useEffect(() => {
    dispatch(setHeader({header, details}))
  }, [])

  return (
    <Container>
      <ScrollContainer>
        <TopCards>
          <TopCard icon={isThemeDark
                          ? DarkFollowersIcon
                          : LightFollowersIcon}
                       header='Followers'
                       num={numFormatter(700000)}
                       percent={10.2}
                       timeframe='This week'/>
          <TopCard icon={isThemeDark
                          ? DarkLikesIcon
                          : LightLikesIcon}
                       header='Likes'
                       num={numFormatter(2534675)}
                       percent={-24.5}
                       timeframe='This week'/>
          <TopCard icon={isThemeDark
                          ? DarkVideosIcon
                          : LightVideosIcon}
                       header='Videos'
                       num={numFormatter(1123)}
                       percent={0.2}
                       timeframe='This week'/>
          <TopCard icon={isThemeDark
                          ? DarkOverallEngagementIcon
                          : LightOverallEngagementIcon}
                       header='Overall Engagement'
                       num={'10.65%'}
                       percent={0.55}
                       timeframe='This week'/>
          <TopCard icon={isThemeDark
                          ? DarkEngagementLikesIcon
                          : LightEngagementLikesIcon}
                       header='Engagement - Likes'
                       num={'10.39%'}
                       percent={0.12}
                       timeframe='This week'/>
          <TopCard icon={isThemeDark
                          ? DarkEngagementCommentsIcon
                          : LightEngagementCommentsIcon}
                       header='Engagement - Comments'
                       num={'0.23%'}
                       percent={-0.04}
                       timeframe='This week'/>
          <TopCard icon={isThemeDark
                          ? DarkEngagementSharesIcon
                          : LightEngagementSharesIcon}
                       header='Engagement - Shares'
                       num={'0.03%'}
                       percent={0.01}
                       timeframe='This week'/>
        </TopCards>
      </ScrollContainer>
        <Cards>
          <ChartCard chart={<LineChart/>}
                     columnStart={1}
                     columnEnd={3}/>
          <ChartCard chart={<BarChart/>}
                     columnStart={3}
                     columnEnd={5}/>
          <ChartCard chart={<PieChart/>} 
                     bottom={<ChartLabelList/>}
                     minWidth='330px'/>
          <ChartCard chart={<LineChart/>}
                     columnStart={2}
                     columnEnd={5}/>
        </Cards>
    </Container>
  )
}

export default TikTok