import styled from 'styled-components';

const Button = styled.button`
    font-size: 1rem;
    padding: ${props => props.padding ? props.padding : '12px 48px'};
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

export default Button;