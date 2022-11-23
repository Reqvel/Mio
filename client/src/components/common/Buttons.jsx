import styled from 'styled-components';

export const Button = styled.button`
    font-size: 1rem;
    padding: 12px 48px;
    font-weight: 600;
    color: ${props => props.theme.textSecondary};
    background: ${props => props.theme.buttonFilled};
    border-radius: 12px;
    border: none;
    cursor: pointer;
    transition: background 0.3s ease; 

    :hover {
        background: ${props => props.theme.buttonFilledHover};
        transition: background 0.3s ease; 
    };
`;

export const ButtonTransparent = styled(Button)`
    color: ${props => props.theme.textPrimary};
    background: transparent;

    :hover {
        background: ${props => props.theme.buttonTransparentHover};
    };
`

export const ButtonOutlined = styled(ButtonTransparent)`
    border: 2px solid ${props => props.theme.buttonBorder};
`

export const ButtonBig = styled(Button)`
    padding: 20px 64px;
`