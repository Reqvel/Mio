import React from 'react'
import styled from 'styled-components';
import { ButtonIcon } from '../common/Buttons';
import NotificationIcon from '../../svgs/icons/Notification.svg'
import UserIcon from '../../svgs/icons/User.svg'
import { useSelector } from 'react-redux';
import useAppearAnimation from '../../hooks/useAppearAnimation';

const Wrapper = styled.div`
  padding-top: 40px;
  padding-bottom: 40px;
`;

const Container = styled.div`
  max-width: ${props => props.theme.maxWidth.dashboard};
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  padding-left: ${props => props.theme.padding.dashboard};
  padding-right: ${props => props.theme.padding.dashboard};
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
`

const PageHeader = styled.span`
  font-size: 3.815rem;
  font-weight: 700;
  color: ${props => props.theme.textColor.primary};
`

const PageDetails = styled.span`
  font-size: 0.8rem;
  color: ${props => props.theme.textColor.subtile};
`

const Right = styled.div`
  display: flex;
  gap: 24px;
`

const Header = () => {
  const { header, details } = useSelector(state => state.dashboard)
  const componentRef = useAppearAnimation(0.3, [header, details])

  return (
    <Wrapper>
        <Container>
            <Left ref={componentRef}>
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