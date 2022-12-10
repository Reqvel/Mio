import React from 'react'
import styled from 'styled-components'
import pagesPaths from '../../routes/PagesPaths';
import { StyledLink } from '../../components/common/Links';
import { ReactComponent as Illustration } from '../../svgs/CheckCircle.svg';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const Header = styled.h1`
  margin: 0 0 48px 0;
  font-size: 3.052rem;
  font-weight: 700;
  color: ${props => props.theme.textColor.primary};
`

const StyledLinkDecorated = styled(StyledLink)`
  text-decoration: underline;
  text-decoration-thickness: 2px;
  color: ${props => props.theme.textColor.primary};
`

const Text = styled.span`
  color: ${props => props.theme.textColor.primary};
  margin-bottom: 64px;
`

const IllustrationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 48px;
`

const PasswordChanged = () => {
  return (
    <Container>
        <Header>Password changed</Header>
        <Text>
            Your account's password has been changed.
            You can now&nbsp;
            <StyledLinkDecorated to={pagesPaths.signIn}>
              Sign In
            </StyledLinkDecorated> 
            &nbsp;to the applicaton.
        </Text>
        <IllustrationContainer>
            <Illustration/>
        </IllustrationContainer>
    </Container>
  )
}

export default PasswordChanged