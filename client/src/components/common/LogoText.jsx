import styled from 'styled-components'
import { logoText } from '../../data/data';

const LogoText = styled.span`
  cursor: pointer;
  font-family: 'Nunito', sans-serif;
  font-weight: 800;
  color: ${props => props.theme.textPrimary};
`;

export const Small = styled(LogoText)`
  font-size: 2.441rem;
`;

export const Medium = styled(LogoText)`
  font-size: 3.052rem;
`;

export const Large = styled(LogoText)`
  font-size: 3.815rem;
`;


export const LogoTextS = () => {
  return (
    <Small>{logoText}</Small>
  )
};

export const LogoTextM = () => {
  return (
    <Medium>{logoText}</Medium>
  )
};

export const LogoTextL = () => {
  return (
    <Large>{logoText}</Large>
  )
};