import React from 'react'
import styled from 'styled-components'
import { LogoTextS } from '../common/LogoText'
import { LinkButtonSideMenu } from '../common/Links'
import HomeIcon from '../../svgs/icons/Home.svg'
import CalendarIcon from '../../svgs/icons/Calendar.svg'
import KanbanIcon from '../../svgs/icons/Kanban.svg'
import YouTubeIcon from '../../svgs/icons/YouTube.svg'
import TikTokIcon from '../../svgs/icons/TikTok.svg'
import InstagamIcon from '../../svgs/icons/Instagram.svg'
import TwitterIcon from '../../svgs/icons/Twitter.svg'
import SettingsIcon from '../../svgs/icons/Settings.svg'
import LogOutIcon from '../../svgs/icons/LogOut.svg'
import pagesPaths from '../../routes/PagesPaths'
import { logOut } from '../../redux/features/authSlice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

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
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogOut = () => {
    dispatch(logOut())
    navigate(pagesPaths.landing)
  }

  return (
    <Container>
        <Logo>
            <LogoTextS color={props => props.theme.textColor.primary}/>
        </Logo>
        <Buttons>
            <LinkButtonSideMenu to={pagesPaths.home} icon={HomeIcon}>
                Home
            </LinkButtonSideMenu>
            <Group>
                <LinkButtonSideMenu to={pagesPaths.calendar} icon={CalendarIcon}>
                    Calendar
                </LinkButtonSideMenu>
                <LinkButtonSideMenu to={pagesPaths.kanban} icon={KanbanIcon}>
                    Kanban
                </LinkButtonSideMenu>
            </Group>
            <Group>
                <LinkButtonSideMenu to={pagesPaths.youTube} icon={YouTubeIcon}>
                    YouTube
                </LinkButtonSideMenu>
                <LinkButtonSideMenu to={pagesPaths.tikTok} icon={TikTokIcon}>
                    TikTok
                </LinkButtonSideMenu>
                <LinkButtonSideMenu to={pagesPaths.instagram} icon={InstagamIcon}>
                    Instagam
                </LinkButtonSideMenu>
                <LinkButtonSideMenu to={pagesPaths.twitter} icon={TwitterIcon}>
                    Twitter
                </LinkButtonSideMenu>
            </Group>
            <Group>
                <LinkButtonSideMenu to={pagesPaths.settings.main + 
                                        '/' + 
                                        pagesPaths.settings.subscription} 
                                    icon={SettingsIcon}>
                    Settings
                </LinkButtonSideMenu>
                <LinkButtonSideMenu to={pagesPaths.landing}
                                    icon={LogOutIcon}
                                    onClick={handleLogOut}>
                    Log Out
                </LinkButtonSideMenu>
            </Group>
        </Buttons>
    </Container>
  )
}

export default SideMenu