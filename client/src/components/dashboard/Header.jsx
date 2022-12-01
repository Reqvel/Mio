import React from 'react'
import styled from 'styled-components';
import { ButtonIcon } from '../common/Buttons';
import NotificationIcon from '../../svgs/icons/Notification.svg'
import UserIcon from '../../svgs/icons/User.svg'

const Wrapper = styled.div`
  padding-top: 40px;
  padding-bottom: 40px;
`;

const Container = styled.div`
  max-width: ${props => props.theme.mainTheme.maxWidthDashboard};
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  padding-left: ${props => props.theme.mainTheme.sidePaddingDashboard};
  padding-right: ${props => props.theme.mainTheme.sidePaddingDashboard};
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
`

const PageHeader = styled.span`
  font-size: 3.815rem;
  font-weight: 700;
  color: ${props => props.theme.textPrimary};
`

const PageDetails = styled.span`
  font-size: 0.8rem;
  color: ${props => props.theme.textSubtile};
`

const Right = styled.div`
  display: flex;
  gap: 24px;
`

const Header = ({header, details}) => {
  return (
    <Wrapper>
        <Container>
            <Left>
                <PageHeader>
                   {header}
                </PageHeader>
                <PageDetails>
                    {details}
                </PageDetails>
            </Left>
            <Right>
                <ButtonIcon icon={NotificationIcon}/>
                <ButtonIcon icon={UserIcon}/>
            </Right>
        </Container>
    </Wrapper>
  )
}

export default Header