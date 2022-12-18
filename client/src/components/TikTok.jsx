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
import { setHeader, setSelectedPage } from '../redux/features/dashboardSlice';
import { useSelector } from 'react-redux';
import pagesPaths from '../routes/PagesPaths';
import tikTokDummy from '../data/TikTokDummy';

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
    dispatch(setSelectedPage(pagesPaths.tikTok))
  }, [])

  return (
    <Container>
      <ScrollContainer>
        <TopCards>
          <TopCard icon={isThemeDark
                          ? DarkFollowersIcon
                          : LightFollowersIcon}
                       header='Followers'
                       num={numFormatter(153087694)}
                       percent={10.2}
                       timeframe='This week'/>
          <TopCard icon={isThemeDark
                          ? DarkLikesIcon
                          : LightLikesIcon}
                       header='Likes'
                       num={numFormatter(2547258083)}
                       percent={-24.5}
                       timeframe='This week'/>
          <TopCard icon={isThemeDark
                          ? DarkVideosIcon
                          : LightVideosIcon}
                       header='Videos'
                       num={numFormatter(1099)}
                       percent={0.2}
                       timeframe='This week'/>
          <TopCard icon={isThemeDark
                          ? DarkOverallEngagementIcon
                          : LightOverallEngagementIcon}
                       header='Overall Engagement'
                       num={'10.15%'}
                       percent={0.55}
                       timeframe='This week'/>
          <TopCard icon={isThemeDark
                          ? DarkEngagementLikesIcon
                          : LightEngagementLikesIcon}
                       header='Engagement - Likes'
                       num={'9.95%'}
                       percent={0.12}
                       timeframe='This week'/>
          <TopCard icon={isThemeDark
                          ? DarkEngagementCommentsIcon
                          : LightEngagementCommentsIcon}
                       header='Engagement - Comments'
                       num={'0.17%'}
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
          <ChartCard header={'Followers Growth'}
                     details={"Understand how the followers count for @khaby.lame's TikTok profile is progressing through each day."}
                     chart={<LineChart data={tikTokDummy.followersGrowth}
                                       xKey={'date'}
                                       yKey={'followers'}
                                       color={'#5ac2d8'}/>}
                     columnStart={1}
                     columnEnd={3}/>
          <ChartCard header={'Video Growth'}
                     details={"Understand how many videos @khaby.lame is posting day by day."}
                     chart={<BarChart data={tikTokDummy.videoGrowth}
                                       xKey={'date'}
                                       yKey={'videos'}
                                       color={'#9b1c65'}/>}
                     columnStart={3}
                     columnEnd={5}/>
          <ChartCard header={'Engagement'}
                     details={"Total engagement counter for @khaby.lame's TikTok profile."}
                     chart={<PieChart data={tikTokDummy.engagement}
                                      valueKey='value'/>}
                     bottom={<ChartLabelList data={tikTokDummy.engagement}
                                             valueKey={'value'}
                                             nameKey={'name'}/>}
                     minWidth='330px'/>
          <ChartCard header={'Likes Growth'}
                     details={"Total likes counter for @khaby.lame's TikTok profile progression."}
                      chart={<LineChart data={tikTokDummy.likesGrowth}
                                       xKey={'date'}
                                       yKey={'likes'}
                                       color={'#a50135'}/>}
                     columnStart={2}
                     columnEnd={5}/>
        </Cards>
    </Container>
  )
}

export default TikTok