import React from 'react'
import styled from 'styled-components'
import { Button, ButtonOutlined } from '../common/Buttons'

const Container = styled.li`
  display: flex;
  gap: 12px;
  background-color: ${props => props.theme.components.card.social.primaryColor};
  border-radius: 12px;
  padding: 24px 12px;
`

const Left = styled.div`
  padding: 0 12px;
`

const Icon = styled.img`
  height: auto;
  width: 36px;
  padding: 22px;
  border-radius: 12px;
  background-color: ${props => props.theme.components.card.social.secondaryColor};
`

const Right = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
`

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Header = styled.span`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${props => props.theme.textColor.primary};
`

const Details = styled.div`
  display: block;
  color: ${props => props.theme.textColor.subtile};
`

const SocialneworkCard = ({icon, 
                           socialName,
                           details,
                           isConnected,
                           isDisabled,
                           handleConnect,
                           handleDisconnect,
                           isLoading}) => {
  return (
    <Container>
      <Left>
        <Icon src={icon}/>
      </Left>
      <Right>
        <HeaderContainer>
          <Header>
            {socialName}
          </Header>
          {
            isConnected
              ? <ButtonOutlined onClick={handleDisconnect} disabled={(isLoading)}>
                  {
                    isLoading
                     ? 'Disconnecting...'
                     : 'Disconnect'
                  }
                </ButtonOutlined>
              : <Button onClick={handleConnect} disabled={(isDisabled || isLoading)}>
                  {
                    isLoading
                     ? 'Connecting...'
                     : 'Connect'
                  }
                </Button>
          }
        </HeaderContainer>
        <Details>
          {details}
        </Details>
      </Right>
    </Container>
  )
}

export default SocialneworkCard