import styled from 'styled-components'

const LogoText = styled.span`
  cursor: pointer;
  font-family: 'Nunito', sans-serif;
  font-weight: 800;
  color: ${props => props.theme.textPrimary};
`;

export const LogoTextS = styled(LogoText)`
  font-size: 2.441rem;
`;

export const LogoTextM = styled(LogoText)`
  font-size: 3.052rem;
`;

export const LogoTextL = styled(LogoText)`
  font-size: 3.815rem;
`;