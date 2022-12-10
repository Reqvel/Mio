import React from 'react'
import styled from 'styled-components'
import { ReactComponent as Illustration } from '../../svgs/EmailSent.svg';
import { StyledLink } from '../../components/common/Links';
import pagesPaths from '../../routes/PagesPaths';

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

const Text = styled.span`
  color: ${props => props.theme.textColor.subtile};
  margin-top: 48px;
  margin-bottom: 48px;
`

const StyledLinkDecorated = styled(StyledLink)`
  text-decoration: underline;
  text-decoration-thickness: 2px;
  color: ${props => props.theme.textColor.primary};
`

const Details = styled.span`
  font-weight: 600;
  color: ${props => props.theme.textColor.primary};
`

const ResetPasswordCheckEmail = () => {
  return (
    <Container>
      <Header>Check your email</Header>
      <Illustration/>
      <Text>
        We've sent password reset link to your email address.
      </Text>
      <Details>
        If it dosen't arrive soon, check your spam folder or&nbsp;
        <StyledLinkDecorated to={pagesPaths.resetPassword}>
          send the email again.
        </StyledLinkDecorated>
      </Details>
    </Container>
  )
}

export default ResetPasswordCheckEmail