import styled from 'styled-components'

const Text = styled.span`
  cursor: pointer;
  font-family: 'Nunito', sans-serif;
  font-weight: 800;
  color: ${props => props.textColor};
  font-size: ${props => props.fontSize};
`;

const LogoText = ({fontSize, color, children}) => {
  return (
    <Text fontSize={fontSize}
          textColor={color}>
      {children}
    </Text>
  )
};

export default LogoText;