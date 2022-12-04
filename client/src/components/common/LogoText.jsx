import styled from 'styled-components'
import { logoText } from '../../data/data';

const LogoText = styled.span`
  font-family: 'Nunito', sans-serif;
  font-weight: 800;
  color: ${props => props.textColor};
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


export const LogoTextS = ({color}) => {
  return (
    <Small textColor={color}>{logoText}</Small>
  )
};

export const LogoTextM = ({color}) => {
  return (
    <Medium textColor={color}>{logoText}</Medium>
  )
};

export const LogoTextL = ({color}) => {
  return (
    <Large Medium textColor={color}>{logoText}</Large>
  )
};