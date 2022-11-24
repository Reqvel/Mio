import React from 'react'
import styled from 'styled-components'
import { LogoTextS } from '../common/LogoText'
import { ButtonSideMenu } from '../common/Buttons'
import HomeIcon from '../../svgs/icons/Home.svg'
import CalendarIcon from '../../svgs/icons/Calendar.svg'
import KanbanIcon from '../../svgs/icons/Kanban.svg'
import YouTubeIcon from '../../svgs/icons/YouTube.svg'
import TikTokIcon from '../../svgs/icons/TikTok.svg'
import InstagamIcon from '../../svgs/icons/Instagram.svg'
import TwitterIcon from '../../svgs/icons/Twitter.svg'
import SettingsIcon from '../../svgs/icons/Settings.svg'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  max-width: 168px;
  width: 100%;
  padding: 40px 0px;
  background-color: ${props => props.theme.bgPrimary};
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
            <LogoTextS/>
        </Logo>
        <Buttons>
            <ButtonSideMenu icon={HomeIcon}>
                Home
            </ButtonSideMenu>
            <Group>
                <ButtonSideMenu icon={CalendarIcon}>
                    Calendar
                </ButtonSideMenu>
                <ButtonSideMenu icon={KanbanIcon}>
                    Kanban
                </ButtonSideMenu>
            </Group>
            <Group>
                <ButtonSideMenu icon={YouTubeIcon}>
                    YouTube
                </ButtonSideMenu>
                <ButtonSideMenu icon={TikTokIcon}>
                    TikTok
                </ButtonSideMenu>
                <ButtonSideMenu icon={InstagamIcon}>
                    Instagam
                </ButtonSideMenu>
                <ButtonSideMenu icon={TwitterIcon}>
                    Twitter
                </ButtonSideMenu>
            </Group>
            <ButtonSideMenu icon={SettingsIcon}>
                    Settings
            </ButtonSideMenu>
        </Buttons>
    </Container>
  )
}

export default SideMenu