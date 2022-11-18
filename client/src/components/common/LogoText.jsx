import styled from 'styled-components'

const Container = styled.a`
  font-family: 'Nunito', sans-serif;
  font-weight: 800;
  font-size: ${props => props.fontSize};
  cursor: pointer;
  color: ${props => props.color};
`;

const LogoText = ({fontSize, color, text}) => {
  return (
    <Container fontSize={fontSize} color={color}>{text}</Container>
  )
};

export default LogoText;