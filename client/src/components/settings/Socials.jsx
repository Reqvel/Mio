import React, { useEffect } from 'react'
import { setHeader, setSelectedOption } from '../../redux/features/settingsSlice';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import pagesPaths from '../../routes/PagesPaths'
import SocialneworkCard from './SocialnetworkCard';
import LightYouTubeIcon from '../../svgs/light/icons/YouTube.svg'
import LightTikTokIcon from '../../svgs/light/icons/TikTok.svg'
import LightInstagamIcon from '../../svgs/light/icons/Instagram.svg'
import LightTwitterIcon from '../../svgs/light/icons/Twitter.svg'
import DarkYouTubeIcon from '../../svgs/dark/icons/YouTube.svg'
import DarkTikTokIcon from '../../svgs/dark/icons/TikTok.svg'
import DarkInstagamIcon from '../../svgs/dark/icons/Instagram.svg'
import DarkTwitterIcon from '../../svgs/dark/icons/Twitter.svg'
import { useYouTubeConnectMutation, useLazyYouTubeDisconnectQuery,
         useTikTokConnectMutation, useLazyTikTokDisconnectQuery } from '../../redux/features/socialsApiSlice';
import { useGetUsersInfoQuery, useLazyGetUsersInfoQuery } from '../../redux/features/dashboardApiSlice';
import LoadingSpinner from '../common/LoadingSpinner';
import { useState } from 'react';

const Container = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
`

const Alert = styled.span`
  color: ${props => props.theme.textColor.primary};
  font-weight: 600;
  margin-bottom: 12px;
`

const Socials = () => {
  const header = "Socials"
  const details = "Manage your connected accounts and services"
  const dispatch = useDispatch()
  const { isThemeDark } = useSelector(state => state.app)
  const currentUrl = window.location.href

  const [isYouTubeConnected, setIsYouTubeConnected] = useState(false)
  const [isTikTokConnected, setIsTikTokConnected] = useState(false)

  const [youTubeConnect, {isLoading: isYouTubeLoading}] = useYouTubeConnectMutation()
  const [youTubeDisconnect, {isLoading: isYouTubeDisconnectLoading}] = useLazyYouTubeDisconnectQuery()
  const [tikTokConnect, {isLoading: isTikTokLoading}] = useTikTokConnectMutation()
  const [tikTokDisconnect, {isLoading: isTikTokDisconnectLoading}] = useLazyTikTokDisconnectQuery()

  const {data: userInfo, isLoading: isUserInfoLoading} = useGetUsersInfoQuery()
  const [getUserData] = useLazyGetUsersInfoQuery()

  const handleConnectYouTube = async () => {
    try {
      const response = await youTubeConnect({ redirect_url: currentUrl}).unwrap()
      window.location.replace(response.authorization_url)
    } catch (err) {
      // TODO
    }
  }

  const handleDisconnectYouTube = async () => {
    const response = await youTubeDisconnect()
    if(response.status === "fulfilled") {
      const {data} = await getUserData()
      setIsYouTubeConnected(data.social_networks.connected.youtube)
    }
  }

  const handleConnectTikTok = async () => {
    const response = await tikTokConnect()
    const {data} = await getUserData()
    setIsTikTokConnected(data.social_networks.connected.tiktok)
  }

  const handleDisconnectTikTok = async () => {
    const response = await tikTokDisconnect()
    if(response.status === "fulfilled") {
      const {data} = await getUserData()
      setIsTikTokConnected(data.social_networks.connected.tiktok)
    }
  }

  useEffect(() => {
    dispatch(setHeader({header, details}))
    dispatch(setSelectedOption(pagesPaths.settings.socials))
  }, [dispatch])
  
  useEffect(() => {
    setIsYouTubeConnected(userInfo?.social_networks.connected.youtube)
    setIsTikTokConnected(userInfo?.social_networks.connected.tiktok)
  }, [userInfo])
  
  return (
    isUserInfoLoading
    ? <LoadingSpinner/>
    : <>
        {
          !userInfo?.social_networks.available_more && 
          <Alert>Limit of connected accounts have been reached, please upgrade your subscription or disconnect current accounts</Alert>
        }
        <Container>
          <SocialneworkCard icon={ isThemeDark 
                                    ? DarkYouTubeIcon
                                    : LightYouTubeIcon}
                            socialName='YouTube'
                            details='Connect your YouTube account to get detailed information about your achievements, such as the total number of likes, views, and comments on your videos.'
                            isConnected={isYouTubeConnected}
                            handleConnect={handleConnectYouTube}
                            handleDisconnect={handleDisconnectYouTube}
                            isDisabled={!userInfo?.social_networks.available_more}
                            isLoading={isYouTubeLoading || isYouTubeDisconnectLoading}/>
          <SocialneworkCard icon={ isThemeDark 
                                    ? DarkTikTokIcon
                                    : LightTikTokIcon}
                            socialName='TikTok'
                            details='Connect your TikTok account to get detailed information about your achievements, such as the total number of likes, views, shares and comments on your Reels.'
                            isConnected={isTikTokConnected}
                            handleConnect={handleConnectTikTok}
                            handleDisconnect={handleDisconnectTikTok}
                            isDisabled={!userInfo?.social_networks.available_more}
                            isLoading={isTikTokLoading || isTikTokDisconnectLoading}/>
          <SocialneworkCard icon={ isThemeDark 
                                    ? DarkInstagamIcon
                                    : LightInstagamIcon}
                            socialName='Instagram'
                            details='Coming soon!'
                            isDisabled={true}/>
          <SocialneworkCard icon={ isThemeDark 
                                    ? DarkTwitterIcon
                                    : LightTwitterIcon}
                            socialName='Twitter'
                            details='Coming soon!'
                            isDisabled={true}/>
        </Container>
      </>
  )
}

export default Socials