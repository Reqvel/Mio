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
import pagesPaths from '../../routes/PagesPaths'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  max-width: 144px;
  min-width: 96px;
  width: 100%;
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
`

const Group = styled.div`
  display: flex;
  flex-direction: column;
`

const Buttons = styled(Group)`
    max-height: 864px;
    height: 100%;
    justify-content: space-between;
    gap: 32px;
`

const SideMenu = () => {
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
                <LinkButtonSideMenu icon={KanbanIcon}>
                    Kanban
                </LinkButtonSideMenu>
            </Group>
            <Group>
                <LinkButtonSideMenu icon={YouTubeIcon}>
                    YouTube
                </LinkButtonSideMenu>
                <LinkButtonSideMenu icon={TikTokIcon}>
                    TikTok
                </LinkButtonSideMenu>
                <LinkButtonSideMenu icon={InstagamIcon}>
                    Instagam
                </LinkButtonSideMenu>
                <LinkButtonSideMenu icon={TwitterIcon}>
                    Twitter
                </LinkButtonSideMenu>
            </Group>
            <LinkButtonSideMenu icon={SettingsIcon}>
                    Settings
            </LinkButtonSideMenu>
        </Buttons>
    </Container>
  )
}

export default SideMenu