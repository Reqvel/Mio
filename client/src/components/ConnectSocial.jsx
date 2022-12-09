import React from 'react'
import styled from 'styled-components'
import { LinkButtonOutlined } from './common/Links'
import { ReactComponent as Illustration } from '../svgs/NotConnected.svg';

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const IllustrationContainer = styled.div`
  margin-bottom: 64px;
`;

const Header = styled.span`
  font-size: 1.563rem;
  font-weight: 700;
  color: ${props => props.theme.textColor.primary};
  margin-bottom: 16px;
`

const Details = styled.span`
  color: ${props => props.theme.textColor.subtile};
  text-align: center;
  width: 50%;
  margin-bottom: 24px;
`

const ConnectSocial = ({socialName, details}) => {
  return (
    <Container>
      <IllustrationContainer>
        <Illustration/>
      </IllustrationContainer>
      <Header>
        Your {socialName} account is not connected
      </Header>
      <Details>
        By connecting your account with your {socialName} account, you acknowledge and agree that information you choose to share ...
      </Details>
      <LinkButtonOutlined>
        Connect
      </LinkButtonOutlined>
    </Container>
  )
}

export default ConnectSocial