import React from 'react'
import styled from 'styled-components'
import { LogoTextS } from '../common/LogoText'
import { LinkButtonSideMenu } from '../common/Links'
import pagesPaths from '../../routes/PagesPaths'
import { logOut } from '../../redux/features/authSlice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import LightHomeIcon from '../../svgs/light/icons/Home.svg'
import LightCalendarIcon from '../../svgs/light/icons/Calendar.svg'
import LightKanbanIcon from '../../svgs/light/icons/Kanban.svg'
import LightYouTubeIcon from '../../svgs/light/icons/YouTube.svg'
import LightTikTokIcon from '../../svgs/light/icons/TikTok.svg'
import LightInstagamIcon from '../../svgs/light/icons/Instagram.svg'
import LightTwitterIcon from '../../svgs/light/icons/Twitter.svg'
import LightSettingsIcon from '../../svgs/light/icons/Settings.svg'
import LightLogOutIcon from '../../svgs/light/icons/LogOut.svg'
import DarkHomeIcon from '../../svgs/dark/icons/Home.svg'
import DarkCalendarIcon from '../../svgs/dark/icons/Calendar.svg'
import DarkKanbanIcon from '../../svgs/dark/icons/Kanban.svg'
import DarkYouTubeIcon from '../../svgs/dark/icons/YouTube.svg'
import DarkTikTokIcon from '../../svgs/dark/icons/TikTok.svg'
import DarkInstagamIcon from '../../svgs/dark/icons/Instagram.svg'
import DarkTwitterIcon from '../../svgs/dark/icons/Twitter.svg'
import DarkSettingsIcon from '../../svgs/dark/icons/Settings.svg'
import DarkLogOutIcon from '../../svgs/dark/icons/LogOut.svg'

import { useSelector } from 'react-redux';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 128px;
  padding: 40px 0px;
  background-color: ${props => props.theme.backgroundColor.primary};
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`

const Logo = styled.div`
  display: flex;
  justify-content: center;
  padding: 32px 8px;
  cursor: default;
`

const Group = styled.div`
  display: flex;
  flex-direction: column;
`

const Buttons = styled(Group)`
    max-height: 940px;
    height: 100%;
    justify-content: space-between;
    gap: 32px;
`

const SideMenu = () => {
  const { isThemeDark } = useSelector(state => state.app)
  const { selectedPage } = useSelector(state => state.dashboard)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogOut = () => {
    dispatch(logOut())
  }

  return (
    <Container>
        <Logo>
            <LogoTextS color={props => props.theme.textColor.primary}/>
        </Logo>
        <Buttons>
            <LinkButtonSideMenu to={pagesPaths.home}
                                selectedpage={selectedPage}
                                icon={ isThemeDark
                                        ? DarkHomeIcon
                                        : LightHomeIcon}>
                Home
            </LinkButtonSideMenu>
            <Group>
                <LinkButtonSideMenu to={pagesPaths.calendar} 
                                    selectedpage={selectedPage} 
                                    icon={ isThemeDark 
                                            ? DarkCalendarIcon
                                            : LightCalendarIcon}>
                    Calendar
                </LinkButtonSideMenu>
                <LinkButtonSideMenu to={pagesPaths.kanban}
                                    selectedpage={selectedPage}
                                    icon={ isThemeDark 
                                            ? DarkKanbanIcon
                                            : LightKanbanIcon}>
                    Kanban
                </LinkButtonSideMenu>
            </Group>
            <Group>
                <LinkButtonSideMenu to={pagesPaths.youTube} 
                                    selectedpage={selectedPage}
                                    icon={ isThemeDark 
                                            ? DarkYouTubeIcon
                                            : LightYouTubeIcon}>
                    YouTube
                </LinkButtonSideMenu>
                <LinkButtonSideMenu to={pagesPaths.tikTok}
                                    selectedpage={selectedPage}
                                    icon={ isThemeDark 
                                            ? DarkTikTokIcon
                                            : LightTikTokIcon}>
                    TikTok
                </LinkButtonSideMenu>
                <LinkButtonSideMenu to={pagesPaths.instagram} 
                                    selectedpage={selectedPage}
                                    icon={ isThemeDark 
                                            ? DarkInstagamIcon
                                            : LightInstagamIcon}>
                    Instagam
                </LinkButtonSideMenu>
                <LinkButtonSideMenu to={pagesPaths.twitter} 
                                    selectedpage={selectedPage}
                                    icon={ isThemeDark 
                                            ? DarkTwitterIcon
                                            : LightTwitterIcon}>
                    Twitter
                </LinkButtonSideMenu>
            </Group>
            <Group>
                <LinkButtonSideMenu to={`${pagesPaths.settings.main}/${pagesPaths.settings.subscription}`} 
                                    selectedpage={selectedPage}
                                    icon={ isThemeDark 
                                            ? DarkSettingsIcon
                                            : LightSettingsIcon}>
                    Settings
                </LinkButtonSideMenu>
                <LinkButtonSideMenu to={pagesPaths.landing}
                                    icon={ isThemeDark 
                                            ? DarkLogOutIcon
                                            : LightLogOutIcon}
                                    onClick={handleLogOut}>
                    Log Out
                </LinkButtonSideMenu>
            </Group>
        </Buttons>
    </Container>
  )
}

export default SideMenu