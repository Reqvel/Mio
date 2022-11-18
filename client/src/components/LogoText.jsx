import styled from 'styled-components'

const LogoText = styled.a`
  font-family: 'Nunito', sans-serif;
  font-weight: 800;
  font-size: ${props => props.fontSize};
  cursor: pointer;
  color: ${props => props.color};
`;

export default LogoText;