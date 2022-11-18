import React from 'react';
import styled from 'styled-components';

const Container = styled.button`
    padding: 12px 48px 12px;
    font-size: ${props => props.fontSize};
    font-weight: 600;
    color: ${props => props.textColor};
    background: ${props => props.buttonColor};
    border-radius: 12px;
    border: 2px solid ${props => props.borderColor};
    cursor: pointer;
    transition: background 0.3s ease; 

    :hover {
        background: ${props => props.buttonColorHover};
        transition: background 0.3s ease; 
    };
`;

export const Button = ({fontSize, 
                        textColor, 
                        buttonColor, 
                        buttonColorHover, 
                        borderColor, 
                        text}) => {
  return (
    <Container fontSize={fontSize}
               textColor={textColor}
               buttonColor={buttonColor}
               buttonColorHover={buttonColorHover}
               borderColor={borderColor}>
        {text}
    </Container>
  )
};
