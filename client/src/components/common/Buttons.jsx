import styled from 'styled-components';

export const Button = styled.button`
    padding: 12px 48px;
    font-weight: 600;
    color: ${props => props.theme.textSecondary};
    background: ${props => props.theme.buttonFilled};
    border-radius: 12px;
    border: 2px solid transparent;
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

const ButtonIconWrapper = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 52px;
    height: 52px;
    background: transparent;
    border-radius: 12px;
    border: 2px solid transparent;
    cursor: pointer;
    transition: background 0.3s ease; 

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

const Icon = styled.img`
    height: auto;
    width: 24px;
`

export const ButtonIcon = ({icon, children}) => {
    return (
        <ButtonIconWrapper>
            <Icon src={icon}/>
            {children}
        </ButtonIconWrapper>
    )
}