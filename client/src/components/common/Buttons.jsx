import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    padding: ${props => props.padding ? props.padding : '12px 48px'};
    font-size: ${props => props.fontSize};
    font-weight: 600;
    color: ${props => props.textColor};
    background: ${props => props.buttonColor ? props.buttonColor : 'transparent'};
    border-radius: 12px;
    border: 2px solid ${props => props.borderColor ? props.borderColor : 'transparent'};
    cursor: pointer;
    transition: background 0.3s ease; 

    :hover {
        background: ${props => props.buttonColorHover};
        transition: background 0.3s ease; 
    };
`;

export const Button = ({padding,
                        fontSize, 
                        textColor, 
                        buttonColor, 
                        buttonColorHover, 
                        borderColor, 
                        children}) => {
  return (
    <StyledButton padding={padding}
               fontSize={fontSize}
               textColor={textColor}
               buttonColor={buttonColor}
               buttonColorHover={buttonColorHover}
               borderColor={borderColor}>
        {children}
    </StyledButton>
  )
};
