import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import ChartCard from './dashboard/ChartCard';
import LineChart from './dashboard/LineChart';
import BarChart from './dashboard/BarChart';
import { useDispatch, useSelector } from 'react-redux';
import { setHeader, setSelectedPage } from '../redux/features/dashboardSlice'
import pagesPaths from '../routes/PagesPaths';
import ConnectSocial from './dashboard/ConnectSocial';
import { useGetYouTubeStatsMutation } from '../redux/features/dashboardApiSlice';
import LoadingSpinner from './common/LoadingSpinner';
import { useGetUsersInfoQuery } from '../redux/features/dashboardApiSlice';

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
  grid-template-columns: repeat(6, 1fr);
  gap: ${props => props.theme.gap.cards.dashboard};
`

const SpinnerContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const YouTube = () => {
  const { isThemeDark } = useSelector(state => state.app)
  const dispatch = useDispatch()
  const header = 'YouTube'
  const details = "Don't forget to set the details for the YouTube!"
  const isConnected = true

  const [views, setViews] = useState([])
  const [likes, setLikes] = useState([])
  const [comments, setComments] = useState([])
  const [dislikes, setDislikes] = useState([])
  const [shares, setShares] = useState([])
  const [subscribersgained, seSubscribersgained] = useState([])
  const [subscriberslost, setSubscriberslost] = useState([])

  const [getYouTubeStats, {isLoading}] = useGetYouTubeStatsMutation()
  const {data: userInfo, isLoading: isUserInfoLoading} = useGetUsersInfoQuery()

  const getValues = (metrics, name) => {
    return metrics.find((metric, index) => (metric.name === name)).values
  }

  const getData = async () => {
    try {
      const metrics = await getYouTubeStats({period: 'month'}).unwrap()
      setViews(getValues(metrics, 'views'))
      setLikes(getValues(metrics, 'likes'))
      setComments(getValues(metrics, 'comments'))
      setDislikes(getValues(metrics, 'dislikes'))
      setShares(getValues(metrics, 'shares'))
      seSubscribersgained(getValues(metrics, 'subscribersgained'))
      setSubscriberslost(getValues(metrics, 'subscriberslost'))
    } catch (err) {
      // TODO
    }
  }

  useEffect(() => {
    dispatch(setHeader({header, details}))
    dispatch(setSelectedPage(pagesPaths.youTube))

    if(userInfo?.social_networks.connected.youtube) {
      getData()
    }
  }, [userInfo])

  return (
    (isLoading || isUserInfoLoading)
      ? <SpinnerContainer>
          <LoadingSpinner/>
        </SpinnerContainer> 
      : userInfo?.social_networks.connected.youtube
          ? <Container>
              {
                isConnected
                  ? <Cards>
                      <ChartCard header={'Likes'}
                                details={"fill this"}
                                chart={<LineChart data={likes}
                                                  xKey={'on_date'}
                                                  yKey={'value'}
                                                  color={'#FF6633'}/>}
                                columnStart={1}
                                columnEnd={4}/>
                      <ChartCard header={'Views'}
                                details={"fill this"}
                                chart={<BarChart data={views}
                                                  xKey={'on_date'}
                                                  yKey={'value'}
                                                  color={'#FFB399'}/>}
                                columnStart={4}
                                columnEnd={7}/>
                      <ChartCard header={'Comments'}
                                details={"fill this"}
                                chart={<LineChart data={comments}
                                                  xKey={'on_date'}
                                                  yKey={'value'}
                                                  color={'#FF33FF'}/>}
                                columnStart={1}
                                columnEnd={3}/>
                      <ChartCard header={'Dislikes'}
                                details={"fill this"}
                                chart={<BarChart data={dislikes}
                                                  xKey={'on_date'}
                                                  yKey={'value'}
                                                  color={'#FFFF99'}/>}
                                columnStart={3}
                                columnEnd={7}/>
                      <ChartCard header={'Shares'}
                                details={"fill this"}
                                chart={<BarChart data={shares}
                                                  xKey={'on_date'}
                                                  yKey={'value'}
                                                  color={'#FFFF99'}/>}
                                columnStart={1}
                                columnEnd={3}/>
                      <ChartCard header={'Subscribers gained'}
                                details={"fill this"}
                                chart={<LineChart data={subscribersgained}
                                                  xKey={'on_date'}
                                                  yKey={'value'}
                                                  color={'#00B3E6'}/>}
                                columnStart={3}
                                columnEnd={5}/>
                      <ChartCard header={'Subscribers lost'}
                                details={"fill this"}
                                chart={<BarChart data={subscriberslost}
                                                  xKey={'on_date'}
                                                  yKey={'value'}
                                                  color={'#E6B333'}/>}
                                columnStart={5}
                                columnEnd={7}/>
                    </Cards>
                  : <ConnectSocial socialName={header}/> 
              }
            </Container>
          : <ConnectSocial socialName={header}/>
  )
}

export default YouTube